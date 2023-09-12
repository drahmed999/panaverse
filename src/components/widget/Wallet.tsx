"use client";
import { getZeroDevSigner,getSocialWalletOwner,ZeroDevSigner } from "@zerodevapp/sdk";
import React, { useState,useMemo } from "react";

function Wallet() {
  const [walletStatus, walletSigner] = useState("Connect");
  const [conection, disconnect] = useState("");

  //   const walletSigner=()=>{
  //     return "signed in"
  //   }
const createWallet=async()=>{
try {
    // setLoading(true)
    const signer=await getZeroDevSigner((
        projectId:'bd1ad0e1-23ec-423e-9ba7-9ed66924ec0b',
        owner:wallet,)
    ))
    
} catch (error) {
 console.log(error)   
}
finally{
    // setLoading(false)
}
}



  return (
    <div className="flex-end bg-white p-3 align-middle flex-col">
      <div>
        <button
          className="bg-gray-200 text-lg border m-2 p-3"
          onClick={() => {
            walletSigner("Connected");
            disconnect("Disconnect"); 
          }}
        >
          {walletStatus}
          <br />
        </button>
      </div>
      <div>address</div>
      <div>
        <button
          className="bg-gray-200 text-lg border m-2 p-3"
          onClick={() => {
            walletSigner("Connect");
          }}
        >
          {conection}
        </button>
      </div>
    </div>
  );
}

export default Wallet;
