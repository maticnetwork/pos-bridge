pragma solidity ^0.6.6;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IChildChainManager} from "./IChildChainManager.sol";
import {IChildToken} from "../ChildToken/IChildToken.sol";
import {Initializable} from "../../common/Initializable.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

interface IDepositCallback {
    function processSyncDeposit(address user, address rootToken, bytes calldata depositData) external;
}


contract ChildChainManager is IChildChainManager, Initializable, AccessControl {
    bytes32 public constant DEPOSIT = keccak256("DEPOSIT");
    bytes32 public constant MAP_TOKEN = keccak256("MAP_TOKEN");
    bytes32 public constant MAPPER_ROLE = keccak256("MAPPER_ROLE");
    bytes32 public constant STATE_SYNCER_ROLE = keccak256("STATE_SYNCER_ROLE");

    mapping(address => address) public rootToChildToken;
    mapping(address => address) public childToRootToken;

    modifier only(bytes32 role) {
        require(
            hasRole(role, _msgSender()),
            "ChildChainManager: INSUFFICIENT_PERMISSIONS"
        );
        _;
    }

    function initialize(address _owner) external initializer {
        _setupRole(DEFAULT_ADMIN_ROLE, _owner);
        _setupRole(MAPPER_ROLE, _owner);
        _setupRole(STATE_SYNCER_ROLE, _owner);
    }

    /**
     * @notice Map a token to enable its movement via the PoS Portal, callable only by mappers
     * @param rootToken address of token on root chain
     * @param childToken address of token on child chain
     */
    function mapToken(address rootToken, address childToken)
        external
        override
        only(MAPPER_ROLE)
    {
        _mapToken(rootToken, childToken);
    }

    /**
     * @notice Receive state sync data from root chain, only callable by state syncer
     * @dev state syncing mechanism is used for both depositing tokens and mapping them
     * @param data bytes data from RootChainManager contract
     * `data` is made up of bytes32 `syncType` and bytes `syncData`
     * `syncType` determines if it is deposit or token mapping
     * in case of token mapping, `syncData` is encoded address `rootToken`, address `childToken` and bytes32 `tokenType`
     * in case of deposit, `syncData` is encoded address `user`, address `rootToken` and bytes `depositData`
     * `depositData` is token specific data (amount in case of ERC20). It is passed as is to child token
     */
    function onStateReceive(uint256, bytes calldata data)
        external
        override
        only(STATE_SYNCER_ROLE)
    {
        (bytes32 syncType, bytes memory syncData) = abi.decode(
            data,
            (bytes32, bytes)
        );

        if (syncType == DEPOSIT) {
            _syncDeposit(syncData);
        } else if (syncType == MAP_TOKEN) {
            (address rootToken, address childToken, ) = abi.decode(
                syncData,
                (address, address, bytes32)
            );
            _mapToken(rootToken, childToken);
        } else {
            revert("ChildChainManager: INVALID_SYNC_TYPE");
        }
    }

    function _syncDeposit(bytes memory syncData) private {
        // address callback is optional
        (address user, address rootToken, bytes memory depositData, address callback) = abi
            .decode(syncData, (address, address, bytes, address));
        address childTokenAddress = rootToChildToken[rootToken];
        require(
            childTokenAddress != address(0x0),
            "ChildChainManager: TOKEN_NOT_MAPPED"
        );
        IChildToken childTokenContract = IChildToken(childTokenAddress);
        childTokenContract.deposit(user, depositData);
        if (syncData.length > 64 + depositData.length) {
            IDepositCallback(callback).processSyncDeposit(user, rootToken, depositData);
        }
    }

    function _mapToken(address rootToken, address childToken) private {
        rootToChildToken[rootToken] = childToken;
        childToRootToken[childToken] = rootToken;
        emit TokenMapped(rootToken, childToken);
    }
}
