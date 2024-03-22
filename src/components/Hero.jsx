import React from "react";

const Hero = ({ about }) => {
  const { title, description } = about || {};
  const [firstWord, secondWord] = title.split(" ");

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="container mt-10 ">
          <div className="flex items-center justify-between gap-10 ">
            <h1>{firstWord}</h1>
            <div className="justify-between hidden md:flex ">
              <span className="uppercase ">
                Currently at Los Angeles, California
              </span>
              <span className="uppercase ">My Local Time</span>
            </div>
          </div>
          <div className="flex md:justify-end">
            <h1>{secondWord}</h1>
          </div>

          {/* Mobile Info */}
          <div className="flex mt-10 md:hidden">
            <span className="uppercase mr-[10vw]">
              Currently at Los Angeles, California
            </span>
            <span className="uppercase ">My Local Time</span>
          </div>

          <div className="flex flex-col justify-between gap-10 mt-10 md:flex-row-reverse md:items-center ">
            {/* Cards */}
            {/* <div className="relative flex basis-1/2 md:w-[42%] md:translate-x-[9%] md:translate-y-[30%] ">
              <div className="top-[15%] absolute overflow-hidden rounded-3xl left-0 w-[75%] h-[30rem] bg-accent "></div>
            </div> */}

            <div className="flex flex-col gap-4 mt-[20vh]">
              <span className="text-xl uppercase">About Myself</span>
              <h4 className="font-medium leading-normal tracking-widest">
                I'am <span className="text-accent">John Doe</span>,{" "}
                {about?.subTitle}. {description} 
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
