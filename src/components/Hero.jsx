import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { getIst } from "@/utils";

const Hero = ({ about }) => {
  let root = useRef();
  gsap.registerPlugin(CustomEase, useGSAP, ScrollTrigger);

  const { title, description } = about || {};
  const [firstWord, secondWord] = title.split(" ");

  useGSAP(
    () => {
      const description = new SplitType(".description", {
        types: "lines",
      });
      const lines = description.lines;


      const fadeInTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 80%",
          end: "bottom 20%", // Adjust end position as needed
        },
      });

      fadeInTl.from(lines, {
        yPercent: 100,
        stagger: 0.025,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
      });

      const tl = gsap.timeline({});
      const startHeroAnimation = () => {
        tl.to(
          ".hero-1",
          {
            y: "0%",
            duration: 1.5,
            stagger: 0.2,
            // ease: "cubic-bezier(0, .89, .41, 1)",
            ease: CustomEase.create("cubic", "0, .89, .41, 1"),
          },
          0
        );

        tl.to(
          ".subheading",
          {
            y: "0%",
            duration: 1.5,
            stagger: 0.2,
            ease: CustomEase.create("cubic", "0, .89, .41, 1"),
          },

          1
        );
      };

      window.addEventListener("startHeroAnimation", startHeroAnimation);

      return () => {
        window.removeEventListener("startHeroAnimation", startHeroAnimation);
      };
    },
    { scope: root }
  );

  return (
    <div id="home" ref={root}>
      {/* Hero Section */}
      <section>
        <div className="container mt-10">
          <div className="flex items-center justify-between gap-10 ">
            <h1>
              <div className="block overflow-hidden ">
                <span className="-translate-y-[-100%] block hero-1">
                  Creative
                </span>
              </div>
            </h1>

            <div className="justify-around hidden w-full md:flex ">
              <div className="overflow-hidden">
                <span className="uppercase -translate-y-[-100%] block subheading">
                  Currently In <br /> Los Angeles, California
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="uppercase -translate-y-[-100%] block subheading">
                  My Local Time <br /> {getIst()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around md:items-center md:flex-row">
            <h1 className="">
              <div className="block overflow-hidden ">
                <span className="-translate-y-[-100%] block hero-1 text-accent italic pr-2 md:mr-10">
                  {firstWord}
                </span>
              </div>
            </h1>
            <h1>
              <div className="block overflow-hidden ">
                <span className="-translate-y-[-100%] block hero-1 ">
                  {secondWord}
                </span>
              </div>
            </h1>
          </div>

          {/* Mobile Info */}
          <div className="flex mt-10 md:hidden ">
            <div className="overflow-hidden ">
              <span className="uppercase mr-[10vw] -translate-y-[-100%] block subheading">
                Currently In Los Angeles, California
              </span>
            </div>
            <div className="block overflow-hidden">
              <span className="uppercase -translate-y-[-100%] block subheading">
                My Local Time
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 mt-10 md:flex-row-reverse md:items-center ">
            {/* Cards */}
            {/* <div className="relative flex basis-1/2 md:w-[42%] md:translate-x-[9%] md:translate-y-[30%] ">
              <div className="top-[15%] absolute overflow-hidden rounded-3xl left-0 w-[75%] h-[30rem] bg-accent "></div>
            </div> */}

            <div className="flex flex-col gap-4 mt-[20vh] ">
              <span className="text-xl uppercase">About Myself</span>
              <div className="overflow-hidden trigger">
                <h4 className="block font-medium leading-normal tracking-widest description ">
                  I'am <span className="text-accent">John Doe</span>,{" "}
                  {about?.subTitle}. {description}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
