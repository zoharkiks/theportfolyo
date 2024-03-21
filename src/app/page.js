import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
     <Hero/>
     <Services/>
    </main>
  );
}
