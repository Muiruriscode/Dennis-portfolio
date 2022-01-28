import React from "react";
import SingleProject from "./SingleProject";
import { projectData } from "./data";

const Project = () => {
  return (
    <section id="portfolio" className="padding">
      <h1 className="heading">Projects</h1>
      <h2 className="center">These are some of my projects</h2>
      <div className="grid__3">
        {projectData.map((item, index) => {
          const { name, image, link, description } = item;
          return (
            <SingleProject
              key={index}
              name={name}
              image={image}
              link={link}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
