import Image from "next/image";
import React, { useEffect, useState } from "react";

import { extractColors } from "extract-colors";
import { generateRandomGradient } from "@/utils";
import { Github, LucideGlobe } from "lucide-react";

const ProjectCard = ({
  img,
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
}) => {
  const [colors, setColors] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  const [gradientStyles, setGradientStyles] = useState();


  useEffect(() => {
    const options = {
      crossOrigin: "Anonymous",

      pixels: 64000,
      distance: 0.22,
    };

    extractColors(img, options)
      .then((colors) => {
        setColors(colors);
        setGradientStyles(generateRandomGradient(colors));
      })
      .catch(console.error);

    return () => {};
  }, [img]);

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

        <div className="flex gap-4 ">
          {techStack?.map((tech) => (
            <span className="px-2 py-1 font-medium rounded-2xl bg-primary text-background">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
