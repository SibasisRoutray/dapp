import { ethers } from "ethers";
//import{provider} from "ethers";
//const ethers = require("ethers");
//import { ethers } from "hardhat";
//copy hardhat package.josn in react client folder and import
import abi from "./contract/Funding.json";
import {useState,useEffect} from "react";
import Send from "./components/send";
import View from "./components/view";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const[state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
  })
  
  
  useEffect(()=>{
    const connectWallet=async ()=>{
      const contractAddress="0xdbF294B55092fb61B9e5D6790B7EDEdD2D51DBFF";
      const contractABI=abi.abi;

      try{
        const{ethereum}=window;
        if(ethereum)
          {
          
          const account = await ethereum.request({
            method:"eth_requestAccounts",})
            console.log(account);

          }

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer=provider.getSigner();
          const contract=new ethers.Contract(contractAddress,contractABI,signer);

          setState({provider,signer,contract});
          
        }catch(error){
          console.log(error);
        }

      };
      connectWallet();
    },[]);

    console.log(state);
 
  return (
    <div className="App">
      <div>
        <img src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-desktop-sources-of-funding-for-business.jpg" alt="..." style={{width:"1200px",height:"200px", borderRadius:"50px", margin:"20px"}}></img>
      </div>
      
      
      <div>
        <Send state={state}>

        </Send>
        <h1 style={{color:"green"}}>Transaction Details..</h1><br></br>
        <div>
          <View state={state}>

          </View>
        </div>
       </div>
    </div>
  );
}

export default App;
