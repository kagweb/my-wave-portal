/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewWave",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllWaves",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "waver",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct WavePortal.Wave[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalWaves",
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
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "wave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526200004f6040518060400160405280601981526020017f57652068617665206265656e20636f6e737472756374656421000000000000008152506200005560201b620004ad1760201c565b620001e9565b620000f5816040516024016200006c9190620001c5565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200015d57808201518184015260208101905062000140565b838111156200016d576000848401525b50505050565b6000601f19601f8301169050919050565b6000620001918262000121565b6200019d81856200012c565b9350620001af8185602086016200013d565b620001ba8162000173565b840191505092915050565b60006020820190508181036000830152620001e1818462000184565b905092915050565b610ebe80620001f96000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906108a4565b61009e565b005b61006a610311565b6040516100779190610906565b60405180910390f35b61008861035c565b6040516100959190610b0b565b60405180910390f35b60016000808282546100b09190610b5c565b925050819055506100f66040518060400160405280600d81526020017f257320686173207761766564210000000000000000000000000000000000000081525033610546565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101b59291906106a7565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea716428360405161020a929190610bfc565b60405180910390a26000655af3107a4000905047811115610260576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025790610c9e565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161028690610cef565b60006040518083038185875af1925050503d80600081146102c3576040519150601f19603f3d011682016040523d82523d6000602084013e6102c8565b606091505b505090508061030c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030390610d76565b60405180910390fd5b505050565b60006103546040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546105e2565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104a457838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461040990610dc5565b80601f016020809104026020016040519081016040528092919081815260200182805461043590610dc5565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b5050505050815260200160028201548152505081526020019060010190610380565b50505050905090565b610543816040516024016104c19190610df7565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067e565b50565b6105de828260405160240161055c929190610e28565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067e565b5050565b61067a82826040516024016105f8929190610e58565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061067e565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546106b390610dc5565b90600052602060002090601f0160209004810192826106d5576000855561071c565b82601f106106ee57805160ff191683800117855561071c565b8280016001018555821561071c579182015b8281111561071b578251825591602001919060010190610700565b5b509050610729919061072d565b5090565b5b8082111561074657600081600090555060010161072e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107b182610768565b810181811067ffffffffffffffff821117156107d0576107cf610779565b5b80604052505050565b60006107e361074a565b90506107ef82826107a8565b919050565b600067ffffffffffffffff82111561080f5761080e610779565b5b61081882610768565b9050602081019050919050565b82818337600083830152505050565b6000610847610842846107f4565b6107d9565b90508281526020810184848401111561086357610862610763565b5b61086e848285610825565b509392505050565b600082601f83011261088b5761088a61075e565b5b813561089b848260208601610834565b91505092915050565b6000602082840312156108ba576108b9610754565b5b600082013567ffffffffffffffff8111156108d8576108d7610759565b5b6108e484828501610876565b91505092915050565b6000819050919050565b610900816108ed565b82525050565b600060208201905061091b60008301846108f7565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109788261094d565b9050919050565b6109888161096d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109c85780820151818401526020810190506109ad565b838111156109d7576000848401525b50505050565b60006109e88261098e565b6109f28185610999565b9350610a028185602086016109aa565b610a0b81610768565b840191505092915050565b610a1f816108ed565b82525050565b6000606083016000830151610a3d600086018261097f565b5060208301518482036020860152610a5582826109dd565b9150506040830151610a6a6040860182610a16565b508091505092915050565b6000610a818383610a25565b905092915050565b6000602082019050919050565b6000610aa182610921565b610aab818561092c565b935083602082028501610abd8561093d565b8060005b85811015610af95784840389528151610ada8582610a75565b9450610ae583610a89565b925060208a01995050600181019050610ac1565b50829750879550505050505092915050565b60006020820190508181036000830152610b258184610a96565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b67826108ed565b9150610b72836108ed565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ba757610ba6610b2d565b5b828201905092915050565b600082825260208201905092915050565b6000610bce8261098e565b610bd88185610bb2565b9350610be88185602086016109aa565b610bf181610768565b840191505092915050565b6000604082019050610c1160008301856108f7565b8181036020830152610c238184610bc3565b90509392505050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b6000610c88603483610bb2565b9150610c9382610c2c565b604082019050919050565b60006020820190508181036000830152610cb781610c7b565b9050919050565b600081905092915050565b50565b6000610cd9600083610cbe565b9150610ce482610cc9565b600082019050919050565b6000610cfa82610ccc565b9150819050919050565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b6000610d60602783610bb2565b9150610d6b82610d04565b604082019050919050565b60006020820190508181036000830152610d8f81610d53565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ddd57607f821691505b60208210811415610df157610df0610d96565b5b50919050565b60006020820190508181036000830152610e118184610bc3565b905092915050565b610e228161096d565b82525050565b60006040820190508181036000830152610e428185610bc3565b9050610e516020830184610e19565b9392505050565b60006040820190508181036000830152610e728185610bc3565b9050610e8160208301846108f7565b939250505056fea26469706673582212205a98b7ad1b94e8e075be6e0cda8f10b1f269ffbcc3c188ea04b5e78295ab466164736f6c63430008090033";

type WavePortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WavePortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WavePortal__factory extends ContractFactory {
  constructor(...args: WavePortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WavePortal {
    return super.attach(address) as WavePortal;
  }
  override connect(signer: Signer): WavePortal__factory {
    return super.connect(signer) as WavePortal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WavePortalInterface {
    return new utils.Interface(_abi) as WavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WavePortal {
    return new Contract(address, _abi, signerOrProvider) as WavePortal;
  }
}