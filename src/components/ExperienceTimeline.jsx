import { formatDateRange } from "@/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";
import React, { useRef } from "react";

const EducationTimeline = ({ experienceData }) => {
  const {
    company_name,
    summary,
    sequence,
    startDate,
    endDate,
    jobTitle,
    jobLocation,
    bulletPoints,
  } = experienceData;

  let root = useRef();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  
  useGSAP(() => {
    

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-experience",
        start: "top 80%",
        end: "bottom 20%", // Adjust end position as needed
      },
    });

    tl.from('.experience', {
      yPercent: 100,
      stagger: .2,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    })
   
    
  },{ scope: root }) 
  return (
    <div ref={root} className="">
      <h3 className="mb-4 font-medium border-b w-max border-accent trigger-experience">Experience</h3>

      {experienceData?.map((item) => (
        <div key={item._id} className="experience">
          <div className="flex items-center justify-between">
            <div className="flex flex-col mt-4 grow">
              <h4 className="">{item?.jobTitle}</h4>
              <span className="font-light text-accent">{item?.company_name}</span>
              <p className="mt-2 max-w-[90%]">{item?.summary}</p>

            </div>

            <div className="flex flex-col">
              <span className="font-light">
                {formatDateRange(item?.startDate, item?.endDate)}
              </span>
              <span className="font-light text-right">{item?.jobLocation}</span>
            </div>
          </div>
          <div className="mt-4 border border-b opacity-20 "></div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
