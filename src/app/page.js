"use client";
import React, { useState, useEffect } from "react";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Loader from "@/components/Loader";

/**
 * Home page component
 *
 * Fetches data from the API and renders the different sections of the page.
 *
 * @returns {React.Component} The rendered Home component.
 */
export default function Home() {
  // State to hold the data fetched from the API
  const [data, setData] = useState(null);
  // State to hold a loading indicator
  const [loading, setLoading] = useState(true);
  // State to hold errors
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Fetch data from the API
     *
     * Async function to fetch data from the API endpoint.
     * If the response is not ok, set the error state.
     * Otherwise, set the data state and disable the loading indicator.
     */
    async function fetchData() {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.user);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <main className="">
      {/* <Loader loading={loading} /> */}

      {/* If the data is not loading, render the sections of the page */}
      {!loading && (
        <>
          {/* Render the Hero section */}
          <Hero about={data?.about} />
          {/* Render the Services section */}
          <Services
            services={data?.services.filter((service) => service.enabled)}
          />
          {/* Render the Skills section */}
          <Skills skills={data?.skills.filter((skill) => skill.enabled)} />
          {/* Render the Projects section */}
          <Projects
            projects={data?.projects.filter((project) => project.enabled)}
          />
          {/* Render the Timeline section */}
          <Timeline
            timeline={data?.timeline.filter((timeline) => timeline.enabled)}
          />
          {/* Render the Testimonials section */}
          <Testimonials
            testimonials={data?.testimonials.filter(
              (testimonial) => testimonial.enabled
            )}
          />
          {/* Render the Contact section */}
          <Contact
            socialHandles={data?.social_handles.filter(
              (social_handle) => social_handle.enabled
            )}
            email={data?.email}
            address={data?.about?.address}
            phoneNumber={data?.about?.phoneNumber}
          />
        </>
      )}
    </main>
  );
}
