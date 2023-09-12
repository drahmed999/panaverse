"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import bg_form from "../../assets/images/bg_form.png";
import Wallet from "./Wallet";

export default function Form() {
  return (<>
    <Image src={bg_form} alt="" fill className="w-screen  bg-repeat bg-scroll bg-origin-padding blur-sm bg-center -z-40"/>
<div className="flex justify-end"><Wallet/></div>
      <Wrapper>
          <div className=" p-2  ">

        <div className="mx-auto text-center  hover:text-black hover:underline text-slate-300 animate-bounce leading-loose font-extrabold text-5xl align-top items-center"><h1>Enrollent Form</h1>
        </div>
        <form action="www.example.com/login.php">
        {/* Personal Details */}
          <fieldset className="border-black border-2 p-5">
            <legend className="font-bold bg-pink-100 rounded p-2 text-xl justify-center">
              Personal Details
            </legend>
            <div className="flex-row">
              <div>
                <fieldset className="border-gray-500 bg-pink-100 border-2 rounded-2xl p-3">
                  <legend className="font-bold text-red-700 bg-pink-100 rounded px-2 underline text-xl justify-center">
                    {" "}
                    Name
                  </legend>
                    <p><span className="font-bold text-lg">
                    First Name: 
                    </span><input
                      type="text"
                      required
                      size={20}
                      maxLength={15}
                      name="name"
                      className=" m-2 border-4"
                    />
                    <br />
                    <span className="font-bold text-lg"> Last Name:</span> 
                    <input
                      type="text"
                      name="name"
                      required
                      size={20}
                      maxLength={15}
                      className="border-4 m-2"
                    />
                    <br />
                    <br />
                  </p>
                </fieldset>
                <br />
                <p>
                  <span className="font-bold text-lg">Gender:</span>
                  <br />
                  <span>
                    <label>
                      <input type="radio" required name="gender" value="m" />{" "}
                      Male{" "}
                    </label>
                  </span>
                  <br />
                  <label>
                    <input type="radio" required name="gender" value="f" />{" "}
                    Female{" "}
                  </label>
                </p>
              </div>
              <div>
                <p className="font-bold text-lg">
                  <br />
                  Age:
                  <input
                    type="number"
                    required
                    size={2}
                    maxLength={3}
                    name="age"
                    className="m-3 border-4"
                  />
                  <span className="m-2 justify-between">Date of Birth : </span>
                  <input
                    type="date"
                    name="date"
                    required
                    size={8}
                    maxLength={3}
                    className="border-3 text-gray-400  p-2 border-red-400 rounded-md"
                  />
                </p>
              </div>
            </div>
            {/* contact details */}
            <fieldset className="border-gray-500 bg-pink-100 border-2 rounded-2xl p-3">
                  <legend className="font-bold text-lg justify-center">
                    {" "}
                Contact Details
                  </legend>
                  <p className="font-bold text-lg">
                    <pre>Address:</pre>
                    <input
                      type="text"
                      required
                      size={70}
                      maxLength={100}
                      name="name"
                      className="border-4"
                    />
                    </p>
                    <br />
                    <p>
                        <span className="font-semibold text-lg">City:</span>
                    <select className="b-2 border-gray-600 m-2" required>
                        <option>-------</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Karachi</option>
                        <option>Peshawar</option>
                        <option>Faisalabad</option>
                    </select>
                    <span className="font-semibold text-lg">Country:</span>
                    <select className="b-2 border-gray-600 m-2" required>
                        <option>----------</option>
                        <option>Saudia Arabia</option>
                        <option>Iran</option>
                        <option>India</option>
                        <option>Syria</option>
                        
                        <option>Pakistan</option>
                    </select>
                    <br />
                  </p>
                  <p><span className="font-semibold text-lg">
             
                  Phone Number:
                  </span><input
                    type="text"
                    required
                    size={20}
                    maxLength={13}
                    name="PhNo"
                    className="m-3 border-4"
                  />
                  </p>
                  <p><span className="font-semibold text-lg">
             
                  Email Address:
                  </span><input
                    type="email"
                    required
                    size={40}
                    maxLength={50}
                    name="email"
                    className="m-3 border-4"
                  />
                  </p>
                  
                </fieldset>

<div className="px-12 mt-3">
                <span className="font-bold text-center  text-lg underline"> Upload Profile Pic :</span> 
                    <input
                      type="file"
                      name="pic"
                      required
                      size={20}
                      maxLength={15}
                      className="p-1 rounded-l-lg border-4 m-2"
                    />
                    <br />
                     <span className="font-bold text-center  text-lg underline"> Upload Resume :</span> 
                    <input
                      type="file"
                      name="cv"
                      required
                      size={20}
                      maxLength={15}
                      className="p-1 rounded-l-lg border-4 m-2"
                    />
                    <input
                      type="submit"
                      name="upload"
                      required
                      className="p-2 border-4 bg-red-400 rounded-r-lg m-1"
                    />
     </div>               
          </fieldset>
        </form>
    </div>
      </Wrapper>
      
      </>    
  );
}
