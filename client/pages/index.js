import { eth, getInstance } from "../web3/provider"
import Vote from "../web3/artifacts/Vote.json"
import {getOwnerInfo,setVoterAddr} from "../web3/voters"

export default class IndexPage extends React.Component {

    logUser = async () => {
        const ownerInfo = await getOwnerInfo()
        console.log(ownerInfo)
    }

    // 引数のアドレスをフォームで与える
    setVoterAddr =  async(voterAddr) => {
        const tx =  await setVoterAddr(voterAddr)
        console.log(tx)
    }    

    async componentDidMount() {
        // const addresses = await eth.getAccounts()
        // const balance = await eth.getBalance(addresses[0])
        // console.log(addresses)
        // console.log(balance)
        // console.log(Vote)

        const storage = await getInstance(Vote)
        console.log(storage)
        const ownerAddr = await storage.ownerAddr.call()
        console.log(ownerAddr)
    }
    
    render() {
      return (
        <div>
            <button onClick={this.logUser}>
                Get owner addresses
            </button>
        </div>
      )
    }
  } 