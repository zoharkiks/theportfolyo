import React from "react";

const TestimonialCard = () => {
  return (
    <div className="w-full  bg-background text-primary rounded-[var(--radius-l)] px-6 pb-20 pt-6 md:px-10 md:pt-16 md:pb-24 ">
      <div className="flex gap-4">
        <div className="rounded-full bg-accent size-14 "></div>
        <div className="flex flex-col ">
          <span className="text-lg font-medium ">Phill Car</span>
          <span className="">CEO @Blah Blah</span>
        </div>
      </div>
      <p className="mt-6">"Working with Wegrow has been a game-changer. They have an uncanny ability to capture the essence of our brand and express it visually. Our branding has evolved to something we—and our customers—adore, all thanks to their strategic and creative design prowess. Wegrow isn't just about designs; they're essential to making our ideas a reality."</p>
    </div>
  );
};

export default TestimonialCard;
