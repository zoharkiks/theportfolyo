import { formatDateRange } from "@/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";
import React, { useRef } from "react";

/**
 * Component to display the user's education timeline
 */
const EducationTimeline = ({ educationData }) => {
  // Create a reference to the root element for gsap to target
  let root = useRef();

  // Register the plugins with gsap
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Use the useGSAP hook to create a timeline that triggers on scroll
  useGSAP(
    () => {
      /**
       * Timeline for the education section
       */
      const tl = gsap.timeline({
        /**
         * Use ScrollTrigger to trigger the animation when the education section
         * enters the viewport.
         */
        scrollTrigger: {
          trigger: ".trigger-education",
          start: "top 80%",
          end: "bottom 20%",
        },
      });

      tl.from(".education", {
        yPercent: 100,

        stagger: 0.2,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="">
      <h3 className="mb-4 font-medium border-b w-max border-accent trigger-education">
        Education
      </h3>

      {/* Map over the education data and display it */}
      {educationData?.map((item) => (
        <div key={item._id} className="education">
          <div className="flex items-center justify-between">
            <div className="flex flex-col mt-4 grow">
              <h4 className="">{item?.jobTitle}</h4>
              <span className="font-light text-accent">
                {item?.company_name}
              </span>
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
