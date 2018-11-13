pragma experimental ABIEncoderV2;
pragma solidity ^0.4.19;

import "./Owned.sol";

contract Vote is Owned{

    address[] voters;

    // voterAddr => vote text
    mapping (address => bytes) voterToVote;

    // voterAddr => vote count
    mapping (address => uint) voterAddressToCount;

    //result
    bytes[] result;

    constructor() {
        ownerAddr = msg.sender;
    }

    function setVoterAddr(address _voterAddr) public onlyOwner{
        voters.push(msg.sender);
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
        voterToVote[msg.sender] = _vote;
    }

    function sendVote() public{
        require(checkVoterAddr(msg.sender) == true);
        result.push(voterToVote[msg.sender]);
    }

    function viewResult() view public returns(bytes[]){
        return result;
    }
}