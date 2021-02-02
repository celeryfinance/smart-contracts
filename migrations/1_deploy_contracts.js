const { address } = require('../secrets.json')

const CakeToken = artifacts.require("CakeToken");
const Timelock = artifacts.require("Timelock");
const MasterChef = artifacts.require("MasterChef");

module.exports = async function(deployer) {
   await deployer.deploy(CakeToken);
   await deployer.deploy(Timelock, address, 64800);
   await deployer.deploy(MasterChef, CakeToken.address, address, Timelock.address, (1e18 * 1).toString(), 0);
};
