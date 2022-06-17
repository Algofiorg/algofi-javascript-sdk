// IMPORTS

// external
import algosdk, { Algodv2 } from "algosdk"

// local
import { Network } from "./globals"
import AssetConfig, { AssetConfigs } from "./assetConfig"
import AlgofiUser from "./algofiUser"

// lending
import LendingClient from "./lending/lendingClient"

// INTERFACSE

export default class AlgofiClient {
  public algod: Algodv2
  public network: Network;
  
  public assets: { [key: number]: AssetConfig } = {}
  
  // lending
  public lending: LendingClient
  
  constructor(
    algod : Algodv2,
    network : Network,
  ) {
    this.algod = algod
    this.network = network
    this.assets = AssetConfigs[this.network]
    
    // lending
    this.lending = new LendingClient(this)
  }
  
  async loadState() {
    // lending
    await this.lending.loadState()
  }
  
  async getUser(address: string) : Promise<AlgofiUser> {
    let user = new AlgofiUser(this, address)
    await user.loadState()
    return user 
  }
}
