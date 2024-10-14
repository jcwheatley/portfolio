import React from "react";
import "./Projects.scss";
import { Button, Typography } from "@mui/material";

const projects = [
  {
    title: "TL Manager (In Progress)",
    image: require("../images/TL-manager.png"),
    description:
      "A new web app to help employees log their work, pass off training checklist items, schedule work hours, and much more! ",
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
    title: "TL Scheduler",
    image: require("../images/TL-scheduler.png"),
    description: "A web app to help employees schedule their work hours.",
    technologies: [
      "React",
      "UX/UI Design",
      "Firebase",
      "Material UI",
      "Invision Studio",
    ],
  },
  {
    title: "Threaded Leather ",
    image: require("../images/TL-home.png"),
    description: "My side business for the last 9 years.",
    technologies: ["UX/UI Design", "Management", "Small Business"],
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
