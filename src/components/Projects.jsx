import React from "react";
import "./Projects.scss";
import { Typography } from "@mui/material";

const projects = [
  {
    title: "Threaded",
    image: "Threaded.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Project1",
    image: "project1.png",
    description: "On hover, brief description will show",
    technologies: ["React", "Redux", "Sass"],
  },
];

const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='project-bar'>
        <div className='project-bar-text'>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            Projects
          </Typography>
          <br />
          <Typography variant='subtitle1'>Sort by skill:</Typography>
          <div className='sort-buttons'>
            {[
              "All",
              "React",
              "Redux",
              "Sass",
              "Material UI",
              "Node",
              "MongoDB",
            ].map((tech, index) => (
              <button key={index} className='sort-button'>
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='project-list'>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className='project-image'
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='technologies'>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='tech-item'>
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
