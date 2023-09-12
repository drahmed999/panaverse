import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import business from "../../assets/images/business.png"
import tech from "../../assets/images/tech.jpg"

const outcomePoints=["Product Ownership","Freelacing","Global Marketing by DAO","Boosting Economy"];

function EndSection() {
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col gap-y-2 md:flex-row gap-x-2 mt-4">
          {/* left Side */}
          <div className="basis-7/12 flex flex-auto items-center border rounded-t-2xl rounded-b-lg bg-black">
            <div><Image src={tech} alt="" width={1000} height={1000}/>
            </div></div>
          {/* Right side */}
          <div className="basis-5/12 bg-sky-200 rounded-t-xl rounded-b-lg p-4">
            <h4 className="text-2xl md:text-3xl justify-center tracking-tighter underline font-bold ">The Outcome for Participants of the Program</h4>
            <p className="text-lg  text-slate-600 mt-4 tracking-tighter">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
<div className="mt-3 space-y-3 grid grid-cols-2 gap-x-5 items-center">
  {outcomePoints.map((item,i)=>(
    
      <div key={i} className="flex items-center shrink-0">
<svg className="shrink-0"  width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z" fill="url(#paint0_radial_1_55)"/>
<path fill-rule="evenodd" clipRule="evenodd" d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1177 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9667 28.1236 24.5 33C22.5117 30.2129 20.3398 27.6189 17 24.9206Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_1_55" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)">
<stop offset="0.125" stopColor="#00E1F0"/>
<stop offset="1" stopColor="#00616C"/>
</radialGradient>
</defs>
</svg>

        <h3 className="font-medium ">{item}</h3>
      </div>
      
  ))};

</div>
          
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default EndSection;
