import React, { useRef } from "react";
import { Button } from "./Button";
import ServiceCard from "./ServiceCard";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";

const Services = ({ services }) => {
  let root = useRef();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const nav = document.querySelector("nav");

      let heading = new SplitType(".heading-services", {
        types: "words",
      });

      let words = heading.words;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-services",
          start: "top 80%",
         
         
        },
        
      });

      tl.from(words, {
        yPercent: 100,
        stagger: 0.025,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
      });
      tl.from(".services", {
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
      });
    },
    { scope: root }
  );

  return (
    <section id="services" ref={root}>
      <div className="container">
        <h2 className="heading-services trigger-services">
          What I Can Help You With
        </h2>
        <div className="flex flex-col mt-10 items-center bg-primary text-background rounded-[var(--radius-l)] px-10 py-14 services">
          <Button intent={"secondary"}>Services</Button>
          <div className="flex flex-col items-center mt-4 *:font-medium">
            <h3 className="">Your Design Wishlist:</h3>
            <h3 className="">
              {" "}
              <span className="italic">checked </span>
              off!
            </h3>
          </div>
          <p className="mt-4 text-center">
            Your brand's journey to the top starts with bold design choices that
            leave a lasting impression. From striking logos to compelling
            branding and interactive websites, we turn your vision into a visual
            language that speaks volumes. Design is your statement—let's make it
            unforgettable.
          </p>

          <div className="grid w-full gap-12 mt-6 md:grid-cols-3">
            {services
              ?.filter((service) => service.enabled)
              .map((service) => (
                <ServiceCard service={service} key={service._id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
