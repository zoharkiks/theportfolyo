"use client";

import Link from "next/link";
import { Button } from "./Button";
import useScrollDirection from "@/hooks/useScrollDirection";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MobNav from "./MobNav";
import { useLenis } from "@studio-freight/react-lenis";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const { scrollDirection, isScrolling } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(true);

  const scroll = useLenis();

  const navRef = useRef();



useGSAP(() => {
  const nav = document.querySelector("nav");
  if (isScrolling && scrollDirection === "down") {
    gsap.to(nav, {
      y: "-110%",
      duration: 0.5,
    });
  } else {
    gsap.to(nav, {
      y: "0",
      duration: 0.5,
    });
  }

  return () => {};
},{ dependencies: [isScrolling], scope: navRef })

  
  useGSAP(
    () => {
      var tl = gsap.timeline({ paused: true });
      var navTl = gsap.timeline({ paused: true });

      const myPath = document.getElementById("quadbz");
      const navContainer = document.getElementById("nav-container");

      const Tg = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
      const kg = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
      const Pg = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
      const Mg = "M 0 0 V 100 Q 50 100 100 100 V 0 z";
      const Ag = "M 0 0 V 50 Q 50 0 100 50 V 0 z";
      const Fg = "M 0 0 V 0 Q 50 0 100 0 V 0 z";

      navTl.set(navContainer, { transform: "translate(0px, 200px)" });
      navTl.to(navContainer, {
        delay: 0.75,
        duration: 0.5,
        display: "block",
        opacity: 1,
        transform: "translate(0px, 0px)",
      });

      tl.set(myPath, { attr: { d: Tg } });
      tl.to(myPath, { duration: 0.5, attr: { d: kg }, ease: "power3.in" });
      tl.to(myPath, { duration: 0.3, attr: { d: Pg }, ease: "power3" });
      tl.set(myPath, { attr: { d: Mg } });
      tl.to(myPath, { duration: 0.3, attr: { d: Ag }, ease: "power3.in" });
      tl.to(myPath, {
        duration: 0.5,
        attr: { d: Fg },
        ease: "power3",
      });

      // Close Menu

      if (isMenuOpen) {
        tl.restart();
        navTl.restart();
        scroll.stop();
      }

      if (!isMenuOpen && !isAnimationPlayed) {
        var navReverseTl = gsap.timeline({ paused: true });
        navReverseTl.set(navContainer, { transform: "translate(0px, 0px)" });
        navReverseTl.to(navContainer, {
          delay: 1,
          duration: 0.5,
          opacity: 0,
          display: "hidden",
          transform: "translate(0px, -10000px)",
        });
        navReverseTl.restart();
        tl.restart();
        scroll?.start();
      }
    },
    { dependencies: [isMenuOpen], scope: navRef }
  );

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
    setIsAnimationPlayed(false);
  };

  return (
    <nav
      ref={navRef}
      data-scroll-direction={scrollDirection}
      data-scrolling={isScrolling}
      className="fixed top-0 z-10 flex items-center justify-between w-full p-5 glassmorphism "
    >
      <span className="text-2xl font-medium cursor-pointer !w-max ">J.Doe</span>

      <MenuIcon className="md:hidden" onClick={() => {handleMenuToggle()}} />

      <div className="items-center justify-center hidden gap-10 md:flex">
        {/* Nav Links */}
        <div className="flex gap-4 mr-10">
          <Link className="nav-link" href="#home">
            <span>Home</span>
          </Link>

          <Link className="nav-link" href="#services">
            <span>Services</span>
          </Link>

          <Link className="nav-link" href="#skills">
            <span>Skills</span>
          </Link>

          <Link href="#projects">
            <span>Projects</span>
          </Link>

          <Link href="#testimonials">
            <span>Testimonials</span>
          </Link>

          <Link href="#contact">
            <span>Contact</span>
          </Link>
        </div>
        <Button>Let's Talk</Button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="pointer-events-none fixed left-0 top-0 z-[1000] h-screen w-full fill-accent"
      >
        <path
          id="quadbz"
          vector-effect="non-scaling-stroke"
          d="M 0 0 V 0 Q 50 0 100 0 V 0 z"
        ></path>
      </svg>

      <div
        id="nav-container"
        class="fixed bg-background h-screen w-full top-0 left-0 opacity-0 flex-col items-center justify-center -z-10 hidden overflow-hidden "
      >
        <div class="relative h-full w-full flex flex-col items-center justify-center">
          <div class="flex flex-col justify-center items-center gap-8">
            <Link onClick={() => handleMenuToggle()} className="nav-link" href="#home">
              <span>Home</span>
            </Link>

            <Link onClick={() => handleMenuToggle()} className="nav-link" href="#services">
              <span>Services</span>
            </Link>

            <Link onClick={() => handleMenuToggle()} className="nav-link" href="#skills">
              <span>Skills</span>
            </Link>

            <Link onClick={() => handleMenuToggle()}  href="#projects">
              <span>Projects</span>
            </Link>

            <Link onClick={() => handleMenuToggle()} href="#testimonials">
              <span>Testimonials</span>
            </Link>

            <Link onClick={() => handleMenuToggle()} href="#contact">
              <span>Contact</span>
            </Link>
          </div>

          <div class="bg-secondary absolute bottom-0 mb-2">f</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
