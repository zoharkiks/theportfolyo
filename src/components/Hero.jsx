import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { getIst } from "@/utils";
import Image from "next/image";

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
          end: "bottom 20%",
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

        tl.to(
          ".avatar",
          {
            x: "0%",
            duration: 1.5,
            ease: CustomEase.create("cubic", "0, .89, .41, 1"),
          },

          1.5
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
      <section className="relative ">
        <div className=" justify-center mt-10  h-[450px] w-3/4 hidden md:flex   overflow-hidden absolute right-0">
          <Image
            className="object-cover w-full h-full avatar -translate-x-[100%] relative"
            src={about.avatar.url}
            alt={about.title}
            width={2024}
            height={1024}
          />
          <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-background "></div>
        </div>

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
                  Currently In <br /> {about.address}
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

          <div className="flex justify-center mt-10 md:hidden h-[320px]   overflow-hidden">
            <Image
              className="object-cover w-full h-full avatar -translate-x-[100%]"
              src={about.avatar.url}
              alt={about.title}
              width={1024}
              height={1024}
            />
          </div>

          {/* Mobile Info */}
          <div className="flex mt-10 md:hidden ">
            <div className="overflow-hidden ">
              <span className="uppercase mr-[10vw] -translate-y-[-100%] block subheading">
                Currently In <br /> {about.address}
              </span>
            </div>
            <div className="block overflow-hidden">
              <span className="uppercase -translate-y-[-100%] block subheading">
                My Local Time <br /> {getIst()}
              </span>
            </div>
          </div>

          

          <div className="flex flex-col justify-between gap-10 mt-10 md:flex-row-reverse md:items-center ">
            <div className="flex flex-col gap-4 md:mt-[30vh] ">
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
