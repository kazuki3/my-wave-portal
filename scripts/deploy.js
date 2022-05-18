const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    const waveContract = await hre.ethers.getContractFactory("WavePortal");
    const wavePortal = await waveContract.deploy();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
    console.log("Contract deployed to: ", wavePortal.address);
    console.log("Contract deployed to: ", deployer.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();