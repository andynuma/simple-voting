import { eth } from "../web3/provider"

export default class IndexPage extends React.Component {

    async componentDidMount() {
        const addresses = await eth.getAccounts()
        // const balance = await web3.eth.getBalance
        console.log(addresses)
        // console.log(balance)
    }
    
    render() {
      return (
        <h1>hello worlaad!</h1>
      )
    }
  } 