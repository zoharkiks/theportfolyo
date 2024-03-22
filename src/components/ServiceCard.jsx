import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { name, charge, desc, image } = service;

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="bg-background rounded-3xl h-[233px] ">
        <Image className="object-cover h-full rounded-3xl" src={image.url} alt={name}  width={1024}
      height={1024} />
      </div>

      <h4 className="font-medium">{name}</h4>
      <p className="text-base font-medium">{desc}</p>
      <span className="font-medium">{charge}</span>
    </div>
  );
};

export default ServiceCard;
