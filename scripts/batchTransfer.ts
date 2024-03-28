const{ ethers }  = require("hardhat");
import { BigNumber } from "ethers";

const config = require("../../config.json");
const provider = new ethers.providers.JsonRpcProvider(config.provider.op);
//const provider = new ethers.providers.JsonRpcProvider(config.provider.op);
function sleep() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}

async function batchTran() {
    let addressList = [
        
    ]

    let add = [20] 

    for(var i = 0; i < 20; i++) {
        var PRIVATE_KEY = config.address[`privateKey${i+1}`];
        //console.log(i+1, "pair start");
        //console.log(PRIVATE_KEY);
        var wallet = new ethers.Wallet(PRIVATE_KEY);
        add[i] = wallet.address;
        // var account = wallet.connect(provider);
        // let amount = "0.0018";

        // for(var j = 0; j < 4; j++) {    
        //     await sleep();
        //     let tx = await account.sendTransaction({
        //             "to":addressList[i*4+j],
        //             "value": ethers.utils.parseEther(amount),
        //     })
        //         console.log("hash: ", tx.hash);
        //     }
        //     //console.log(addressList[i*4+j]);
        //     console.log("==============");
    }
    console.log(add)
}


    

batchTran();

