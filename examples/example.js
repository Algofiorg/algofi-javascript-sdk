const algosdk = require("algosdk")
const algofi = require("../.")

//const m = "frame auto erosion drop weasel lecture health marine aisle stuff home harsh enough result market boost unknown carbon approve hello deputy what member abstract penalty"
//const a = "F44Y7B4O4DPUOXPZTHHJ36N7INEG7G4DC6XZ6CSDRORAQQW7YOE4KBZYPU"
//const a = "WO7ZA3GTZZTWEIU427ZZZ674RPYUUN5LOQJF5TBY2YYFBTTNOR33X45RYI"
const m = "chicken myth waste moral chuckle boil gossip cash gaze wreck devote give inhale because mango asthma relief grain power castle february level hazard about wish"
const a = "2NJEG3XKJZQ4PDSFXGIHOSTTY7Q7MBFZ76JQPMWNWV7O3LIB3T3JJYWLPE"
const decoded_a = algosdk.decodeAddress(a)
const sk = algosdk.mnemonicToSecretKey(m).sk

async function test() {
  let client = new algosdk.Algodv2(
    "",
    //"https://delicate-icy-brook.algorand-testnet.quiknode.pro/29f8674f6a148877a83c15e4150186fab984e175/algod/", // TESTNET
    "https://crimson-icy-meadow.algorand-mainnet.quiknode.pro/366f073317e2f6d87f525b328393e587ffb3628d/algod", // MAINNET
    ""
  )
  console.log("TESTING")
  let a_client = new algofi.AlgofiClient(client, algofi.Network.MAINNET_CLONE2)
  await a_client.loadState()
//
//  let user = await a_client.getUser(a)
//  let market = a_client.lending.markets[802881530]
//  let stxns = []
  
  //console.log(user.lending.userMarketStates[753108247])
  //console.log(user)
  
  //console.log(user.lending.userMarketStates[91637209])
  //console.log(market.borrowFactor)
  
  // OPT IN TO MANAGER
  //console.log("OPT IN")
  //let storageAccount = algosdk.generateAccount()
  //let optInTxns = await a_client.lending.manager.getOptInTxns(user, storageAccount)
  //console.log("SIGN TXNS")
  //let stxn0 = algosdk.signTransaction(optInTxns[0], sk)
  //let stxn1 = algosdk.signTransaction(optInTxns[1], storageAccount.sk)
  //let stxn2 = algosdk.signTransaction(optInTxns[2], sk)
  //stxns = [stxn0.blob, stxn1.blob, stxn2.blob]
  //console.log("SEND TXNS")
  //let srt = await client.sendRawTransaction(stxns).do()
  
  // OPT IN TO MARKET
  //console.log("MARKET OPT IN")
  //let optInTxns = await a_client.lending.manager.getMarketOptInTxns(user, market)
  //console.log("SIGN TXNS")
  //let stxn0 = algosdk.signTransaction(optInTxns[0], sk)
  //let stxn1 = algosdk.signTransaction(optInTxns[1], sk)
  //let stxn2 = algosdk.signTransaction(optInTxns[2], sk)
  //stxns = [stxn0.blob, stxn1.blob, stxn2.blob]
  //console.log("SEND TXNS")
  //let srt = await client.sendRawTransaction(stxns).do()
  
  // OPT OUT OF MARKET
  //console.log("MARKET OPT OUT")
  //let optOutTxns = await a_client.lending.manager.getMarketOptOutTxns(user, market)
  //console.log("SIGN TXNS")
  //let stxn0 = algosdk.signTransaction(optOutTxns[0], sk)
  //stxns = [stxn0.blob]
  //console.log("SEND TXNS")
  //let srt = await client.sendRawTransaction(stxns).do()
  
  // MINT B ASSET
  //console.log("MINT")
  //let mintTxns = await market.getMintTxns(user, 100000000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of mintTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // ADD B ASSET COLLATERAL
  //console.log("ADD B ASSET COLLATERAL")
  //let addBAssetCollateralTxns = await market.getAddBAssetCollateralTxns(user, 100000000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of addBAssetCollateralTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // ADD UNDERLYING COLLATERAL
  //console.log("ADD UNDERLYING COLLATERAL")
  //let addUnderlyingCollateralTxns = await market.getAddUnderlyingCollateralTxns(user, 100000000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of addUnderlyingCollateralTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // REMOVE UNDERLYING COLLATERAL
  //console.log("REMOVE UNDERLYING COLLATERAL")
  //let removeUnderlyingCollateralTxns = await market.getRemoveUnderlyingCollateralTxns(user, 21000000)
  //stxns = []
  //console.log("SIGN TXNS")
  //for (const txn of removeUnderlyingCollateralTxns) {
  //  console.log(txn)
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // REMOVE B ASSET COLLATERAL
  //console.log("REMOVE B ASSET COLLATERAL")
  //let removeBAssetCollateralTxns = await market.getRemoveBAssetCollateralTxns(user, 100000000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of removeBAssetCollateralTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // BURN B ASSET
  //console.log("BURN B ASSET")
  //let burnTxns = await market.getBurnTxns(user, 100000000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of burnTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // BORROW
  //console.log("BORROW")
  //let borrowTxns = await market.getBorrowTxns(user, 1000000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of borrowTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // REPAY BORROW
  //console.log("REPAY BORROW")
  //let repayBorrowTxns = await market.getRepayBorrowTxns(user, 110000000, true)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of repayBorrowTxns) {
  //  console.log(txn)
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // CLAIM REWARDS
  //console.log("CLAIM REWARDS")
  //let claimRewardsTxns = await a_client.lending.getClaimRewardsTxns(user)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of claimRewardsTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // SYNC VAULT
  //console.log("SYNC VAULT")
  //let syncVaultTxns = await market.getSyncVaultTxns(user)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of syncVaultTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
  
  // SEND GOVERNANCE TXN
  //console.log("SEND GOV TXN")
  //let govTxns = await a_client.lending.manager.getGovernanceTxns(user, user.address, "testing")
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of govTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()
 
  // SEND KEYREG
  //console.log("SEND KEYREG TXN")
  //let keyregTxns = await a_client.lending.manager.getKeyregTxns(user, user.address, "00000000000000000000000000000000", "00000000000000000000000000000000", "0000000000000000000000000000000000000000000000000000000000000000", 21833648, 21833648, 10000)
  //console.log("SIGN TXNS")
  //stxns = []
  //for (const txn of keyregTxns) {
  //  if (algofi.addressEquals(txn.from, decoded_a)) {
  //    stxns.push(algosdk.signTransaction(txn, sk).blob)
  //  } else {
  //    stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
  //  }
  //}
  //console.log("SEND TXNS")
  //await client.sendRawTransaction(stxns).do()

  // SEND KEYREG OFFLINE TXN
//  console.log("SEND KEYREG OFFLINE TXN")
//  let keyregOfflineTxns = await a_client.lending.manager.getKeyregOfflineTxns(user)
//  console.log("SIGN TXNS")
//  stxns = []
//  for (const txn of keyregOfflineTxns) {
//    if (algofi.addressEquals(txn.from, decoded_a)) {
//      stxns.push(algosdk.signTransaction(txn, sk).blob)
//    } else {
//      stxns.push(algosdk.signLogicSigTransaction(txn, algofi.PERMISSIONLESS_SENDER_LOGIC_SIG.lsig).blob)
//    }
//  }
//  console.log("SEND TXNS")
//  await client.sendRawTransaction(stxns).do()
}

test()
