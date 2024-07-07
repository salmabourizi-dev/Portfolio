"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
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
    description: "Developed ",
    link: "/",
    github: "/",
  },

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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore my recent creations, crafted with innovation and precision.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
