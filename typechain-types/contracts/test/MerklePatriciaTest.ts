/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MerklePatriciaTestInterface extends utils.Interface {
  functions: {
    "verify(uint256,bytes,bytes,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "verify"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verify",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export interface MerklePatriciaTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerklePatriciaTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verify(
      receiptRoot: PromiseOrValue<BigNumberish>,
      receipt: PromiseOrValue<BytesLike>,
      receiptProof: PromiseOrValue<BytesLike>,
      branchMask: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verify(
    receiptRoot: PromiseOrValue<BigNumberish>,
    receipt: PromiseOrValue<BytesLike>,
    receiptProof: PromiseOrValue<BytesLike>,
    branchMask: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verify(
      receiptRoot: PromiseOrValue<BigNumberish>,
      receipt: PromiseOrValue<BytesLike>,
      receiptProof: PromiseOrValue<BytesLike>,
      branchMask: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verify(
      receiptRoot: PromiseOrValue<BigNumberish>,
      receipt: PromiseOrValue<BytesLike>,
      receiptProof: PromiseOrValue<BytesLike>,
      branchMask: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verify(
      receiptRoot: PromiseOrValue<BigNumberish>,
      receipt: PromiseOrValue<BytesLike>,
      receiptProof: PromiseOrValue<BytesLike>,
      branchMask: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
