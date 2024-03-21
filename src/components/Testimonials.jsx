import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section>
      <div className="container bg-primary text-background rounded-[var(--radius-l)] p-10">
        <div className="flex flex-col items-center mt-10 ">
          <div className="flex *:font-medium ">
            <h3>
              What <span className="italic">people </span> say
            </h3>
          </div>

          <p className="mt-4 text-center">
            Discover the experiences that shape my story. Straight from those
            who inspire my best work
          </p>

        
        
        </div>

        <div className="grid gap-4 mx-10 mt-10 md:mx-0 ">
          <TestimonialCard />
          {/* <TestimonialCard />
          <TestimonialCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
