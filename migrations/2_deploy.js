const Vote = artifacts.require("Vote");

module.exports = (deployer,accounts) =>{
    deployer.deploy(Vote);
    //gas: 2000000
};
