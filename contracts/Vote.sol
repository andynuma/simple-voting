pragma experimental ABIEncoderV2;
pragma solidity ^0.4.19;

import "./Owned.sol";

contract Vote is Owned{

    // confirmed voters
    address[] public voters;

    // voterAddr => vote text
    mapping (address => bytes)  public voterToVote;

    // voterAddr => vote count
    mapping (address => uint)  public voterAddressToCount;

    //voting result
    bytes[] public result;

    // create vote event
    event Create(address from);

    // send vote event
    event Send(address from);

    constructor() {
        ownerAddr = msg.sender;
    }

    function setVoterAddr(address _voterAddr) public onlyOwner{
        voters.push(_voterAddr);
    }

    function checkVoterAddr(address _voterAddr) public returns(bool){
        for(uint i = 0; i < voters.length; i++){
            if(voters[i] == _voterAddr){
                return true;
            }
        }
        return false;
    }

    function createVote(bytes _vote) public {
        require(checkVoterAddr(msg.sender) == true);
        require(voterAddressToCount[msg.sender] == 0);
        voterToVote[msg.sender] = _vote;

        emit Create(msg.sender);
    }

    function sendVote() public{
        require(checkVoterAddr(msg.sender) == true);
        bytes memory myVote = voterToVote[msg.sender];
        result.push(myVote);

        emit Send(msg.sender);
    }

    function viewResult() view public returns(bytes[]){
        return result;
    }
}