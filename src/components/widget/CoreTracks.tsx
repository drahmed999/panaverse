import React from "react";
import Button from "../shared/button";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "../shared/QuaterBox";

const coreTrackDate = [
  {
    main: "Quarter 1",
    desc: "CS-101: Object-Oriented Programming using TypeScript",
    num: 1,
  },
  {
    main: "Quarter 2",
    desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    num: 2,
  },
  {
    main: "Quarter 3",
    desc: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    num: 3,
  },
];

function CoreTracks() {
  return (
    <section>
      <div className="pt-2">
        <Wrapper>
          <div className="max-w-screen-sm mt-10">
            {/* Content */},
            <h4 className="text-teal-800 text-lg lg:text-red-400 font-semibold mt-2">
              Program Of Studies
            </h4>
            <h2 className="text-2xl md:text-4xl justify-center underline tracking-tight font-bold whitespace-pre">
              Core Courses <br></br>(Common In All Sections):
            </h2>
            <p className="mt-1 text-lg text-slate-600">
              Every participant of the program will start by completing the
              following three courses
            </p>
            <div className="mt-4 text-center md:text-left">
              <Button text="Learn More" />
            </div>
          </div>

          {/* Boxes */}
          <div className="my-20 gap-x-4 md:flex max-w-screen-md mx-auto py-15">
            {coreTrackDate.map((item) => {
              return (
                <div className="border flex flex-col hover:bg-slate-50 items-center rounded-md flex-1  md:w-1/3 px-8 py-8 relative">
                  <h4 className="font-bold text-lg ">{item.main}</h4>
                  <p className="mt-2 text-slate-700">{item.desc}</p>
                  <span className="absolute -top-2 right-4 text-9xl font-bold md:font-semibold -z-10 text-gray-200">
                    {item.num}
                  </span>
                </div>
              );
            })}
            ,
            <div>
              {" "}
              {/* following is not recommended bcz when dynamic  date is recieved uou cannot add more date */}
              {/* <QuarterBox
              main="Quarter 1"
              desc="CS-101: Object-Oriented Programming using TypeScript"
              num={1}
            />
            <QuarterBox
              main="Quarter 2"
              desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
              num={2}
            />
            <QuarterBox
              main="Quarter 3"
              desc="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
              num={3}
            /> */}
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default CoreTracks;
