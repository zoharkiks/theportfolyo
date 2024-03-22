import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col w-full uppercase">
          <h2 className="">Let's work&nbsp; </h2>
          <h2 className=" md:ml-40">together</h2>
        </div>

        <ContactForm />

        <div className="flex flex-col gap-6 mt-10 uppercase md:w-1/2">
          <p>
            I'am OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND I'll START A
            PRODUCTIVE COOPERATION.
          </p>

          <div className="flex flex-col">
            <p>
              Call Me :{" "}
              <a href="tel:+91-9212321321" className="">
                +91-9212321321
              </a>{" "}
            </p>
            <p>
              Say Hi :{" "}
              <a href="mailto:portfolio3@gmail.com" className="">
                portfolio3@gmail.com
              </a>{" "}
            </p>

            <p>
              Address :{" "}
              <a href="" className="">
                Los Angeles , America
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
