const hre = require("hardhat");

async function main() {
    const DoIt = await hre.ethers.getContractFactory("RSToken");
    const doit = await DoIt.deploy();
    await doit.deployed;
    console.log("Do It deployed: ", doit.address);
}

main().catch((error)=> {
    console.error(error);
    process.exitCode = 1;
});