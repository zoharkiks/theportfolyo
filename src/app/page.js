import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
     <Hero/>
     <Services/>
     <Skills/>
     <Projects/>
    </main>
  );
}
