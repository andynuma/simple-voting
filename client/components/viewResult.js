import { eth, getInstance } from './provider'
import Vote from "../artifacts/Vote.json"

export class ViewResult extends React.Component{
    constructor(props){
        super(props)
        this.state =  {result : []}
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render() {
        const list = this.state.result.map(user => {
            return(
                <li key={user}>
                {user}
                </li>
            )
        })

        return(
            <div>
                <h4>Get Result</h4>
                <button onClick={this.handleOnClick}>Result</button>
                <h5>Ballots List</h5>
                <ul>{list}</ul>
            </div>
        )
    }

    handleOnClick = async() => {
        const storage = await getInstance(Vote)
        const resultVoting = await storage.viewResult()
        // console.log("result",storage.result.call())
        console.log(resultVoting)
        // console.log(ownerProfile)
        console.log(this.state.result)
        this.setState({result:resultVoting})
        //  これだと二次元配列ができてしまう
        // this.setState({
        //     result :  [...this.state.result, resultVoting]
        // })
        console.log(this.state.result)
    }
}