// IMPORTS
import { Network } from "./../globals"

// INTERFACE

export default class StakingConfig {
  public appId: number
  public assetId: number

  constructor(appId: number, assetId: number) {
    this.appId = appId
    this.assetId = assetId
  }
}

export const StakingConfigs = {
  [Network.MAINNET_CLONE]: [new StakingConfig(785597550, 785578010), new StakingConfig(785599248, 785579619)],
  //[Network.MAINNET_CLONE2]: [new StakingConfig(785597550, 785578010), new StakingConfig(785599248, 785579619)],
  [Network.MAINNET_CLONE2]: [new StakingConfig(805980186, 802871797), new StakingConfig(805982398, 802872834)],
  [Network.TESTNET]: [new StakingConfig(96414588, 96410661), new StakingConfig(96418091, 96410672)]
}

export const rewardsManagerAppId = {
  [Network.MAINNET_CLONE]: 785584132,
  [Network.MAINNET_CLONE2]: 785584132,
  [Network.TESTNET]: 94796687
}

export const STAKING_STRINGS = {
  admin: "a",
  rewards_program_count: "rpc",
  rps_pusher: "rpsp",
  contract_update_delay: "cud",
  contract_update_time: "cut",
  boost_multiplier_app_id: "bmai",
  rewards_manager_app_id: "rmai",
  external_boost_multiplier: "ebm",
  asset_id: "ai",
  user_total_staked: "uts",
  user_scaled_total_staked: "usts",
  boost_multiplier: "bm",
  user_rewards_program_counter_prefix: "urpc_",
  user_rewards_coefficient_prefix: "urc_",
  user_unclaimed_rewards_prefix: "uur_",
  total_staked: "ts",
  scaled_total_staked: "sts",
  latest_time: "lt",
  rewards_escrow_account: "rea",
  rewards_program_counter_prefix: "rpc_",
  rewards_asset_id_prefix: "rai_",
  rewards_per_second_prefix: "rps_",
  rewards_coefficient_prefix: "rc_",
  rewards_issued_prefix: "ri_",
  rewards_payed_prefix: "rp_",
  schedule_contract_update: "scu",
  increase_contract_update_delay: "icud",
  set_rewards_manager_app_id: "srma",
  set_boost_app_id: "sbai",
  set_rewards_program: "srp",
  update_rewards_program: "urp",
  opt_into_asset: "oia",
  opt_into_rewards_manager: "oirm",
  update_rewards_per_second: "urps",
  farm_ops: "fo",
  stake: "s",
  unstake: "u",
  claim_rewards: "cr",
  update_target_user: "utu",
  update_vebank_data: "update_vebank_data"
}
