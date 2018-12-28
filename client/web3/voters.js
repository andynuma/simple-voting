import { eth, getInstance } from './provider'
import Vote from "../web3/artifacts/Vote.json"
import Web3 from "web3"

const {
  utils: {
    hexToString,
  },
} = Web3

export const getOwnerInfo = async()  => {
  const storage = await getInstance(Vote)
  const ownerProfile = await storage.ownerAddr.call()

  return ownerProfile
}

export const createVote = async(vote)  => {
  const storage = await getInstance(Vote)
  const addresses = await eth.getAccounts()
  // console.log(eth.getAccounts())
  await storage.createVote(vote,{from:addresses[0]})
  // console.log(vote)
}

export const sendVote = async() => {
  const storage = await getInstance(Vote)
  const addresses = await eth.getAccounts()
  await storage.sendVote({from:addresses[0]})
}

export const viewResult = async() => {
  const storage = await getInstance(Vote)
  const addresses = await eth.getAccounts()
  const results =  await storage.viewResult({from:addresses[0]})
  const voting_result = results.map(result => {
    <li>
      {result}
    </li>
  })
  // return result
}

export class CreateVote extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event){
    this.setState({value:event.target.value});
  }

  async handleSubmit(event){
    console.log("Vote was Created:" + this.state.value);
    event.preventDefault();
    await createVote(this.state.value)
  }

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Input your vote:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
    )
  }
}

// export class ViewResult extends React.Component{
//   constructor(props){
//     super(props);
//     this.state.ContractInstance = getInstance(Vote)
//   }

//   viewResult = async() => {
//     const storage = await getInstance(Vote)
//     const addresses = await eth.getAccounts()
//     const result =  await storage.viewResult({from:addresses[0]})
//     return result
//   }


//   render(){
//     return(
//       <button onClick={this.viewResult}>
//         View Result
//       </button>
//     )
//   }
// }