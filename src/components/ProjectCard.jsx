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
    <div className=" h-[600px] text-background [perspective:1000px]  ">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative w-full h-full  [transform-style:preserve-3d] transition-transform duration-[1s]  cursor-pointer ${
          isFlipped ? "[transform:rotateY(-180deg)]" : ""
        } `}
      >
        <div className=" card-front card-face">
          <Image
            src={img}
            className="object-cover object-left w-full h-full rounded-2xl md:object-center "
            alt={title}
            width={1024}
            height={2024}
          />
        </div>

        <div
          style={gradientStyles}
          className="card-back card-face [transform:rotateY(180deg)] p-6 relative "
        >
          <div className="absolute top-0 right-0 w-full  opacity-60 rounded-2xl bg-background -z-[7]"></div>
          <div className="flex flex-col gap-4 text-primary">
            <p className="">{description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-primary text-background">
                <span className="font-medium">Tech Stack Used</span>
                <div className="flex flex-col">
                  {techStack.map((tech, index) => (
                    <span key={index}>&#8226; {tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 p-4 rounded-lg bg-primary text-background">
                <span className="font-medium">Project Links</span>

                <div className="flex flex-col gap-2 ">
                  <a
                    className="flex items-center gap-2"
                    target="_blank"
                    href={liveUrl}
                  >
                    <LucideGlobe
                      size={20}
                      className="transition-colors hover:text-accent duration-[150ms] ease-in-expo "
                    />
                    <span>Live Link</span>
                  </a>
                  <a className="flex items-center gap-2" href={githubUrl}>
                    <Github
                      size={20}
                      className="transition-colors hover:text-accent duration-[150ms] ease-in-expo "
                    />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
