import React from "react";
import { Button, Typography } from "@mui/material";
import "./Projects.scss";

const projects = [
  {
    title: "HOIST",
    image: require("../images/app-placeholder.png"),
    description:
      "Hoist is a full-featured workout tracker I built as a personal project to explore some new technologies and stretch myself a bit. It was a fun shift from my usual work — instead of just displaying data and charts, this app focuses on real human interaction and user experience. I experimented with OpenAI's API to generate personalized AI workout plans, and used tools like Vercel, Tailwind CSS, Figma, and Google Auth to bring everything together. It includes route protection, plan scheduling, and a clean, mobile-first interface. This was a great change of pace that let me dive into Human-AI interaction and modern fitness workflows. \n\n View the live app below and let me know what you think! *Best viewed on mobile",
    technologies: [
      "React",
      "Vite",
      "Firebase",
      "Tailwind CSS",
      "OpenAI API",
      "Google Auth",
      "Figma",
      "Mobile-First Design",
      "UX/UI Design",
    ],
    live: "https://hoist-bay.vercel.app/",
    code: "https://github.com/jcwheatley/hoist",
  },
];

export default function Projects() {
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
        </div>
      </div>

      <div className='project-list'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='image-wrapper'>
              <img
                src={project.image}
                alt={project.title}
                className='project-image'
              />
              {/* Remove project-overlay if not needed */}
            </div>

            <Typography variant='h6' className='project-title'>
              {project.title}
            </Typography>

            {/* Make description always visible */}
            {project.description.split("\n\n").map((paragraph, i) => (
              <p className='project-description' key={i}>
                {paragraph}
              </p>
            ))}

            <div className='technologies'>
              {project.technologies.map((tech, i) => (
                <span className='tech-item' key={i}>
                  {tech}
                </span>
              ))}
            </div>

            {(project.live || project.code) && (
              <div className='project-buttons'>
                {project.code && (
                  <Button
                    size='large'
                    variant='outlined'
                    color='primary'
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub Repo
                  </Button>
                )}
                {project.live && (
                  <Button
                    size='large'
                    variant='contained'
                    color='primary'
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Live
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
