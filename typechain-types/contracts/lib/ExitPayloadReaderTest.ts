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

export declare namespace RLPReader {
  export type RLPItemStruct = {
    len: PromiseOrValue<BigNumberish>;
    memPtr: PromiseOrValue<BigNumberish>;
  };

  export type RLPItemStructOutput = [BigNumber, BigNumber] & {
    len: BigNumber;
    memPtr: BigNumber;
  };
}

export declare namespace ExitPayloadReader {
  export type ReceiptStruct = {
    data: RLPReader.RLPItemStruct[];
    raw: PromiseOrValue<BytesLike>;
    logIndex: PromiseOrValue<BigNumberish>;
  };

  export type ReceiptStructOutput = [
    RLPReader.RLPItemStructOutput[],
    string,
    BigNumber
  ] & {
    data: RLPReader.RLPItemStructOutput[];
    raw: string;
    logIndex: BigNumber;
  };
}

export interface ExitPayloadReaderTestInterface extends utils.Interface {
  functions: {
    "tryParseReceipt(bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "tryParseReceipt"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tryParseReceipt",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "tryParseReceipt",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ExitPayloadReaderTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExitPayloadReaderTestInterface;

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
    tryParseReceipt(
      receiptOrBytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[ExitPayloadReader.ReceiptStructOutput]>;
  };

  tryParseReceipt(
    receiptOrBytes: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<ExitPayloadReader.ReceiptStructOutput>;

  callStatic: {
    tryParseReceipt(
      receiptOrBytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<ExitPayloadReader.ReceiptStructOutput>;
  };

  filters: {};

  estimateGas: {
    tryParseReceipt(
      receiptOrBytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tryParseReceipt(
      receiptOrBytes: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
