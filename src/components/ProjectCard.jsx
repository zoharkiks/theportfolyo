import Image from "next/image";


import { Github, LucideGlobe } from "lucide-react";

const ProjectCard = ({
  img,
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
}) => {



  return (
    <div className=" text-primary">
      <div className="flex flex-col gap-10">
        <div className="px-6 py-12 bg-primary group ">
          <Image
            className="drop-shadow-2xl group-hover:scale-95 transition-transform duration-[300ms] "
            src={img}
            alt={title}
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="">{title}</h2>
          <div className="w-full h-[1.25px] bg-primary mt-3"></div>
        </div>

        <p className="font-light text-left">{description}</p>

        <div className="flex flex-col gap-4">
          <a
            className="flex items-center gap-4 hover:text-accent"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <LucideGlobe size={28} /> Live Link
          </a>{" "}
          <a
            className="flex items-center gap-4 hover:text-accent"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={28} /> GitHub Repo
          </a>
        </div>

        <div className="flex gap-4 ">
          {techStack?.map((tech,index) => (
            <span  key={index} className="px-2 py-1 font-medium rounded-2xl bg-primary text-background">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
