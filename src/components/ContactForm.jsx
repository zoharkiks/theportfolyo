"use client";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle form submission, e.g., via an API.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 ">
      <h3 className="mt-10 ">
        I'am
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name Surname"
          required
          className="ml-2 border-b w-max bg-background focus:outline-none focus:shadow-outline"
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
    </form>
  );
};

export default ContactForm;
