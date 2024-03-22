import { formatDateRange } from "@/utils";
import React from "react";

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

  console.log(experienceData);

  return (
    <div className="">
      <h3 className="mb-4 font-medium border-b w-max border-accent">Experience</h3>

      {experienceData?.map((item) => (
        <div key={item._id} className="">
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
