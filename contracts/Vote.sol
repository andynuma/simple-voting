pragma experimental ABIEncoderV2;
pragma solidity >0.4.99 <0.6.0;

import "./Owned.sol";

contract Vote is Owned{

    // confirmed voters
    address[] public voters;

    // voterAddr => vote text
    mapping (address => string)  public voterToVote;

    // voterAddr => vote count
    mapping (address => uint)  public voterAddressToCount;

    //voting result
    string[] public result;

    // create vote event
    event Create(address from);

    // send vote event
    event Send(address from);

    constructor() public {
        ownerAddr = msg.sender;
    }

    // one address has one ballot.
    modifier onceVote(address _user) {
        //TODO:テスト用にrequireを外しているので戻す事
        // require(voterAddressToCount[_user] == 0);
        _;
    }

    function createVote(string memory _vote) public onceVote(msg.sender){
        //TODO:テスト用にrequireを外しているので戻す事
        // require(voterAddressToCount[msg.sender] == 0);
        voterAddressToCount[msg.sender]++;
        voterToVote[msg.sender] = _vote;

        emit Create(msg.sender);
    }

    function sendVote() public{
        //TODO:テスト用にrequireを外しているので戻す事
        // require(voterAddressToCount[msg.sender] == 1);
        string memory myVote = voterToVote[msg.sender];
        result.push(myVote);

        emit Send(msg.sender);
    }

    function viewResult() view public returns(string[] memory){
        return result;
    }

}