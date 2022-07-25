// IMPORTS
import { Network } from "../../globals"

// INTERFACE

export default class StakingConfig {
  public name: string
  public managerAppId: number
  public marketAppId: number
  public assetId: number
  public oracleAppId: number

  /**
   * Constructor for the v1 staking config.
   * 
   * @param name - name
   * @param managerAppId - manager app id
   * @param marketAppId - market app id
   * @param assetId - asset id
   * @param oracleAppId - oracle app id
   */
  constructor(
    name: string,
    managerAppId: number,
    marketAppId: number,
    assetId: number,
    oracleAppId: number
  ) {
    this.name = name
    this.managerAppId = managerAppId
    this.marketAppId = marketAppId
    this.assetId = assetId
    this.oracleAppId = oracleAppId
  }
}

export const StakingConfigs = {
  [Network.MAINNET]: [
    new StakingConfig("STBL Staking", 482625868, 482608867, 465865291, 451327550)
  ],
  [Network.MAINNET_CLONE]: [
    new StakingConfig("STBL Staking", 482625868, 482608867, 465865291, 451327550)
  ],
  [Network.MAINNET_CLONE2]: [
    new StakingConfig("STBL Staking", 482625868, 482608867, 465865291, 451327550)
  ],
  [Network.MAINNET_CLONE3]: [
    new StakingConfig("STBL Staking", 482625868, 482608867, 465865291, 451327550)
  ],
  [Network.TESTNET]: []
}

export const STAKING_STRINGS = {
  rewards_program_number: "nrp",
  
  user_storage_address: "usa",
  total_staked: "acc",
  user_total_staked: "uac",
  rewards_amount: "ra",
  rewards_asset_id: "rai",
  rewards_per_second: "rp",
  rewards_secondary_asset_id: "rsai",
  rewards_secondary_ratio: "rsr",
  user_pending_rewards: "upr",
  user_secondary_pending_rewards: "us",
  user_rewards_program_number: "urpn",
  
  rewards_coefficient: "\x00\x00\x00\x00\x00\x00\x00\x01_ci",
  user_rewards_coefficient: "\x00\x00\x00\x00\x00\x00\x00\x01_uc",

  fetch_market_variables: "fmv",
  dummy: "d",

  oracle_app_id: "o",

  update_prices: "up",
  
  update_protocol_data: "upd",
  update_rewards_program: "urp",


  stake: "mt",
  unstake: "rcu",
  claim_rewards: "cr"

}
