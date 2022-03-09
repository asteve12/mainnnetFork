import { expect } from "chai";
import { ethers } from "hardhat";
import {IGreeter} from "../typechain"

const deployedContract = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
let Greeter:IGreeter;
const text:string = "WE DID THIS BEFORE TESTING"

/*
BEST PRACTISE IS TO INITIALISE YOUR GLOBAL VARIABLE IN THE BEFORE SECTION
*/

/*
A signer is an address that have a private key
which are the EOA accoutnt
*/
//getting a signer

//signer:Signer =  await ethers.getSigner(deployedContract) 

describe("Greeter", function () {

  before(async function(){
    Greeter = await ethers.getContractAt("IGreeter", deployedContract);
    await Greeter.setGreeting(text);
 
  })
  it("Should return the set Text", async function () {
   const currentGreeting:string = await Greeter.greet();

   expect(currentGreeting).to.equal(text);
  });
});
