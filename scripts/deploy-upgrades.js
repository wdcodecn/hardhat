const { ethers, upgrades } = require("hardhat");

// https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades
async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [42]);
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();
