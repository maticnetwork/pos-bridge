/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ICheckpointManager,
  ICheckpointManagerInterface,
} from "../../../contracts/root/ICheckpointManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "headerBlocks",
    outputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060e98061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806341539d4a14602d575b600080fd5b604760048036036020811015604157600080fd5b5035607b565b6040805195865260208601949094528484019290925260608401526001600160a01b03166080830152519081900360a00190f35b60006020819052908152604090208054600182015460028301546003840154600490940154929391929091906001600160a01b03168556fea264697066735822122028756e3e3b54f7bf6a060e068d784115b6b51bf3dd289b682f2999793ab56d9a64736f6c63430006060033";

type ICheckpointManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ICheckpointManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ICheckpointManager__factory extends ContractFactory {
  constructor(...args: ICheckpointManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ICheckpointManager> {
    return super.deploy(overrides || {}) as Promise<ICheckpointManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ICheckpointManager {
    return super.attach(address) as ICheckpointManager;
  }
  override connect(signer: Signer): ICheckpointManager__factory {
    return super.connect(signer) as ICheckpointManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ICheckpointManagerInterface {
    return new utils.Interface(_abi) as ICheckpointManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICheckpointManager {
    return new Contract(address, _abi, signerOrProvider) as ICheckpointManager;
  }
}
