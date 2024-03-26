import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useEffect, useRef } from "react";
import { Engine, Render, Runner, Bodies, World } from 'matter-js';

const Skills = ({ skills }) => {
  const containerRef = useRef(null);

  

  


  return (
    <section>
      <div className="container">
        <h2>What I'm Good At</h2>
        <div
          ref={containerRef}
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
