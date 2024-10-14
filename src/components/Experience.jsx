import React, { useState } from "react";
import "./Experience.scss";
import { Typography } from "@mui/material";

// Import logos
import RaytheonLogo from "../images/raytheon.png";
import DarpaLogo from "../images/darpa.png";
import DHSLogo from "../images/dhs.png";
import PyramidLogo from "../images/pyramid.png";
import DIALogo from "../images/dia.png";
import resumePDF from "../images/resume.pdf";

const experienceData = [
  {
    company: RaytheonLogo,
    clientLogo: DIALogo,
    client: "Defense Intelligence Agency (DIA)",
    title: "Lead Full Stack Engineer",
    contribution:
      "Developed a full-stack, drag and drop interface that provides users with an intuitive way to search, organize, and analyze important data from dozens of API endpoints.",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Sass",
      "Material UI",
      "InteractJS",
      "UX/UI Design",
      "Invision Studio",
      "Git",
      "Openshift",
    ],
  },
  {
    company: RaytheonLogo,
    clientLogo: DarpaLogo,
    client: "Defense Advanced Research Projects Agency (DARPA)",
    title: "Front-end Engineer",
    contribution:
      "Improved application performance and optimized React components.",
    technologies: [
      "React",
      "Redux",
      "Sass",
      "Material UI",
      "MongoDB",
      "Invision Studio",
      "Git",
    ],
  },
  {
    company: RaytheonLogo,
    clientLogo: DHSLogo,
    client: "Department of Homeland Security (DHS)",
    title: "Front-end Engineer",
    contribution:
      "Worked on front-end modernization using Angular and TypeScript.",
    technologies: [
      "Angular",
      "Typescript",
      "MongoDB",
      "Invision Studio",
      "Git",
    ],
  },
  {
    company: PyramidLogo,
    clientLogo: DHSLogo,
    client: "Department of Homeland Security (DHS)",
    title: "Front-end Engineer, UX/UI Lead",
    contribution:
      "Led UX/UI efforts for a modernization project and implemented features using React.",
    technologies: ["React", "Sass", "MongoDB", "Invision Studio", "Git"],
  },
];

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`experience-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <div className='card-header'>
        <div className='logo-container'>
          <img src={experience.company} alt='Company Logo' className='logo' />
          <span className='separator'>×</span>
          <img
            src={experience.clientLogo}
            alt={experience.client}
            className='logo'
          />
        </div>

        <Typography
          variant='h5'
          className='job-title'
          sx={{ fontWeight: "bold" }}
        >
          {experience.title}
        </Typography>

        <button
          className='toggle-button'
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>

      <div className='card-content'>
        <div className='section'>
          <h5>CLIENT</h5>
          <p>{experience.client}</p>
        </div>

        <div className='section'>
          <h5>MY CONTRIBUTION</h5>
          <p>{experience.contribution}</p>
        </div>

        <div className='section'>
          <h5>TECH & TOOLS</h5>
          <div className='technologies'>
            {experience.technologies.map((tech, index) => (
              <span key={index} className='tech-item'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id='experience' className='experience'>
    <div className='experience-bar'>
      <div className='experience-bar-text'>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>
          Professional Experience
        </Typography>
        <br />
        <Typography variant='subtitle1'>
          With all my work experience being in the defense/public sector, I’m
          unable to show off any of that work. Download my resume{" "}
          <a
            href={resumePDF}
            target='_blank'
            rel='noopener noreferrer'
            download='James_Wheatley_Resume.pdf'
            className='resume-link'
          >
            here
          </a>
          .
        </Typography>
      </div>
    </div>

    <div className='experience-list'>
      {experienceData.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </div>
  </section>
);

export default Experience;
