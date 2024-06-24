const hre = require("hardhat");

async function main() {
  const Funding = await hre.ethers.getContractFactory("Funding");
  const contract = await Funding.deploy();

  
  console.log("Address of contract:", await contract.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//PS D:\programming\react\fund> npx hardhat run --network sepolia deploy.js
//Address of contract: 0xdbF294B55092fb61B9e5D6790B7EDEdD2D51DBFF