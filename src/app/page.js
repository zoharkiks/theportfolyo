import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="py-10">
     <Hero/>
     <Services/>
     <Skills/>
     <Projects/>
     <Testimonials/>
     <Contact/>
    </main>
  );
}
