pragma solidity "0.6.6";

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {NetworkAgnostic} from "../../common/NetworkAgnostic.sol";

contract DummyERC1155 is ERC1155, NetworkAgnostic {
    constructor(string memory uri)
        public
        ERC1155(uri)
        // TODO: get name from uri
        NetworkAgnostic(uri, "1", getChainId())
    {}

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

    function mint(address account, uint256 id, uint256 amount) public {
        _mint(account, id, amount, bytes(""));
    }
}
