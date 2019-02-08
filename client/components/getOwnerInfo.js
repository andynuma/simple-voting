import { getInstance } from './provider'
import Vote from "../artifacts/Vote.json"

export class GetOwnerInfo extends React.Component{
    constructor(props){
        super(props)
        this.state =  {ownerAddress : ""}
    }

    async componentDidMount(){
        const storage = await getInstance(Vote)
        const ownerProfile = await storage.ownerAddr.call()
        this.setState({ownerAddress : ownerProfile})
    }

    render() {
        return(
            <div>
                <p>Contract Owner address:    {this.state.ownerAddress}</p>
            </div>
        )
    }
}