import { eth, getInstance } from "../web3/provider"
import Vote from "../web3/artifacts/Vote.json"
import {getOwnerInfo,SetVoterAddr, CreateVote} from "../web3/voters"

export default class IndexPage extends React.Component {

    // Get Contract's Owner Address
    logUser = async () => {
        const ownerInfo = await getOwnerInfo()
        console.log(ownerInfo)
    }

    // 引数のアドレスをフォームで与えたい
    // これはvoters.jsに処理書いた方がいいな
    // setVoterAddr =  async(voterAddr) => {
    //     const tx =  await setVoterAddr(voterAddr)
    //     console.log(tx)
    // }

    async componentDidMount() {
        // const addresses = await eth.getAccounts()
        // const balance = await eth.getBalance(addresses[0])
        // console.log(addresses)
        // console.log(balance)
        // console.log(Vote)
        const storage = await getInstance(Vote)
        console.log(storage)
        const ownerAddr = await storage.ownerAddr.call()
        console.log("Owner Address : ",ownerAddr)
    }

    render() {
      return (
        <div>
            <button onClick={this.logUser}>
                Get Owner address
            </button>

            {/* <SetVoterAddr/> */}
            <CreateVote />
        </div>
      )
    }
  }