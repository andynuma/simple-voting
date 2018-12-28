pragma experimental ABIEncoderV2;
pragma solidity >0.4.99 <0.6.0;

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

    constructor() public {
        ownerAddr = msg.sender;
    }

    function test(uint _testAddr) public returns(uint){
        return _testAddr;
    }

    function createVote(bytes memory _vote) public {
        require(voterAddressToCount[msg.sender] == 0);
        voterAddressToCount[msg.sender]++;
        voterToVote[msg.sender] = _vote;

        emit Create(msg.sender);
    }

    function sendVote() public{
        require(voterAddressToCount[msg.sender] == 1);
        bytes memory myVote = voterToVote[msg.sender];
        result.push(myVote);

        emit Send(msg.sender);
    }

    function viewResult() view public returns(bytes[] memory){
        return result;
    }
}