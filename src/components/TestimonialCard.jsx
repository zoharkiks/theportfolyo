import Image from "next/image";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, review, position, image } = testimonial;

  return (
    <div className="w-full  bg-background text-primary rounded-[var(--radius-l)] px-6 pb-20 pt-6 md:px-10 md:pt-16 md:pb-24 h-full  ">
      <div className="flex gap-4">
        <div className="rounded-full bg-accent size-14 ">
          <Image src={image.url} alt={name} width={1024} height={1024}/>
        </div>
        <div className="flex flex-col ">
          <span className="text-lg font-medium ">{name}</span>
          <span className="">{position}</span>
        </div>
      </div>
      <p className="mt-6">"{review}"</p>
    </div>
  );
};

export default TestimonialCard;
