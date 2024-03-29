"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";

import { CustomEase } from "gsap/CustomEase";

import gsap from "gsap";

const Loader = ({ loading }) => {
  gsap.registerPlugin(CustomEase);
  let root = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.set("html", {
      overflow: "hidden",
    });
    tl.to(
      ".heading-title",
      {
        x: "-50%",
        autoAlpha: 1,
      },
      0
    )
      .to(
        ".heading-2",
        {
          x: 0,
          autoAlpha: 1,
          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
        },
        0
      )
      .to(
        ".heading-3",
        {
          x: 0,
          autoAlpha: 1,
          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
        },
        0
      )

      .to(
        ".heading-1",
        {
          yPercent: -110,
          delay: 0.06,
          duration: 2,
          autoAlpha: 1,
          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
        },
        0.4
      )

      .to(
        ".heading-2",
        {
          yPercent: -110,
          delay: 0.12,
          duration: 2,

          autoAlpha: 1,
          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
        },
        0.6
      )

      .to(
        ".heading-3",
        {
          yPercent: -110,
          delay: 0.18,
          duration: 2,
          autoAlpha: 1,
          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
        },
        0.6
      )

      .to(
        ".loading-anim",
        {
          opacity: 0,

          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
        },

        0.6
      );

    if (!loading) {
      tl.to(
        ".loader-bg",
        {
          y: "-100%", // move up
          duration: 1.3,
          ease: CustomEase.create("cubic", "0, .89, .41, 1"),
          stagger: 0.4,
          onComplete: () => {
            window.dispatchEvent(new CustomEvent("startHeroAnimation"));
          },
        },
        1
      );
      tl.set("html", {
        overflow: "auto",
      });
      
      tl.to(".main-loader", {
        visibility: "hidden",
      });
      
    }
  }, [loading]);

  return (
    <div
      ref={root}
      className="fixed z-50 w-full h-full text-center text-primary main-loader"
    >
      <div className="absolute top-0 left-0 w-full h-full loader-bg bg-background -translate-y-[0] z-[3] loader-bg"></div>
      <div className="absolute top-0 w-full h-full bg-accent -translate-y-[0] z-[1] loader-bg"></div>

      <h3 className="absolute  font-medium top-1/2 left-1/2 z-[5] flex  -translate-x-[40%] -translate-y-1/2 heading-title transition-transform   ">
        <div className="flex space-x-3 overflow-hidden ">
          <span className="tracking-tighter transition-transform heading-1 text-accent">
            John Doe
          </span>

          <span className="block heading-2 invisible ml-2 overflow-hidden opacity-0  translate-x-[150%] transition-transform">
            is
          </span>

          <span className="heading-3 opacity-0 invisible  translate-x-[300%] transition-transform heading-3 ">
            a
          </span>
        </div>
      </h3>
      <div className="overflow-hidden ">
        <div className="loading-anim"></div>
      </div>
    </div>
  );
};

export default Loader;
