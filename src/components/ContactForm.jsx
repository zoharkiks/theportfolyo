"use client";
import React, { useRef } from "react";
import { Button } from "./Button";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const ContactForm = () => {
  /**
   * Event handler for the form's submit event
   *
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Some form submit action");
  };

  let root = useRef();
  // GSAP plugins to use: useGSAP and ScrollTrigger
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  /**
   * useGSAP timeline for the form
   *
   * Animates the form's inputs when scrolled into view
   *
   * @param {gsap.core.Timeline} timeline The timeline to animate
   */
  useGSAP(
    (timeline) => {
      // ScrollTrigger setup
      const tl = gsap.timeline({
        // Set the form as the trigger
        scrollTrigger: {
          trigger: ".trigger-form",
          start: "top 80%",
          end: "bottom 20%",
        },
      });
      tl.fromTo(
        ".form-input",
        {
          yPercent: 20,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        }
      );
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
            className="ml-2 border-b w-max bg-background focus:outline-none focus:shadow-outline text-accent placeholder:text-accent "
          />
          . My Email Is &nbsp;
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@domain.com"
            required
            className="my-4 border-b bg-background focus:outline-none focus:shadow-outline text-accent placeholder:text-accent"
          />{" "}
          and my phone number is
          <input
            type="text"
            id="number"
            name="number"
            placeholder="123-456-7890"
            required
            className="my-4 border-b bg-background focus:outline-none focus:shadow-outline text-accent placeholder:text-accent"
          />
          . Here is my message
        </h3>

        <textarea
          id="message"
          name="message"
          rows="10"
          cols="50"
          className="border rounded-lg bg-background focus:outline-none focus:shadow-outline "
        ></textarea>

        <Button className="w-max" onClick={handleSubmit} type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
