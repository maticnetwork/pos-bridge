/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DummyERC1155,
  DummyERC1155Interface,
} from "../../../../contracts/root/RootToken/DummyERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "ERC712_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526004805460ff191690553480156200001b57600080fd5b506040516200241c3803806200241c833981810160405260208110156200004157600080fd5b81019080805160405193929190846401000000008211156200006257600080fd5b9083019060208201858111156200007857600080fd5b82516401000000008111828201881017156200009357600080fd5b82525081516020918201929091019080838360005b83811015620000c2578181015183820152602001620000a8565b50505050905090810190601f168015620000f05780820380516001836020036101000a031916815260200191505b50604052508291506200011590506301ffc9a760e01b6001600160e01b036200017b16565b62000129816001600160e01b036200020016565b62000144636cdb3d1360e11b6001600160e01b036200017b16565b6200015f6303a24d0760e21b6001600160e01b036200017b16565b5062000174816001600160e01b036200021916565b50620003f6565b6001600160e01b03198082161415620001db576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200021590600390602084019062000354565b5050565b60045460ff161562000263576040805162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b62000277816001600160e01b036200028716565b506004805460ff19166001179055565b6040518060800160405280604f8152602001620023cd604f913980516020918201208251838301206040805180820190915260018152603160f81b930192909252907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc630620002fe6001600160e01b036200034f16565b604080516020808201979097528082019590955260608501939093526001600160a01b03909116608084015260a0808401919091528151808403909101815260c09092019052805191012060055550565b465b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039757805160ff1916838001178555620003c7565b82800160010185558215620003c7579182015b82811115620003c7578251825591602001919060010190620003aa565b50620003d5929150620003d9565b5090565b6200035191905b80821115620003d55760008155600101620003e0565b611fc780620004066000396000f3fe6080604052600436106100dc5760003560e01c80632d0335ab1161007f5780634e1273f4116100595780634e1273f414610521578063a22cb465146106a1578063e985e9c5146106dc578063f242432a14610717576100dc565b80632d0335ab1461030b5780632eb2c2d61461033e5780633408e4701461050c576100dc565b80630e89341c116100bb5780630e89341c146102765780630f7e5970146102a0578063156e29f6146102b557806320379ee5146102f6576100dc565b8062fdd58e146100e157806301ffc9a71461012c5780630c53c51c14610174575b600080fd5b3480156100ed57600080fd5b5061011a6004803603604081101561010457600080fd5b506001600160a01b0381351690602001356107ed565b60408051918252519081900360200190f35b34801561013857600080fd5b506101606004803603602081101561014f57600080fd5b50356001600160e01b03191661085c565b604080519115158252519081900360200190f35b610201600480360360a081101561018a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156101b457600080fd5b8201836020820111156101c657600080fd5b803590602001918460018302840111600160201b831117156101e757600080fd5b91935091508035906020810135906040013560ff1661087b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023b578181015183820152602001610223565b50505050905090810190601f1680156102685780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028257600080fd5b506102016004803603602081101561029957600080fd5b5035610b04565b3480156102ac57600080fd5b50610201610b9c565b3480156102c157600080fd5b506102f4600480360360608110156102d857600080fd5b506001600160a01b038135169060208101359060400135610bb9565b005b34801561030257600080fd5b5061011a610bd9565b34801561031757600080fd5b5061011a6004803603602081101561032e57600080fd5b50356001600160a01b0316610bdf565b34801561034a57600080fd5b506102f4600480360360a081101561036157600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561039457600080fd5b8201836020820111156103a657600080fd5b803590602001918460208302840111600160201b831117156103c757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561041657600080fd5b82018360208201111561042857600080fd5b803590602001918460208302840111600160201b8311171561044957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561049857600080fd5b8201836020820111156104aa57600080fd5b803590602001918460018302840111600160201b831117156104cb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bfa945050505050565b34801561051857600080fd5b5061011a610ef8565b34801561052d57600080fd5b506106516004803603604081101561054457600080fd5b810190602081018135600160201b81111561055e57600080fd5b82018360208201111561057057600080fd5b803590602001918460208302840111600160201b8311171561059157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156105e057600080fd5b8201836020820111156105f257600080fd5b803590602001918460208302840111600160201b8311171561061357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610efc945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561068d578181015183820152602001610675565b505050509050019250505060405180910390f35b3480156106ad57600080fd5b506102f4600480360360408110156106c457600080fd5b506001600160a01b038135169060200135151561107a565b3480156106e857600080fd5b50610160600480360360408110156106ff57600080fd5b506001600160a01b0381358116916020013516611169565b34801561072357600080fd5b506102f4600480360360a081101561073a57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561077957600080fd5b82018360208201111561078b57600080fd5b803590602001918460018302840111600160201b831117156107ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611197945050505050565b60006001600160a01b0383166108345760405162461bcd60e51b815260040180806020018281038252602b815260200180611d68602b913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b6060610885611ce1565b604080516060810182526001600160a01b038a1660008181526006602090815290849020548352808301919091528251601f8a0182900482028101820184528981529192830191908a908a9081908401838280828437600092019190915250505091525090506108f88882878787611368565b6109335760405162461bcd60e51b8152600401808060200182810382526021815260200180611ed66021913960400191505060405180910390fd5b6001600160a01b0388166000818152600660209081526040918290208054600101905581518181529081018990523392917f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b918b918b919081908101848480828437600083820152604051601f909101601f19169092018290039550909350505050a360006060306001600160a01b031689898c6040516020018084848082843780830192505050826001600160a01b03166001600160a01b031660601b815260140193505050506040516020818303038152906040526040518082805190602001908083835b60208310610a395780518252601f199092019160209182019101610a1a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610a9b576040519150601f19603f3d011682016040523d82523d6000602084013e610aa0565b606091505b509150915081610af7576040805162461bcd60e51b815260206004820152601c60248201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000604482015290519081900360640190fd5b9998505050505050505050565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610b905780601f10610b6557610100808354040283529160200191610b90565b820191906000526020600020905b815481529060010190602001808311610b7357829003601f168201915b50505050509050919050565b604051806040016040528060018152602001603160f81b81525081565b610bd483838360405180602001604052806000815250611445565b505050565b60055490565b6001600160a01b031660009081526006602052604090205490565b8151835114610c3a5760405162461bcd60e51b8152600401808060200182810382526028815260200180611f496028913960400191505060405180910390fd5b6001600160a01b038416610c7f5760405162461bcd60e51b8152600401808060200182810382526025815260200180611e556025913960400191505060405180910390fd5b610c87611553565b6001600160a01b0316856001600160a01b03161480610cb25750610cb285610cad611553565b611169565b610ced5760405162461bcd60e51b8152600401808060200182810382526032815260200180611e7a6032913960400191505060405180910390fd5b6000610cf7611553565b9050610d07818787878787610ef0565b60005b8451811015610e08576000858281518110610d2157fe5b602002602001015190506000858381518110610d3957fe5b60200260200101519050610da6816040518060600160405280602a8152602001611eac602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546115629092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a1681522054610ddd90826115f9565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001610d0a565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610e8e578181015183820152602001610e76565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610ecd578181015183820152602001610eb5565b5050505090500194505050505060405180910390a4610ef081878787878761165a565b505050505050565b4690565b60608151835114610f3e5760405162461bcd60e51b8152600401808060200182810382526029815260200180611f206029913960400191505060405180910390fd5b6060835167ffffffffffffffff81118015610f5857600080fd5b50604051908082528060200260200182016040528015610f82578160200160208202803683370190505b50905060005b84518110156110725760006001600160a01b0316858281518110610fa857fe5b60200260200101516001600160a01b03161415610ff65760405162461bcd60e51b8152600401808060200182810382526031815260200180611d936031913960400191505060405180910390fd5b6001600085838151811061100657fe5b60200260200101518152602001908152602001600020600086838151811061102a57fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061105f57fe5b6020908102919091010152600101610f88565b509392505050565b816001600160a01b031661108c611553565b6001600160a01b031614156110d25760405162461bcd60e51b8152600401808060200182810382526029815260200180611ef76029913960400191505060405180910390fd5b80600260006110df611553565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155611123611553565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b0384166111dc5760405162461bcd60e51b8152600401808060200182810382526025815260200180611e556025913960400191505060405180910390fd5b6111e4611553565b6001600160a01b0316856001600160a01b0316148061120a575061120a85610cad611553565b6112455760405162461bcd60e51b8152600401808060200182810382526029815260200180611e076029913960400191505060405180910390fd5b600061124f611553565b905061126f81878761126088611998565b61126988611998565b87610ef0565b6112bc836040518060600160405280602a8152602001611eac602a913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff61156216565b60008581526001602090815260408083206001600160a01b038b811685529252808320939093558716815220546112f390846115f9565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610ef08187878787876119dc565b60006001600160a01b0386166113af5760405162461bcd60e51b8152600401808060200182810382526025815260200180611e306025913960400191505060405180910390fd5b60016113c26113bd87611b6f565b611bfb565b83868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561141c573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b6001600160a01b03841661148a5760405162461bcd60e51b8152600401808060200182810382526021815260200180611f716021913960400191505060405180910390fd5b6000611494611553565b90506114a68160008761126088611998565b60008481526001602090815260408083206001600160a01b03891684529091529020546114d9908463ffffffff6115f916565b60008581526001602090815260408083206001600160a01b03808b16808652918452828520959095558151898152928301889052815190948616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a461154c816000878787876119dc565b5050505050565b600061155d611c47565b905090565b600081848411156115f15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115b657818101518382015260200161159e565b50505050905090810190601f1680156115e35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611653576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b61166c846001600160a01b0316611ca5565b15610ef057836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561170c5781810151838201526020016116f4565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561174b578181015183820152602001611733565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561178757818101518382015260200161176f565b50505050905090810190601f1680156117b45780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1580156117d957600080fd5b505af19250505080156117fe57506040513d60208110156117f957600080fd5b505160015b611940576040516000815260443d101561181a575060006118b7565b60046000803e60005160e01c6308c379a0811461183b5760009150506118b7565b60043d036004833e81513d602482011167ffffffffffffffff82111715611867576000925050506118b7565b808301805167ffffffffffffffff8111156118895760009450505050506118b7565b8060208301013d86018111156118a7576000955050505050506118b7565b601f01601f191660405250925050505b806118c25750611909565b60405162461bcd60e51b81526020600482018181528351602484015283518493919283926044019190850190808383600083156115b657818101518382015260200161159e565b60405162461bcd60e51b8152600401808060200182810382526034815260200180611d0c6034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b1461198f5760405162461bcd60e51b8152600401808060200182810382526028815260200180611d406028913960400191505060405180910390fd5b50505050505050565b6040805160018082528183019092526060918291906020808301908036833701905050905082816000815181106119cb57fe5b602090810291909101015292915050565b6119ee846001600160a01b0316611ca5565b15610ef057836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a8f578181015183820152602001611a77565b50505050905090810190601f168015611abc5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b158015611adf57600080fd5b505af1925050508015611b0457506040513d6020811015611aff57600080fd5b505160015b611b20576040516000815260443d101561181a575060006118b7565b6001600160e01b0319811663f23a6e6160e01b1461198f5760405162461bcd60e51b8152600401808060200182810382526028815260200180611d406028913960400191505060405180910390fd5b6000604051806080016040528060438152602001611dc460439139805190602001208260000151836020015184604001518051906020012060405160200180858152602001848152602001836001600160a01b03166001600160a01b03168152602001828152602001945050505050604051602081830303815290604052805190602001209050919050565b6000611c05610bd9565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b600033301415611c9f5760606000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150611ca29050565b50335b90565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611cd957508115155b949350505050565b60405180606001604052806000815260200160006001600160a01b0316815260200160608152509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f20616464726573734d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5349474e4552455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e736665725369676e657220616e64207369676e617475726520646f206e6f74206d61746368455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a2646970667358221220ea52cdcfe77a679099a4001a5c532ecf4ca34c16c9cdcea8f1798d78b158ec3f64736f6c63430006060033454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c6164647265737320766572696679696e67436f6e74726163742c627974657333322073616c7429";

type DummyERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DummyERC1155__factory extends ContractFactory {
  constructor(...args: DummyERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DummyERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<DummyERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): DummyERC1155 {
    return super.attach(address) as DummyERC1155;
  }
  override connect(signer: Signer): DummyERC1155__factory {
    return super.connect(signer) as DummyERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyERC1155Interface {
    return new utils.Interface(_abi) as DummyERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyERC1155 {
    return new Contract(address, _abi, signerOrProvider) as DummyERC1155;
  }
}
