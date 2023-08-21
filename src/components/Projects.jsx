import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";
import projectData from "../Data/projectData";

const Projects = () => {
  return (
    <div className="py-12 h-screen">
      <div className="flex flex-row gap-2 items-center justify-center mb-8">
        <Link
          to="/"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          About Me
        </Link>
        <Link
          to="/about"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          Contact
        </Link>
      </div>
      <SectionTitle id="projects" className="uppercase">Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectData.map((project) => (
          <ProjectItem
            key={project.title}
            id={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            link={project.link}
          ></ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default Projects;
