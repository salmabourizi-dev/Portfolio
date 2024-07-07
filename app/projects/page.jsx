"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/portfolio-project.PNG",
    category: "NextJS",
    name: "Portfolio",
    description:
      "Creating a portfolio using Next.js, driving enhanced visibility and performance.",
    link: " ",
    // link: "https://feizhoucom.com",
    github: " ",
    // github: "https://github.com/ilyasfarkhane-dev/feiz",
  },
  {
    image: "/work/site-e-com.jpg",
    category: "MERN",
    name: "E-commerce website",
    description:
      "Engineered an e-commerce platform with the MERN stack, integrating robust functionality and seamless user experience.",
    // link: "https://vintique.vercel.app",
    // github: "https://github.com/ilyasfarkhane-dev/Vintique",
    link: " ",
    github: " ",
  },
  {
    image: "/work/monblogapp.PNG",
    category: "MERN",
    name: "Blog app Application",
    description:
      "Engineered an Blog app Application with the MERN stack, integrating robust functionality and seamless user experience.",
    // link: "https://vintique.vercel.app",
    // github: "https://github.com/ilyasfarkhane-dev/Vintique",
    link: " ",
    github: " ",
  },
  {
    image: "/work/fade.PNG",
    category: "MERN",
    name: "GSPR Application",
    description:
      "Engineered an Application with the MERN stack,Inventory Management.",
    // link: "https://vintique.vercel.app",
    // github: "https://github.com/ilyasfarkhane-dev/Vintique",
    link: " ",
    github: " ",
  },
  {
    image: "/work/Image1.png",
    category: "Angular/Laravel",
    name: "Application",
    description:
      "Creating Management application for doctoral training programs offering various services.",
    link: " ",
    github: " ",
  },

  {
    image: "/work/blog.png",
    category: "NodeJS",
    name: "Blog App",
    description:
      "Developed ",
    link: "/",
    github: "/",
  },

  // {
  //   image: "/work/fac.jpg",
  //   category: "Javascript",
  //   name: "Invoice App",
  //   description:
  //     "Simplified invoicing app streamlines billing, enhances efficiency, and fosters seamless financial management.",
  //   link: "https://ilyasfarkhane-dev.github.io/devis/",
  //   github: "https://github.com/ilyasfarkhane-dev/devis",
  // },
  // {
  //   image: "/work/quotes.png",
  //   category: "React JS",
  //   name: "Quotes Machine",
  //   description:
  //     "Curated collection of inspirational quotes, a glimpse into wisdom and motivation.",
  //   link: "https://quotmachine.netlify.app/",
  //   github: "https://github.com/ilyasfarkhane-dev/randomquotemachine",
  // },
];

const uniqueCategory = [
  "All Projects",
  ...new Set(projectData.map((item) => item.category)),
];
// console.log(uniqueCategory);

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);

  const [category, setCategory] = useState("All Projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "All Projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className=" w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
