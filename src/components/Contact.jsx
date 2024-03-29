import React from "react";
import ContactForm from "./ContactForm";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = ({ email, address, phoneNumber,socialHandles }) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="flex flex-col w-full uppercase">
          <h2 className="">Let's work&nbsp; </h2>
          <h2 className=" md:ml-40">together</h2>
        </div>

        <ContactForm />

        <div className="w-full mt-10 border border-accent"></div>

        <div className="flex flex-col gap-6 mt-10 uppercase md:w-1/2 ">
          <p>
            I'am OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND I'll START A
            PRODUCTIVE COOPERATION.
          </p>

          <div className="flex flex-col">
            <p>
              Call Me :{" "}
              <a href={`tel:${phoneNumber}`} className="">
                {phoneNumber}
              </a>{" "}
            </p>
            <p>
              Say Hi :{" "}
              <a href={`mailto:${email}`} className="">
                {email}
              </a>{" "}
            </p>

            <p>
              Address :{" "}
              <a href="" className="">
                {address}
              </a>{" "}
            </p>
          </div>

          <div className="flex gap-6 *:transition-colors *:duration-[100ms] *:ease-in-expo ">
            
            {socialHandles.map((socialHandle) => (
               <a key={socialHandle._id} className="hover:text-accent" target="_blank" href={socialHandle.url}>
               <span className="font-medium lowercase">{socialHandle.platform}</span>
             </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
