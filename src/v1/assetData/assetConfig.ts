// IMPORTS

// global
import { Network } from "./../globals"

// INTERFACE

export default class AssetConfig {
  public name: string
  public assetId: number
  public decimals: number

  /**
   * Constructor for the asset config class.
   * 
   * @param name - asset name
   * @param assetId - asset id
   * @param decimals - asset decimals
   */
  constructor(name: string, assetId: number, decimals: number) {
    this.name = name
    this.assetId = assetId
    this.decimals = decimals
  }
}

export const AssetConfigs = {
  [Network.MAINNET]: {
    1: new AssetConfig("ALGO", 1, 6)
  },
  [Network.MAINNET_CLONE]: {
    1: new AssetConfig("ALGO", 1, 6),
    785578010: new AssetConfig("m0", 785578010, 0),
    785579415: new AssetConfig("m1", 785579415, 0),
    785579619: new AssetConfig("m2", 785579619, 0),
    785580502: new AssetConfig("m3", 785580502, 0),
    753117075: new AssetConfig("AF-BANK-ALGO-STANDARD", 753117075, 6),
    753101315: new AssetConfig("USDC", 753101315, 6),
    753119272: new AssetConfig("AF-BANK-USDC-STANDARD", 753119272, 6),
    753101485: new AssetConfig("USDT", 753101485, 6),
    753119789: new AssetConfig("AF-BANK-USDT-STANDARD", 753119789, 6),
    753102180: new AssetConfig("goBTC", 753102180, 8),
    753120742: new AssetConfig("AF-BANK-GOBTC-STANDARD", 753120742, 6),
    753102376: new AssetConfig("goETH", 753102376, 8),
    753121086: new AssetConfig("AF-BANK-GOETH-STANDARD", 753121086, 6),
    753103963: new AssetConfig("WETH", 753103963, 6),
    753121726: new AssetConfig("AF-BANK-WETH-STANDARD", 753121726, 6),
    753103642: new AssetConfig("WBTC", 753103642, 6),
    753121416: new AssetConfig("AF-BANK-WBTC-STANDARD", 753121416, 6),
    753104158: new AssetConfig("WSOL", 753104158, 6),
    753122003: new AssetConfig("AF-BANK-WSOL-STANDARD", 753122003, 6),
    753122631: new AssetConfig("AF-BANK-ALGO-VAULT", 753122631, 6),
    753101784: new AssetConfig("STBL", 753101784, 6),
    753120193: new AssetConfig("AF-BANK-STBL-STBL", 753120193, 6),
    753104718: new AssetConfig("BANK", 753104718, 6),
    753122293: new AssetConfig("AF-BANK-BANK-STANDARD", 753122293, 6)
  },
  [Network.MAINNET_CLONE2]: {
    1: new AssetConfig("ALGO", 1, 6),
    802887010: new AssetConfig("AF-BANK-ALGO-STANDARD", 802887010, 6),
    802871797: new AssetConfig("USDC", 802871797, 6),
    802887476: new AssetConfig("AF-BANK-USDC-STANDARD", 802887476, 6),
    802873705: new AssetConfig("goBTC", 802873705, 8),
    802888469: new AssetConfig("AF-BANK-GOBTC-STANDARD", 802888469, 6),
    802874445: new AssetConfig("goETH", 802874445, 8),
    802888853: new AssetConfig("AF-BANK-GOETH-STANDARD", 802888853, 6),
    802872834: new AssetConfig("STBL2", 802872834, 6),
    802887973: new AssetConfig("AF-BANK-STBL-STBL2", 802887973, 6),
  },
  [Network.MAINNET_CLONE3]: {
    1: new AssetConfig("ALGO", 1, 6),
    812910520: new AssetConfig("AF-BANK-ALGO-STANDARD", 812910520, 6),
    812915205: new AssetConfig("USDC", 812915205, 6),
    812916935: new AssetConfig("AF-BANK-USDC-STANDARD", 812916935, 6),
    812930638: new AssetConfig("USDT", 812930638, 6),
    812931295: new AssetConfig("AF-BANK-USDT-STANDARD", 812931295, 6),
    812919854: new AssetConfig("goBTC", 812919854, 8),
    812920370: new AssetConfig("AF-BANK-GOBTC-STANDARD", 812920370, 6),
    812922836: new AssetConfig("goETH", 812922836, 8),
    812924856: new AssetConfig("AF-BANK-GOETH-STANDARD", 812924856, 6),
    812932283: new AssetConfig("STBL2", 812932283, 6),
    812936076: new AssetConfig("AF-BANK-STBL-STBL2", 812936076, 6),
    812928844: new AssetConfig("AF-BANK-BANK-STANDARD", 812928844, 6),
  },
  [Network.TESTNET]: {
    1: new AssetConfig("ALGO", 1, 6),
    91638233: new AssetConfig("AF-BANK-ALGO-STANDARD", 91638233, 6),
    91634316: new AssetConfig("USDC", 91634316, 6),
    91638306: new AssetConfig("AF-BANK-USDC-STANDARD", 91638306, 6),
    91634828: new AssetConfig("USDT", 91634828, 6),
    91638392: new AssetConfig("AF-BANK-USDT-STANDARD", 91638392, 6),
    91634454: new AssetConfig("goBTC", 91634454, 8),
    91638538: new AssetConfig("AF-BANK-GOBTC-STANDARD", 91638538, 6),
    91634487: new AssetConfig("goETH", 91634487, 8),
    91638603: new AssetConfig("AF-BANK-GOETH-STANDARD", 91638603, 6),
    91634534: new AssetConfig("WETH", 91634534, 6),
    91638687: new AssetConfig("AF-BANK-WETH-STANDARD", 91638687, 6),
    91634562: new AssetConfig("WBTC", 91634562, 6),
    91638794: new AssetConfig("AF-BANK-WBTC-STANDARD", 91638794, 6),
    91634691: new AssetConfig("WSOL", 91634691, 6),
    91638864: new AssetConfig("AF-BANK-WSOL-STANDARD", 91638864, 6),
    91639146: new AssetConfig("AF-BANK-ALGO-VAULT", 91639146, 6),
    91634578: new AssetConfig("STBL", 91634578, 6),
    91638952: new AssetConfig("AF-BANK-STBL-STBL", 91638952, 6),
    91634736: new AssetConfig("BANK", 91634736, 6),
    91639074: new AssetConfig("AF-BANK-BANK-STANDARD", 91639074, 6)
  }
}