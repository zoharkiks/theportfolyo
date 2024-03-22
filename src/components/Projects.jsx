import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

const Projects = ({ projects }) => {
  const itemsPerPage = 5; // Number of projects per page
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null); // Reference to the section element

  const maxPage = Math.ceil(projects?.length / itemsPerPage);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Pagination
  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    sectionRef.current.scrollIntoView({ behavior: "smooth" });

  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = projects?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section ref={sectionRef}>
      <div className="container">
        <h2>What I've Built</h2>
        <div className="grid gap-5 p-6 md:grid-cols-2">
          {selectedProjects
            ?.filter((project) => project.enabled)
            .map((project) => (
              <Link
                key={project._id}
                href={`/project/${generateSlug(project.title)}`}
              >
                <div className="w-full h-[380px] rounded-xl mt-10">
                  <Image
                    src={project.image.url}
                    className="object-cover h-full rounded-xl"
                    alt={project.title}
                    width={1024}
                    height={2024}
                  />
                </div>
              </Link>
            ))}
        </div>
        <div className="flex items-center justify-center w-full gap-10 ">
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </Button>
          <span className="text-xl">
            Page {currentPage} of {maxPage}
          </span>
          <Button onClick={nextPage} disabled={currentPage === maxPage}>
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
