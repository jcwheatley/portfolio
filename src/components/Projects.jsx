import React from "react";
import "./Projects.scss";
import { Button, Typography } from "@mui/material";

const projects = [
  {
    title: "Sample Title",
    image: require("../images/app-placeholder.png"),
    description:
      "A new project messing around with some technologies that I'm interested in.",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "Redux",
      "Sass",
      "UX/UI Design",
      "Figma",
    ],
  },
  {
    title: "Sample Title",
    image: require("../images/app-placeholder.png"),
    description:
      "A new project messing around with some technologies that I'm interested in.",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "Redux",
      "Sass",
      "UX/UI Design",
      "Figma",
    ],
  },
  {
    title: "Sample Title",
    image: require("../images/app-placeholder.png"),
    description:
      "A new project messing around with some technologies that I'm interested in.",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "Redux",
      "Sass",
      "UX/UI Design",
      "Figma",
    ],
  },
  // {
  //   title: "Project1",
  //   image: "project1.png",
  //   description: "On hover, brief description will show",
  //   technologies: ["React", "Redux", "Sass"],
  // },
  // {
  //   title: "Project1",
  //   image: "project1.png",
  //   description: "On hover, brief description will show",
  //   technologies: ["React", "Redux", "Sass"],
  // },
  // {
  //   title: "Project1",
  //   image: "project1.png",
  //   description: "On hover, brief description will show",
  //   technologies: ["React", "Redux", "Sass"],
  // },
  // {
  //   title: "Project1",
  //   image: "project1.png",
  //   description: "On hover, brief description will show",
  //   technologies: ["React", "Redux", "Sass"],
  // },
  // {
  //   title: "Project1",
  //   image: "project1.png",
  //   description: "On hover, brief description will show",
  //   technologies: ["React", "Redux", "Sass"],
  // },
  // {
  //   title: "Project1",
  //   image: "project1.png",
  //   description: "On hover, brief description will show",
  //   technologies: ["React", "Redux", "Sass"],
  // },
];

const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='project-bar'>
        <div className='project-bar-text'>
          <Typography variant='h4' sx={{ fontWeight: "bold" }}>
            Projects
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            Some interesting things I've been working on in my free time.
          </Typography>
          {/* <br /> */}
        </div>
      </div>

      <div className='project-list'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <img
              src={project.image}
              alt={project.title}
              className='project-image'
            />
            <div className='project-overlay'>
              <p>{project.description}</p>
            </div>
            <Typography variant='h6' className='project-title'>
              {project.title}
            </Typography>
            <div className='technologies'>
              {project.technologies.map((tech, techIndex) => (
                <span className='tech-item' key={techIndex}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

{
  /* <div className='sort-buttons'>
            <Typography variant='subtitle1'>Sort by:</Typography>
            {[
              "All",
              "React",
              "Node",
              "MongoDB",
              "Express",
              "Redux",
              "Sass",
              "Material UI",
              "Angular",
              "Typescript",
              "Figma",
              "Invision",
              "Wireframing/Prototyping",
              "UX/UI Design",
            ].map((tech, index) => (
              <Button
                variant='contained'
                key={index}
                className='sort-button'
                sx={{ backgroundColor: "#E0E7E9", color: "#000" }}
              >
                {tech}
              </Button>
            ))}
          </div> */
}
