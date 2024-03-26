import React, { useRef, useState } from "react";
import EducationTimeline from "./EducationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import { Button } from "./Button";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Timeline = ({ timeline }) => {
  const [activeSection, setActiveSection] = useState("education");

  const educationData = timeline.filter((item) => item.forEducation);
  const experienceData = timeline.filter((item) => !item.forEducation);

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  let root = useRef();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      let heading = new SplitType(".heading-timeline", {
        types: "words",
      });

      let words = heading.words;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-timeline",
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
      });
    },
    { scope: root }
  );

  return (
    <section ref={root}>
      <div className="container">
        <h2 className="heading-timeline trigger-timeline">Where I Have Been</h2>
        <div className="timeline">
          <div className="flex justify-center gap-10 mt-10">
            <Button
              onClick={() => toggleSection("education")}
              className={activeSection === "education" ? "bg-accent" : ""}
            >
              Education
            </Button>
            <Button
              onClick={() => toggleSection("experience")}
              className={activeSection === "experience" ? "bg-accent" : ""}
            >
              Experience
            </Button>
          </div>

          <div className="mt-20 timeline-content">
            {activeSection === "education" && (
              <EducationTimeline educationData={educationData} />
            )}
            {activeSection === "experience" && (
              <ExperienceTimeline experienceData={experienceData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
