const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");

describe("Box", () => {
  it("works", async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const instance = await upgrades.deployProxy(Box, [42]);
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2, [42]);

    const value = await instance.retrieve();
    console.log({ value: value.toString() });
    expect(value.toString()).to.equal("42");

    await upgraded.increment();

    const value1 = await instance.retrieve();
    const value2 = await upgraded.retrieve();

    expect(value2.toString()).to.equal("43");
    expect(value1.toString()).to.equal(value2.toString());
  });
});
