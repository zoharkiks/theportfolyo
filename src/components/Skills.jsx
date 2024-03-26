import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useEffect, useRef } from "react";
import { Engine, Render, Runner, Bodies, World } from 'matter-js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

const Skills = ({ skills }) => {

  
  let root = useRef();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  
  useGSAP(() => {
    
let heading = new SplitType(".heading-skills", {
  types: "words",
})
    
let words = heading.words;

console.log(words);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-skills",
        start: "top 80%",
        end: "bottom 20%", // Adjust end position as needed
      },
    });

    tl.from(words, {
      yPercent: 100,
      stagger: 0.025,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    })
   
    
  },{ scope: root })
  


  return (
    <section ref={root}>
      <div className="container">
        <h2 className="heading-skills trigger-skills">What I'm Good At</h2>
        <div
          className="w-full gap-10 p-4 mt-10 border rounded-xl border-primary h-[720px] relative  "
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center m-auto uppercase">
            <span className="font-medium">Click And Drag</span>
            <h3 className="font-medium">Skills I Specialize In</h3>
          </div>

          {/* {skills
            ?.filter((skill) => skill.enabled)
            .map((skill) => (
              <div className="flex flex-col items-center justify-center border rounded-full border-accent size-32 box text-primary">f</div>
            ))} */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
