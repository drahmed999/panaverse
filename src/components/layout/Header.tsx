import React from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b-black">
      <Wrapper>
        <div className="flex justify-between max-w-screen-xl mx-auto  border-black top-0 py-3 px-2 items-center">
          {/* Logo */}
          <div>
            <Image src={logo} alt="panavere logo" width={100} height={80} />
            {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
          </div>
          {/* Navigation bar */}
          <ul className="flex space-x-7 font-semibold hover:underline duration-300  hover:scale-105">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link href={"../blog"}>Blog</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
