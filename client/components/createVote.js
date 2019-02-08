import { eth, getInstance } from './provider'
import Vote from "../artifacts/Vote.json"

export class SetUserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setName = this.setName.bind(this);
        // this.sendVote = this.sendVote.bind(this);
    }

    setName = async (name) => {
        const storage = await getInstance(Vote)
        const addresses = await eth.getAccounts()
        await storage.createVote(name,{from:addresses[0]})
    }

    async handleChange(event){
        this.setState({value:event.target.value});
    }

    async handleSubmit(event){
        console.log("User was Created:" + this.state.value);
        event.preventDefault();
        await this.setName(this.state.value)
        this.setState({value : ""})
    }

    render(){
        return(
            <div>
                <form className="voterForm" onSubmit={this.handleSubmit}>
                    <label>
                        Please input your select:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input className="btn" type="submit" value="Submit"/>
                </form>
                {/* {this.state.value} */}
                {/* <p>{this.state.value}</p> */}
                <style jsx>{`
                    .btn {
                        margin:5px;
                        color: white;
                        display: inline-block;
                        opacity: 0.8;
                        border-radius: 4px;
                        text-align: center;
                        background-color: #239b76;

                    }
                    .btn:hover {
                        opacity: 1;
                    }
                    .voterForm {
                    }
                    `}</style>
            </div>
        )
    }
}
