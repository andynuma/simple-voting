import { eth, getInstance } from './provider'
import Vote from "../web3/artifacts/Vote.json"
import Web3 from "web3"

const {
  utils: {
    hexToString,
  },
} = Web3

export const getOwnerInfo = async()  => {
  const storage = await getInstance(Vote)
  const ownerProfile = await storage.ownerAddr.call()

  return ownerProfile
}

export const setVoterAddr = async(address) => {
  //TODO:どうやってownerAddrを与える？
  const result =  await storage.setVoterAddr(
    address,
  {
    // ownerAddrを与えるべき or そのままエラーを出せば良いのか
    from:address[0]
  })

  return result
}