import React from "react";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "../shared/QuaterBox";
// import tilesData from "@/assets/data/tilesData";
import MiniInfoTiles from "../shared/MiniInfoTiles";
// import ai from "../../assets/images/ai.png";
import Image from "next/image";
import ai from "../../assets/images/ai.png";
import cc from "../../assets/images/cc.png";
import bc from "../../assets/images/bc.png";
import nc from "../../assets/images/nc.png";
import rc from "../../assets/images/rc.png";
import web from "../../assets/images/web.png";
import tech from "../../assets/images/tech.jpg"

const tilesData: { head: string; subHead: string; pic: any }[] = [
  {
    head: "Specialized Program",

    subHead: "Web 3.0 (Blockchain) and Metaverse Specialization",
    pic: tech ,
  },
  {
    head: "Specialized Program",

    subHead: "Cloud-Native Computing Specialization",
    pic:cc,
  },
  {
    head: "Specialized Program",

    subHead: "Artificial Intelligence (AI) and Deep Learning Specialization",
    pic: bc,
  },
  {
    head: "Specialized Program",

    subHead: "Ambient Computing and IoT Specialization",
    pic: nc,
  },
  {
    head: "Specialized Program",

    subHead: "Genomics and Bioinformatics Specialization",
    pic: web,
  },
];

const SpecializedTracks = () => {
  return (
    <section>
      
      <Wrapper>
        {/* header */}
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold text-center whitespace-pre">
            Specialised Tracks
          </h2>
          <p className=" text-lg text-slate-600 mt-2">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-x-2">
          <div>
            {/* content left side */}
            <div className=" border-slate-200 border-2 flex-1 border-dotted h-full rounded-md p-4 basis-6/12 ">
              <h4 className="text-teal-800 text-lg lg:text-red-400 tracking-tight font-semibold mt-2">
                Specialised Tracks
              </h4>
              <h3 className="text-2xl md:text-4xl justify-center tracking-tighter  font-bold ">
                {" "}
                <u>Web 3.0 (Blockchain)</u> & <u>Metaverse Specialization</u>
              </h3>
              <p className="text-lg text-slate-600 mt-2">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <button className="underline mt-3 flex items-end gap-x-1">
                Learn More
                <svg
                  className="mb-1.5"
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                    stroke="#00616C"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <div className="flex flex-col gap-x-4 md:flex-row md:mt-[200px] md:m-4 md:mx-20 md:gap-x-20 md:pt-5 max-w-screen-md py-15 mt-2">
                <div className="">
                  <QuarterBox
                    main="Quarter IV"
                    desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                    num={4}
                  />
                </div>
                <div >
                  <QuarterBox
                    main="Quarter V"
                    desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                    num={5}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}

          <div className="flex-row basis-6/12">
            {/* <div className=" px-4 py-6  flex gap-x-2 ">
           <div> <div className="h-20 w-20 bg-slate-400">
<Image src={ai} alt="" width={150} height={200}/>
            </div>
            </div>
            <div>
                <h4 className="text-primary">Specialized Program</h4>
                <h3 className="font-semibold  text-xl">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
            </div>
        </div> */}
            {/* <div>
        <MiniInfoTiles logo="/public/logo.png" head="Specialized Program" subHead="Web 3.0 (Blockchain) and Metaverse Specialization"/>
        </div>    */}
            <div className="cursor-pointer">
              {tilesData.map((items) => {
                return (
                  <MiniInfoTiles
                  key={items.head}
                    logo={items.pic}
                    head={items.head}
                    subHead={items.subHead}
                  />
                );
              })}
            </div>
          </div>
        </div>{" "}
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
