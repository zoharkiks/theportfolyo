"use client";
import React, { useRef } from "react";
import { Button } from "./Button";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Some form submit action");
  };

  let root = useRef();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
     

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-form",
          start: "top 80%",
          markers: true,
          end: "bottom 20%", // Adjust end position as needed
        },
      });

      tl.from('.form-input', {
        yPercent:20,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
      });
    },
    { scope: root }
  );
  return (
    <div ref={root} className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 trigger-form form-input"
      >
        <h3 className="mt-10 ">
          I'am
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name Surname"
            required
            className="ml-2 border-b w-max bg-background focus:outline-none focus:shadow-outline "
          />
          . My Email Is &nbsp;
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@domain.com"
            required
            className="my-4 border-b bg-background focus:outline-none focus:shadow-outline"
          />{" "}
          and my phone number is
          <input
            type="text"
            id="number"
            name="number"
            placeholder="123-456-7890"
            required
            className="my-4 border-b bg-background focus:outline-none focus:shadow-outline "
          />
          . Here is my message
        </h3>

        <textarea
          id="message"
          name="message"
          rows="10"
          cols="50"
          className="border rounded-lg bg-background focus:outline-none focus:shadow-outline"
        ></textarea>

        <Button className="w-max" onClick={handleSubmit} type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
