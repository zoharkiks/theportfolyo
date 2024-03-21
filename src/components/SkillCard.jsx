import React from "react";

const SkillCard = ({ column }) => {
  return (
    <div
      className={`relative w-full  p-4 bg-primary rounded-xl text-background ${column} `}
    >
      <div className="w-full bg-accent rounded-xl h-[240px]"></div>
      <div className="flex flex-col mt-4">
        <h3 className="text-4xl font-medium" >C++</h3>
      </div>
    </div>
  );
};

export default SkillCard;
