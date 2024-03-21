import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="bg-background rounded-3xl h-[233px] "></div>

      <h4 className="font-medium">UI/UX Solution</h4>
      <p className="text-base font-medium">
        Design direction for business. Get your business on the next level. We
        help to create great experiences.
      </p>
      <span className="font-medium">$399</span>
    </div>
  );
};

export default ServiceCard;
