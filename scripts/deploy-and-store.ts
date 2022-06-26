import hre from "hardhat"

async function main() {
  // compile the contract
  await hre.run("compile")

  // deploy the contract
  const simpleStorageFactory = await hre.ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await simpleStorageFactory.deploy()
  await simpleStorage.deployed()
  console.log(`Deployed contract to: ${simpleStorage.address}`)

  // call the store function
  const transactionResponse = await simpleStorage.store(1)
  const transactionReceipt = await transactionResponse.wait()
  console.log(transactionReceipt?.events ? transactionReceipt.events[0] : null)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
