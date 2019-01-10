import { eth, getInstance } from './provider'
import Vote from "../web3/artifacts/Vote.json"
import Web3 from "web3"

export class GetOwnerInfo extends React.Component{
    constructor(props){
        super(props)
        this.state =  {address : ""}
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        return(
            <div>
                <button onClick={this.handleOnClick}>Get Owner Address</button>
                <h5>Owner Address is : {this.state.address}</h5>
            </div>
        )
    }

    handleOnClick = async() => {
        const storage = await getInstance(Vote)
        // console.log(storage)
        const ownerProfile = await storage.ownerAddr.call()
        // console.log(ownerProfile)
        console.log(this.state.address)
        this.setState({address : ownerProfile})
        console.log(this.state.address)

    }
}