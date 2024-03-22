"use client";
import React, { useState, useEffect } from "react";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []); // The empty array means this effect runs once on mount


  return (
    <main className="py-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Hero about={data?.about} />
          <Services services={data?.services} />
          <Skills />
          <Projects projects={data?.projects} />
          <Timeline   timeline={data?.timeline}/>
          <Testimonials testimonials={data?.testimonials} />
          <Contact email={data?.email} address={data?.about?.address} phoneNumber={data?.about?.phoneNumber} />
        </>
      )}
    </main>
  );
}
