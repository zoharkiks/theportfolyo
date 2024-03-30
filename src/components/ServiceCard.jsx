import Image from "next/image";
import React from "react";
import { Button } from "./Button";

const ServiceCard = ({ service }) => {
  const { name, charge, desc, image } = service;

  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-10 border rounded-xl border-card-primary">
      {/* <div className="">
        <Image
          className="object-cover h-full rounded-3xl"
          src={image.url}
          alt={name}
          width={1024}
          height={1024}
        />
      </div>

      <div className="flex flex-col">
        <h3 className="font-medium">{name}</h3>
        <p className="text-base font-medium">{desc}</p>
        <span className="font-medium"> Starts from {charge}</span>
      </div> */}
      
      <div className="rounded-full size-32 ">
      <Image
          className="object-cover h-full rounded-full"
          src={image.url}
          alt={name}
          width={1024}
          height={1024}
        />
      </div>
      
      <h4 className='' intent={"secondary"}>{name}</h4>

      <span className="text-5xl font-medium text-accent">{charge}</span>

<div className="flex flex-col items-center justify-between w-full  p-6 min-h-[220px] bg-card-dark rounded-xl mt-6">
<p >{desc}</p>
      
      <Button className='bg-primary w-max ' intent={"secondary"}>Get Started</Button>
      
</div>

    </div>
  );
};

export default ServiceCard;
