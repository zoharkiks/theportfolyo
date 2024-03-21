import React from "react";
import { Button } from "./Button";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <h2>What I Can Help You With</h2>
        <div className="flex flex-col mt-10 items-center bg-primary text-background rounded-[var(--radius-l)] px-10 py-14">
          <Button intent={"secondary"}>Services</Button>
          <div className="flex flex-col items-center mt-4 *:font-medium">
            <h3 className="">Your Design Wishlist:</h3>
            <h3 className="">
              {" "}
              <span className="italic">checked </span>
              off!
            </h3>
          </div>
          <p className="mt-4 text-center">
            Your brand's journey to the top starts with bold design choices that
            leave a lasting impression. From striking logos to compelling
            branding and interactive websites, we turn your vision into a visual
            language that speaks volumes. Design is your statement—let's make it
            unforgettable.
          </p>

          <div className="grid w-full gap-8 mt-6 md:grid-cols-3">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
