const hre = require("hardhat");

async function main() {
  const Box = await hre.ethers.getContractFactory("Box");
  const box = await hre.upgrades.deployProxy(Box, [42]);
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();
