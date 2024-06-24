//import ethers from "./package.json";
//const { ethers } = require("ethers");
//const ethers = require("ethers");
//import  parseEther from "./package.json";
//import { parseEther } from "ethers/lib/utils";
import { ethers } from "ethers";
import './send.css';
import Swal from 'sweetalert2';

const Send=({state})=>{
    
    const {contract}=state;
    function done(){
        return(
        Swal.fire({
            position: "top-mid",
            icon: "success",
            title: "Transaction Sucessfull..",
            showConfirmButton: false,
            timer: 1500,
          })
        )
     }

    const pay= async (event)=>{
        event.preventDefault();

        const name=document.querySelector("#name").value;
        const msg=document.querySelector("#message").value;
        
        console.log(name,msg,contract);

        const amount={value:ethers.utils.parseEther("0.000001")};
        console.log(amount);

        const transaction=await contract.pay(name,msg,amount);
         await transaction.wait();
         done();
    }
   
return(
    
    <div class="infodiv">
        <form onSubmit={pay}>
            <label>Name &nbsp;</label>
            <input type="text" id="name" placeholder="  enter your name"></input>&nbsp;&nbsp;

            <label>Message &nbsp;</label>
            <input type="text" id="message" placeholder="  enter ur msg"></input>&nbsp;&nbsp;
            
            <button type="submit" >Pay</button><br></br>
        </form>
    </div>
)
}
export default Send;