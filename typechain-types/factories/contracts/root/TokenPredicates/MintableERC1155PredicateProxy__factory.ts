/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MintableERC1155PredicateProxy,
  MintableERC1155PredicateProxyInterface,
} from "../../../../contracts/root/TokenPredicates/MintableERC1155PredicateProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_proxyTo",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_new",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_old",
        type: "address",
      },
    ],
    name: "ProxyOwnerUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
    ],
    name: "ProxyUpdated",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
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
    inputs: [],
    name: "proxyOwner",
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
    inputs: [],
    name: "proxyType",
    outputs: [
      {
        internalType: "uint256",
        name: "proxyTypeId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newProxyTo",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "updateAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newProxyTo",
        type: "address",
      },
    ],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107b13803806107b18339818101604052602081101561003357600080fd5b505180610048336001600160e01b0361006116565b61005a816001600160e01b0361009616565b50506100b8565b604080517f6d617469632e6e6574776f726b2e70726f78792e6f776e6572000000000000008152905190819003601901902055565b6000604051808061078f60229139604051908190036022019020929092555050565b6106c8806100c76000396000f3fe6080604052600436106100595760003560e01c8063025313a2146100b3578063025b22bc146100e45780634555d5c9146101175780635c60da1b1461013e578063d88ca2c814610153578063f1739cae146101d3576100a8565b366100a8576100a6610069610206565b6000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061022c92505050565b005b6100a6610069610206565b3480156100bf57600080fd5b506100c861025c565b604080516001600160a01b039092168252519081900360200190f35b3480156100f057600080fd5b506100a66004803603602081101561010757600080fd5b50356001600160a01b031661026b565b34801561012357600080fd5b5061012c610352565b60408051918252519081900360200190f35b34801561014a57600080fd5b506100c8610357565b6100a66004803603604081101561016957600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b509092509050610361565b3480156101df57600080fd5b506100a6600480360360208110156101f657600080fd5b50356001600160a01b03166104b1565b600080600060405180806106716022913960405190819003602201902054935050505090565b600080825160208401856127105a03f43d604051816000823e828015610250578282f35b8282fd5b505050505050565b60006102666105a3565b905090565b336102746105a3565b6001600160a01b0316146102bb576040805162461bcd60e51b81526020600482015260096024820152682727aa2fa7aba722a960b91b604482015290519081900360640190fd5b6102c4816105d5565b6102ff5760405162461bcd60e51b815260040180806020018281038252602581526020018061064c6025913960400191505060405180910390fd5b610307610206565b6001600160a01b0316816001600160a01b03167fd32d24edea94f55e932d9a008afc425a8561462d1b1f57bc6e508e9a6b9509e160405160405180910390a361034f816105f8565b50565b600290565b6000610266610206565b3361036a6105a3565b6001600160a01b0316146103b1576040805162461bcd60e51b81526020600482015260096024820152682727aa2fa7aba722a960b91b604482015290519081900360640190fd5b6103ba8361026b565b60006060306001600160a01b0316348585604051808383808284376040519201945060009350909150508083038185875af1925050503d806000811461041c576040519150601f19603f3d011682016040523d82523d6000602084013e610421565b606091505b50915091508181906102545760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561047657818101518382015260200161045e565b50505050905090810190601f1680156104a35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b336104ba6105a3565b6001600160a01b031614610501576040805162461bcd60e51b81526020600482015260096024820152682727aa2fa7aba722a960b91b604482015290519081900360640190fd5b6001600160a01b03811661054b576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b7fdbe5fd65bcdbae152f24ab660ea68e72b4d4705b57b16e0caae994e214680ee2816105756105a3565b604080516001600160a01b03938416815291909216602082015281519081900390910190a161034f8161061a565b604080517836b0ba34b1973732ba3bb7b93597383937bc3c9737bbb732b960391b815290519081900360190190205490565b60006001600160a01b0382166105ed575060006105f3565b50803b15155b919050565b6000604051808061067160229139604051908190036022019020929092555050565b604080517836b0ba34b1973732ba3bb7b93597383937bc3c9737bbb732b960391b815290519081900360190190205556fe44455354494e4154494f4e5f414444524553535f49535f4e4f545f415f434f4e54524143546d617469632e6e6574776f726b2e70726f78792e696d706c656d656e746174696f6ea26469706673582212204bc558f292c6d314fa30926b82ae68265466834162144b29a28b9f141aabc91364736f6c634300060600336d617469632e6e6574776f726b2e70726f78792e696d706c656d656e746174696f6e";

type MintableERC1155PredicateProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintableERC1155PredicateProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintableERC1155PredicateProxy__factory extends ContractFactory {
  constructor(...args: MintableERC1155PredicateProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _proxyTo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MintableERC1155PredicateProxy> {
    return super.deploy(
      _proxyTo,
      overrides || {}
    ) as Promise<MintableERC1155PredicateProxy>;
  }
  override getDeployTransaction(
    _proxyTo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_proxyTo, overrides || {});
  }
  override attach(address: string): MintableERC1155PredicateProxy {
    return super.attach(address) as MintableERC1155PredicateProxy;
  }
  override connect(signer: Signer): MintableERC1155PredicateProxy__factory {
    return super.connect(signer) as MintableERC1155PredicateProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableERC1155PredicateProxyInterface {
    return new utils.Interface(_abi) as MintableERC1155PredicateProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableERC1155PredicateProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MintableERC1155PredicateProxy;
  }
}
