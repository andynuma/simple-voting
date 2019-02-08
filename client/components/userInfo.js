import { eth } from './provider'

export class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {userAddress: ""}
        this.state = {userBalance: ""}
    }

    async componentDidMount(){
        const addresses = await eth.getAccounts()
        this.setState({userAddress:addresses})
        const balance = await eth.getBalance(addresses[0])
        const etherValue = await web3.fromWei(balance, 'ether');
        this.setState({userBalance:etherValue})
    }

    render () {
        return (
            <div>
                <p>Your Address :    {this.state.userAddress}</p>
                <p>Your Balance:   {this.state.userBalance} ETH</p>
            </div>
        )
    }
}

// export default UserInfo;