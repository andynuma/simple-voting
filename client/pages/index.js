import { eth, getInstance } from "../web3/provider"
import Vote from "../web3/artifacts/Vote.json"
import {getOwnerInfo,SetVoterAddr, CreateVote,sendVote,viewResult, ViewResult} from "../web3/voters"
import { create } from "domain";

export default class IndexPage extends React.Component {

    // Get Contract's Owner Address
    logUser = async () => {
        const ownerInfo = await getOwnerInfo()
        console.log(ownerInfo)
    }

    SendVote = async() => {
        await sendVote()
        console.log(sendVote)
    }

    viewResult = async() => {
        const result =  await viewResult()
        console.log(result)
        // console.log()
    }

    async componentDidMount() {
        const storage = await getInstance(Vote)
        console.log(storage)
        const ownerAddr = await storage.ownerAddr.call()
        console.log("Owner Address : ",ownerAddr)
        const addresses = await eth.getAccounts()
        console.log("Your address : ",addresses[0])
        const balance = await eth.getBalance(addresses[0])
        const etherValue = await web3.fromWei(balance, 'ether');
        console.log("Your account balance :",etherValue,"ETH")
    }

    render() {
      return (
        <div>
            <button onClick={this.logUser}>
                Get Owner address
            </button>

            <CreateVote />

             <button onClick={this.SendVote}>
                SendVote
            </button>

            <button onClick={this.viewResult}>
                View Result
            </button>

        </div>
      )
    }
  }