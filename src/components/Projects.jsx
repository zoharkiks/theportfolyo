import Link from "next/link";
import React from "react";

const Projects = () => {

    const slug = "project-1";
  return (
    <section>
      <div className="container">
        <h2>What I've Built</h2>

        <Link href={`/project/${slug}`}>
          <div className="w-full h-[480px] bg-accent rounded-xl mt-10"></div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
