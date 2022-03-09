import {ethers} from "hardhat"
import {Ishiba} from "../typechain"




async function checkAddrBalance() {
    const shiba = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
    const getShiba = (await ethers.getContractAt("Ishiba", shiba)) as Ishiba;
    const balanceOfUser = await getShiba.balanceOf(
      "0x129bba5a8910dc3ba46f52db200693c8bb161c2d"
    );
    console.log(balanceOfUser);
    

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
checkAddrBalance().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
