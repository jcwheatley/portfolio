import React, { useState } from "react";
import "./Experience.scss";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='company-info'>
          <span className='company-name'>{experience.company}</span>
          <span> × </span>
          <img
            src={`/${experience.clientLogo.toLowerCase()}-logo.png`}
            alt={experience.client}
            className='client-logo'
          />
        </div>

        <h2 className='job-title'>{experience.title}</h2>

        <button className='toggle-button' onClick={toggleExpand}>
          {isExpanded ? "−" : "+"}
        </button>
      </div>

      {isExpanded && (
        <div className='card-content'>
          <div className='section'>
            <h3>MY CONTRIBUTION</h3>
            <p>{experience.contribution}</p>
          </div>

          <div className='section'>
            <h3>TECH & TOOLS</h3>
            <div className='tech-tags'>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='tech-tag'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceList = ({ experiences }) => {
  return (
    <div className='experience-list'>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </div>
  );
};

export default ExperienceList;
