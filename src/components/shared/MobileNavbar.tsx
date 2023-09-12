"use client";
import {AiOutlineMenu} from "react-icons/ai";
import React, { useState } from "react";

function MobileNavbar() {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };
  return (<>    // mobile nav Hamburger

    <div onClick={handleNavbar} className="md:hidden ">
      <AiOutlineMenu size="20" />
    </div>
// mob nav

<div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black">
    <div className="fixed left-0 top-0 w-[75% sm:w-[60% md:w-[45%] h-screen bg-white p-10 ease-in duration-500"><div className="flex w-full items-center justify-between"></div></div>
</div>

</>

  );
}

export default MobileNavbar;
