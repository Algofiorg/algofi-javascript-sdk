// IMPORTS

import {
  Algod,
  Algodv2,
  assignGroupID,
  encodeUint64,
  getApplicationAddress,
  makeApplicationNoOpTxnFromObject,
  makeAssetTransferTxnWithSuggestedParamsFromObject,
  Transaction
} from "algosdk"
import GovernanceClient from "./governanceClient"
import GovernanceConfig from "./governanceConfig"
import { getApplicationGlobalState } from "../stateUtils"
import { VOTING_ESCROW_STRINGS } from "./governanceConfig"
import AlgofiUser from "../algofiUser"
import { getParams } from "../transactionUtils"

export default class VotingEscrow {
  public governanceClient: GovernanceClient
  public algod: Algodv2
  public appId: number
  public totalLocked: number
  public totalVebank: number
  public assetId: number
  public votingEscrowMaxTimeLockSeconds: number
  public votingEscrowMinTimeLockSeconds: number

  constructor(governanceClient: GovernanceClient) {
    this.governanceClient = governanceClient
    this.algod = this.governanceClient.algod
    this.appId = governanceClient.governanceConfig.votingEscrowAppId
    this.votingEscrowMaxTimeLockSeconds = governanceClient.governanceConfig.votingEscrowMaxTimeLockSeconds
    this.votingEscrowMinTimeLockSeconds = governanceClient.governanceConfig.votingEscrowMinTimeLockSeconds
  }

  async loadState() {
    const globalState = await getApplicationGlobalState(this.algod, this.appId)

    this.totalLocked = globalState[VOTING_ESCROW_STRINGS.total_locked]
    this.totalVebank = globalState[VOTING_ESCROW_STRINGS.total_vebank]
    this.assetId = globalState[VOTING_ESCROW_STRINGS.asset_id]
  }

  async getUpdateVeBankDataTxns(userCalling: AlgofiUser, userUpdating: AlgofiUser): Promise<Transaction[]> {
    const params = await getParams(this.algod)
    const enc = new TextEncoder()

    const updateUserVebankDataTxn = makeApplicationNoOpTxnFromObject({
      from: userCalling.address,
      appIndex: this.appId,
      appArgs: [enc.encode(VOTING_ESCROW_STRINGS.update_vebank_data)],
      suggestedParams: params,
      accounts: [userUpdating.address],
      foreignAssets: undefined,
      foreignApps: undefined,
      rekeyTo: undefined
    })

    return [updateUserVebankDataTxn]
  }

  async getLockTxns(user: AlgofiUser, amount: number): Promise<Transaction[]> {
    const params = await getParams(this.algod)
    const enc = new TextEncoder()
    const txns = []

    const govTokenTxn = await makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: user.address,
      to: getApplicationAddress(this.appId),
      assetIndex: this.governanceClient.governanceConfig.governanceToken,
      amount: amount,
      suggestedParams: params,
      rekeyTo: undefined,
      revocationTarget: undefined
    })

    const lockTxn = await makeApplicationNoOpTxnFromObject({
      from: user.address,
      appIndex: this.appId,
      appArgs: [enc.encode(VOTING_ESCROW_STRINGS.lock), encodeUint64(amount)],
      suggestedParams: params,
      accounts: undefined,
      foreignAssets: undefined,
      foreignApps: undefined,
      rekeyTo: undefined
    })

    txns.push(govTokenTxn, lockTxn)
    return assignGroupID(txns)
  }

  async getExtendLockTxns(user: AlgofiUser, durationSeconds: number): Promise<Transaction[]> {
    const params = await getParams(this.algod)
    const enc = new TextEncoder()

    const extendLockTxn = await makeApplicationNoOpTxnFromObject({
      from: user.address,
      appIndex: this.appId,
      appArgs: [enc.encode(VOTING_ESCROW_STRINGS.extend_lock), encodeUint64(durationSeconds)],
      suggestedParams: params,
      accounts: undefined,
      foreignAssets: undefined,
      foreignApps: undefined,
      rekeyTo: undefined
    })

    return [extendLockTxn]
  }

  async getIncreaseLockAmountTxns(user: AlgofiUser, amount: number): Promise<Transaction[]> {
    const params = await getParams(this.algod)
    const enc = new TextEncoder()
    const txns = []

    const govTokenTxn = await makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: user.address,
      to: getApplicationAddress(this.appId),
      assetIndex: this.governanceClient.governanceConfig.governanceToken,
      amount: amount,
      suggestedParams: params,
      rekeyTo: undefined,
      revocationTarget: undefined
    })

    const increaseLockAmountTxns = await makeApplicationNoOpTxnFromObject({
      from: user.address,
      appIndex: this.appId,
      appArgs: [enc.encode(VOTING_ESCROW_STRINGS.increase_lock_amount)],
      suggestedParams: params,
      accounts: undefined,
      foreignAssets: undefined,
      foreignApps: undefined,
      rekeyTo: undefined
    })

    txns.push(govTokenTxn, increaseLockAmountTxns)
    return assignGroupID(txns)
  }

  async getClaimTxns(user: AlgofiUser): Promise<Transaction[]> {
    const params = await getParams(this.algod)
    const enc = new TextEncoder()

    const claimTxn = makeApplicationNoOpTxnFromObject({
      from: user.address,
      appIndex: this.appId,
      appArgs: [enc.encode(VOTING_ESCROW_STRINGS.claim)],
      suggestedParams: params,
      foreignAssets: [this.governanceClient.governanceConfig.governanceToken],
      accounts: undefined,
      foreignApps: undefined,
      rekeyTo: undefined
    })

    return [claimTxn]
  }
}