import React from "react";
import "./Experience.scss";
import { Typography } from "@mui/material";

const experience = [
  {
    company: "Raytheon",
    client: "DIA",
    title: "Lead Full Stack Engineer",
    summary:
      "Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution.",
    technologies: [
      "React",
      "Redux",
      "Sass",
      "Material UI",
      "Redux",
      "MongoDB",
      "Invision Studio",
      "Git",
      "Openshift",
    ],
  },
  {
    company: "Raytheon",
    client: "DARPA",
    title: "Front-end Engineer",
    summary:
      "Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution.",
    technologies: [
      "React",
      "Redux",
      "Sass",
      "Material UI",
      "Redux",
      "MongoDB",
      "Invision Studio",
      "Git",
    ],
  },
  {
    company: "Raytheon",
    client: "DHS",
    title: "Front-end Engineer",
    summary:
      "Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution.",
    technologies: [
      "Angular",
      "Typescript",
      "MongoDB",
      "Invision Studio",
      "Git",
    ],
  },
  {
    company: "Pyramid",
    client: "DHS",
    title: "Front-end Engineer, UX/UI Lead",
    summary:
      "Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution. Quick summary of my contribution.",
    technologies: ["React", "Sass", "MongoDB", "Invision Studio", "Git"],
  },
];

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <div className='experience-bar'>
        <div className='experience-bar-text'>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            Professional Experience
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            With all my work experience being in the defense/public sector, I'm
            unable to show off any of that work. I've included some other fun
            projects I've created in my free time in the next section. Download
            my resume
            <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
              {" "}
              here
            </a>
            .
          </Typography>
        </div>
      </div>

      <div className='experience-list'>
        {experience.map((exp, index) => (
          <div key={index} className='experience-card'>
            <div className='company-logos'>
              <img
                src={require(`../images/${exp.company.toLowerCase()}.png`)}
                alt={exp.company}
              />
              <img
                src={require(`../images/${exp.client.toLowerCase()}.png`)}
                alt={exp.partner}
              />
            </div>
            <h3>{exp.title}</h3>
            <p>{exp.summary}</p>
            <div className='technologies'>
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
            <a href={`/experience/${index}`} className='more-link'>
              More &gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
