/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERCProxy,
  IERCProxyInterface,
} from "../../../../contracts/common/Proxy/IERCProxy";

const _abi = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "codeAddr",
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
] as const;

export class IERCProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IERCProxyInterface {
    return new utils.Interface(_abi) as IERCProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERCProxy {
    return new Contract(address, _abi, signerOrProvider) as IERCProxy;
  }
}
