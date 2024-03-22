import React, { useState } from "react";
import EducationTimeline from "./EducationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import { Button } from "./Button";

const Timeline = ({ timeline }) => {
  const [activeSection, setActiveSection] = useState("education");

  const educationData = timeline.filter((item) => item.forEducation);
  const experienceData = timeline.filter((item) => !item.forEducation);

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <section>
      <div className="container">
        <h2>Where I Have Been</h2>
        <div className="timeline">
          <div className="flex justify-center gap-10 mt-10">
            <Button
              onClick={() => toggleSection("education")}
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </Button>
            <Button
              onClick={() => toggleSection("experience")}
              className={activeSection === "experience" ? "active" : ""}
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
