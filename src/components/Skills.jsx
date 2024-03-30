import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { Button } from "./Button";
import SkillCard from "./SkillCard";

const Skills = ({ skills }) => {
  const canvasRef = useRef(null);
  let root = useRef();
  const [showAllSkills, setShowAllSkills] = useState(false);

  gsap.registerPlugin(useGSAP, ScrollTrigger);


  useGSAP(
    () => {

      let heading = new SplitType(".heading-skills", {
        types: "words",
      });

      let words = heading.words;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-skills",
          start: "top 80%",
          end: "bottom 20%",
        },
      });

      tl.from(words, {
        yPercent: 100,
        stagger: 0.025,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
      });

      tl.fromTo(".skill-card", {
        opacity:0,
        duration: 0.2,
        stagger:.1

      },
      {
        opacity:1,
        duration: 0.2,
        stagger:.1
      }
      );
    },
    { scope: root }
  );


  return (
    <section id="skills" ref={root}>
      <div className="container">
        <h2 className="heading-skills trigger-skills">What I'm Good At</h2>
        <div className="grid gap-10 mt-10 md:grid-cols-3">
        {skills
            ?.filter((skill) => skill.enabled)
            .slice(0, showAllSkills ? skills.length : 7) 
            .map((skill) => (
              <div key={skill.id} className=" skill-card">

                <SkillCard skill={skill}  />
              </div>
            ))}
          
        </div>
        <div className="flex justify-center mt-10">
        {!showAllSkills && skills.length > 5 && (
            <Button onClick={() => setShowAllSkills(true)}>Show More</Button>
          )}
        </div>
      
      </div>
    </section>
  );
};

export default Skills;
