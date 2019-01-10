// import { injectInTruffle } from "sol-trace";
// injectInTruffle(web3, artifacts);

const Vote = artifacts.require("../contracts/Vote.sol")

contract("Vote",(accounts) => {    

    beforeEach(async () => {
        contractInstance = await Vote.deployed()
        organizer = await accounts[0]
        voter = await accounts[1]
        attacker =  await accounts[2]
    })

    it.skip("can set voter address",async() => {
        const tx = contractInstance.setVoterAddr(voter)
        assert.isOk(tx)
    })

    it.skip("only organizer can set voter address",async() => {
        let err = null

        try{
            await vote.setVoterAddr(voter,{from:attacker});
        }catch(error){
            err = error
        }
        assert.ok(err instanceof Error)
    })

    it.skip("check voter address",async() => {
        const tx1 = contractInstance.setVoterAddr(voter)
        assert.isOk(tx1)
        const tx2 = contractInstance.checkVoterAddr(voter)
        assert.isOk(tx2)
    })

    it("check voter address(incorrect)",async() => {
        let err = null

        try{
            await vote.checkVoterAddr(attacker);
        }catch(error){
            err = error
        }
        assert.ok(err instanceof Error)
    })

    it("creat vote and send vote",async() => {
        // const tx1 = await contractInstance.setVoterAddr(voter)
        // assert.isOk(tx1)

        const tx2 = await contractInstance.createVote("0x11",{from:voter})
        assert.isOk(tx2)

         const tx3 = await contractInstance.sendVote({from:voter})
        assert.isOk(tx3)
    })

    it("only vote can create vote",async() => {
        // const tx1 = await contractInstance.setVoterAddr(voter)
        // assert.isOk(tx1)

        let err = null

        try{
            await vote.createVote({from:attacker});
        }catch(error){
            err = error
        }
        assert.ok(err instanceof Error)
    })

    it("can't send vote from incorrect address",async() => {
        let err = null

        try{
            await vote.sendVote({from:attacker});
        }catch(error){
            err = error
        }
        assert.ok(err instanceof Error)
    })

    it("view result",async() => {
        const tx = await contractInstance.viewResult
        assert.isOk(tx)
    })
})