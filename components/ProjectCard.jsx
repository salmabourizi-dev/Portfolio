import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }) => {
  const [inProgress, setInProgress] = useState(false); // Define inProgress state here

  useEffect(() => {
    // Check if project is defined and its name matches "E-commerce website" or "Dashboard"
    if (
      project &&
      (project.name === "E-commerce website" || project.name === "Dashboard")
    ) {
      setInProgress(false);
    }
  }, [project]);

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[190px] xl:h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:work_project_bg_dark xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={300}
            height={250}
            alt=""
            priority
          />
          {/* BTN links */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        {inProgress && (
          <span className="bg-yellow-500 text-white font-semibold px-2 py-1 rounded-full text-xs absolute top-2 right-5">
            In Progress
          </span>
        )}
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
