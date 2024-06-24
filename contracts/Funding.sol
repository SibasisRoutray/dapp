// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Funding {
  struct People{
    string name;
    string message;
    address from;
    uint timestamp;
  }
 
 address payable owner;
 constructor()
 {
  owner=payable (msg.sender);
 }

 People [] public arr;

 function pay(string memory _name,string memory _message)public payable{
  require(msg.value>0,"plese pay more than 0 ether");
  arr.push(People(_name,_message,msg.sender,block.timestamp));
 }
      function check() public view returns(People[] memory){
        return arr;
      }
 }
  