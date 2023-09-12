import Image from "next/image";
import React from "react";
import Wrapper from "../shared/Wrapper";
import heroPoster from "../../assets/images/heroPoster.webp";
import Button from "../shared/button";
import Link from "next/link";

function Hero(): JSX.Element {
  return (
    <section className="bg-gray-100">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center ">
          {/* left side */}
          <div className="flex-1">
            <h1 className="text-teal-800 text-lg lg:text-red-400 font-semibold mt-2">
              Presidential Initiative For Artificial Intelligence (PIAIC)
            </h1>
            <h4 className="text-2xl md:text-4xl underline justify-center font-bold">
              Certified Web 3 and Metaverse Developer
            </h4>
            <p className="mt-4 text-lg text-slate-600">
              Getting Ready For The Next Generation of the Internet</p>
              <p className="mt-1 text-lg text-slate-600">Consolidating Web 3.0,Metaverse,Artificial Intelligence(AI),Cloud
              Edge,Ambient Computing/IOT Network Animation and Bioinformatics
              technologies
            </p>
            <br></br>
          

            <div className="mb-4  text-center md:text-left lg:mb-0">
            <Link href={"../enroll"} > <Button text="Enroll Now" /> </Link>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image src={heroPoster} alt=""></Image>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
