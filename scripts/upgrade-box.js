const hre = require("hardhat");

async function main() {
  const BoxV2 = await hre.ethers.getContractFactory("BoxV2");
  const BOX_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const box = await hre.upgrades.upgradeProxy(BOX_ADDRESS, BoxV2, [42]);
  console.log("Box upgraded to:", box.address);
}

main();
