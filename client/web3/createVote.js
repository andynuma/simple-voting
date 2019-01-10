import { eth, getInstance } from './provider'
import Vote from "../web3/artifacts/Vote.json"
import Web3 from "web3"


export class SetUserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setName = this.setName.bind(this);
        this.sendVote = this.sendVote.bind(this);
    }

    setName = async (name) => {
        const storage = await getInstance(Vote)
        const addresses = await eth.getAccounts()
        await storage.createVote(name,{from:addresses[0]})
    }

   sendVote = async() => {
        const storage = await getInstance(Vote)
        const addresses = await eth.getAccounts()
        await storage.sendVote({from:addresses[0]})
    }

    async handleChange(event){
        this.setState({value:event.target.value});
    }

    async handleSubmit(event){
        console.log("User was Created:" + this.state.value);
        event.preventDefault();
        await this.setName(this.state.value)
        await this.sendVote()
        // this.props.addUser(this.state.value)
        this.setState({value : ""})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Please input your select:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit Ballot"/>
                </form>
                {/* {this.state.value} */}
            </div>
        )
    }
}
