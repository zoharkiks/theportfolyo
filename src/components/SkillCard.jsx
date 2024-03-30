import Image from "next/image";
import React from "react";

const SkillCard = ({ skill }) => {
  console.log(skill);

  const { name, image, percentage } = skill;
  return (
    <div className="p-6 rounded-2xl bg-card-dark group">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-around ">
          <h4 className="font-medium">{name}</h4>
          <div className="p-4 rounded-full size-16 bg-primary">
            <Image
              className="object-cover w-full h-full transition-transform duration-[150ms] group-hover:rotate-12"
              alt={name}
              src={image.url}
              height={1024}
              width={1024}
            />
          </div>
        </div>

<div className="flex items-center gap-4">
<div className="relative w-full rounded-full bg-primary">
          <div
            style={{ width: `${percentage}%` }}
            className={`h-2 rounded-full  bg-accent`}
          ></div>
        </div>
  <span>{percentage}%</span>
</div>
       
      </div>
    </div>
  );
};

export default SkillCard;
