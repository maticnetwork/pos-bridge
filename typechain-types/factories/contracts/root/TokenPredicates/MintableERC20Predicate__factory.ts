/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MintableERC20Predicate,
  MintableERC20PredicateInterface,
} from "../../../../contracts/root/TokenPredicates/MintableERC20Predicate";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "exitor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ExitedMintableERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositReceiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LockedMintableERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "MANAGER_ROLE",
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
    inputs: [],
    name: "TOKEN_TYPE",
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
    inputs: [],
    name: "TRANSFER_EVENT_SIG",
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
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "log",
        type: "bytes",
      },
    ],
    name: "exitTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositReceiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
    ],
    name: "lockTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526002805460ff1916905534801561001a57600080fd5b5061002c6001600160e01b0361003116565b610040565b6002805460ff19166001179055565b61170e8061004f6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063b017a30f1161008c578063d547741f11610066578063d547741f14610252578063e375b64e1461027e578063ec87621c1461030f578063f741a41714610317576100ea565b8063b017a30f14610207578063c4d66de81461020f578063ca15c87314610235576100ea565b8063609c92b8116100c8578063609c92b8146101785780639010d07c1461018057806391d14854146101bf578063a217fddf146101ff576100ea565b8063248a9ca3146100ef5780632f2ff15d1461011e57806336568abe1461014c575b600080fd5b61010c6004803603602081101561010557600080fd5b5035610397565b60408051918252519081900360200190f35b61014a6004803603604081101561013457600080fd5b50803590602001356001600160a01b03166103af565b005b61014a6004803603604081101561016257600080fd5b50803590602001356001600160a01b031661041b565b61010c61047c565b6101a36004803603604081101561019657600080fd5b50803590602001356104a1565b604080516001600160a01b039092168252519081900360200190f35b6101eb600480360360408110156101d557600080fd5b50803590602001356001600160a01b03166104c8565b604080519115158252519081900360200190f35b61010c6104e6565b61010c6104eb565b61014a6004803603602081101561022557600080fd5b50356001600160a01b0316610506565b61010c6004803603602081101561024b57600080fd5b50356105cc565b61014a6004803603604081101561026857600080fd5b50803590602001356001600160a01b03166105e3565b61014a6004803603608081101561029457600080fd5b6001600160a01b03823581169260208101358216926040820135909216918101906080810160608201356401000000008111156102d057600080fd5b8201836020820111156102e257600080fd5b8035906020019184600183028401116401000000008311171561030457600080fd5b50909250905061063c565b61010c61078d565b61014a6004803603604081101561032d57600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561035857600080fd5b82018360208201111561036a57600080fd5b8035906020019184600183028401116401000000008311171561038c57600080fd5b5090925090506107b1565b6000818152602081905260409020600201545b919050565b6000828152602081905260409020600201546103d2906103cd610b0a565b6104c8565b61040d5760405162461bcd60e51b815260040180806020018281038252602f8152602001806115af602f913960400191505060405180910390fd5b6104178282610b0f565b5050565b610423610b0a565b6001600160a01b0316816001600160a01b0316146104725760405162461bcd60e51b815260040180806020018281038252602f8152602001806116aa602f913960400191505060405180910390fd5b6104178282610b7e565b604080516c04d696e7461626c65455243323609c1b8152905190819003600d01902081565b60008281526020819052604081206104bf908363ffffffff610bed16565b90505b92915050565b60008281526020819052604081206104bf908363ffffffff610bf916565b600081565b60405180602161165f82396021019050604051809103902081565b60025460ff161561054f576040805162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b610586604051806040016040528060168152602001754d696e7461626c65455243323050726564696361746560501b815250610c0e565b61059160008261040d565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c0190206105bc908261040d565b506002805460ff19166001179055565b60008181526020819052604081206104c290610cac565b600082815260208190526040902060020154610601906103cd610b0a565b6104725760405162461bcd60e51b81526004018080602001828103825260308152602001806115de6030913960400191505060405180910390fd5b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c019020610669816103cd610b0a565b6001906107095760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106fa5780601f106106cf576101008083540402835291602001916106fa565b820191906000526020600020905b8154815290600101906020018083116106dd57829003601f168201915b50509250505060405180910390fd5b5060008383602081101561071c57600080fd5b5060408051913580835290519092506001600160a01b038088169289821692918b16917f31472eae9e158460fea5622d1fcb0c5bdc65b6ffb51827f7bc9ef5788410c34c9181900360200190a46107846001600160a01b03861688308463ffffffff610cb716565b50505050505050565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c01902081565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c0190206107de816103cd610b0a565b6001906108445760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106fa5780601f106106cf576101008083540402835291602001916106fa565b50606061088e61088985858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d1792505050565b610d3c565b905060606108af826001815181106108a257fe5b6020026020010151610d3c565b9050604051808061165f60219139602101905060405180910390206108e7826000815181106108da57fe5b6020026020010151610e24565b146109235760405162461bcd60e51b815260040180806020018281038252602981526020018061160e6029913960400191505060405180910390fd5b6000610935826001815181106108da57fe5b905060006001600160a01b0316610952836002815181106108da57fe5b6001600160a01b0316146109975760405162461bcd60e51b81526004018080602001828103825260288152602001806116376028913960400191505060405180910390fd5b604080516370a0823160e01b8152306004820152905188916000916001600160a01b038416916370a08231916024808301926020929190829003018186803b1580156109e257600080fd5b505afa1580156109f6573d6000803e3d6000fd5b505050506040513d6020811015610a0c57600080fd5b50518551909150600090610a2790879060029081106108da57fe5b905080821015610a9957604080516340c10f1960e01b8152306004820152838303602482015290516001600160a01b038516916340c10f1991604480830192600092919082900301818387803b158015610a8057600080fd5b505af1158015610a94573d6000803e3d6000fd5b505050505b610ab36001600160a01b038b16858363ffffffff610e7216565b896001600160a01b0316846001600160a01b03167f42315cb7471194a6f162099cd1052b95b750612a46472e887f7784b95aa2c4c3836040518082815260200191505060405180910390a350505050505050505050565b335b90565b6000828152602081905260409020610b2d908263ffffffff610ec916565b1561041757610b3a610b0a565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081905260409020610b9c908263ffffffff610ede16565b1561041757610ba9610b0a565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006104bf8383610ef3565b60006104bf836001600160a01b038416610f57565b806040516020018082805190602001908083835b60208310610c415780518252601f199092019160209182019101610c22565b51815160209384036101000a60001901801990921691161790527f3a20494e53554646494349454e545f5045524d495353494f4e530000000000009190930190815260408051808303600519018152601a9092019052805161041795506001945092019190506114da565b60006104c282610f6f565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610d11908590610f73565b50505050565b610d1f611558565b506040805180820190915281518152602082810190820152919050565b6060610d4782611024565b610d5057600080fd5b6000610d5b8361105e565b905060608167ffffffffffffffff81118015610d7657600080fd5b50604051908082528060200260200182016040528015610db057816020015b610d9d611558565b815260200190600190039081610d955790505b5090506000610dc285602001516110ba565b60208601510190506000805b84811015610e1957610ddf8361111d565b9150604051806040016040528083815260200184815250848281518110610e0257fe5b602090810291909101015291810191600101610dce565b509195945050505050565b805160009015801590610e3957508151602110155b610e4257600080fd5b600080610e4e846111b6565b815191935091506020821015610e6a5760208290036101000a90045b949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610ec4908490610f73565b505050565b60006104bf836001600160a01b0384166111dc565b60006104bf836001600160a01b038416611226565b81546000908210610f355760405162461bcd60e51b815260040180806020018281038252602281526020018061158d6022913960400191505060405180910390fd5b826000018281548110610f4457fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6060610fc8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112ec9092919063ffffffff16565b805190915015610ec457808060200190516020811015610fe757600080fd5b5051610ec45760405162461bcd60e51b815260040180806020018281038252602a815260200180611680602a913960400191505060405180910390fd5b8051600090611035575060006103aa565b6020820151805160001a9060c0821015611054576000925050506103aa565b5060019392505050565b805160009061106f575060006103aa565b6000809050600061108384602001516110ba565b602085015185519181019250015b808210156110b1576110a28261111d565b60019093019290910190611091565b50909392505050565b8051600090811a60808110156110d45760009150506103aa565b60b88110806110ef575060c081108015906110ef575060f881105b156110fe5760019150506103aa565b60c08110156111125760b5190190506103aa565b60f5190190506103aa565b80516000908190811a608081101561113857600191506111af565b60b881101561114d57607e19810191506111af565b60c081101561117a5760b78103600185019450806020036101000a855104600182018101935050506111af565b60f881101561118f5760be19810191506111af565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b60008060006111c884602001516110ba565b602085015194519481019594039392505050565b60006111e88383610f57565b61121e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104c2565b5060006104c2565b600081815260018301602052604081205480156112e2578354600019808301919081019060009087908390811061125957fe5b906000526020600020015490508087600001848154811061127657fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806112a657fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506104c2565b60009150506104c2565b6060610e6a84846000856060611301856114a1565b611352576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106113915780518252601f199092019160209182019101611372565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146113f3576040519150601f19603f3d011682016040523d82523d6000602084013e6113f8565b606091505b5091509150811561140c579150610e6a9050565b80511561141c5780518082602001fd5b8360405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561146657818101518382015260200161144e565b50505050905090810190601f1680156114935780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610e6a575050151592915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061151b57805160ff1916838001178555611548565b82800160010185558215611548579182015b8281111561154857825182559160200191906001019061152d565b50611554929150611572565b5090565b604051806040016040528060008152602001600081525090565b610b0c91905b80821115611554576000815560010161157856fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654d696e7461626c6545524332305072656469636174653a20494e56414c49445f5349474e41545552454d696e7461626c6545524332305072656469636174653a20494e56414c49445f52454345495645525472616e7366657228616464726573732c616464726573732c75696e74323536295361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220d4aea47c6fe344c4e476cbccdc4aa04dcc606fce2908cff675db85e504af5c7e64736f6c63430006060033";

type MintableERC20PredicateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintableERC20PredicateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintableERC20Predicate__factory extends ContractFactory {
  constructor(...args: MintableERC20PredicateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MintableERC20Predicate> {
    return super.deploy(overrides || {}) as Promise<MintableERC20Predicate>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MintableERC20Predicate {
    return super.attach(address) as MintableERC20Predicate;
  }
  override connect(signer: Signer): MintableERC20Predicate__factory {
    return super.connect(signer) as MintableERC20Predicate__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableERC20PredicateInterface {
    return new utils.Interface(_abi) as MintableERC20PredicateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableERC20Predicate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MintableERC20Predicate;
  }
}
