pragma solidity "0.6.6";

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {NetworkAgnostic} from "../../common/NetworkAgnostic.sol";

contract DummyERC20 is ERC20, NetworkAgnostic {
    constructor(string memory name, string memory symbol)
        public
        ERC20(name, symbol)
        NetworkAgnostic(name, "1", getChainId())
    {
        uint256 amount = 10**10 * (10**18);
        _mint(_msgSender(), amount);
    }

    function getChainId() public pure returns (uint256 id) {
        // assembly {
        //     id := chainid()
        // }
        id = 5;
    }

    function _msgSender()
        internal
        override
        view
        returns (address payable sender)
    {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(
                    mload(add(array, index)),
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = msg.sender;
        }
        return sender;
    }

    function mint(uint256 amount) public {
        _mint(_msgSender(), amount);
    }
}
