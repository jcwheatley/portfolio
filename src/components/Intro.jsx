import React from "react";
import { Typography } from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TerminalIcon from "@mui/icons-material/Terminal";
import "./Intro.scss";

const Intro = () => {
  return (
    <section id='skills' className='intro'>
      <div className='intro-bar'>
        <div className='intro-bar-text'>
          <Typography variant='h4' sx={{ fontWeight: "bold" }}>
            Pleasure to meet you.
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            I am a Front-end Engineer with 5 years of experience in React and
            UX/UI design, leading projects and modernizing digital solutions. I
            deliver intuitive, user-focused experiences and am developing
            full-stack proficiency.
          </Typography>
        </div>
      </div>
      <div className='background-overlay'></div> {/* Overlay for readability */}
      <div className='intro-cards'>
        <div className='intro-card'>
          <div className='icon-holder'>
            <TerminalIcon sx={{ fontSize: 60, color: "#CE7B65" }} />
            <br />
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>
              Front-end Developer
            </Typography>
          </div>
          <div className='card-bullets'>
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Skills
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Redux</li>
                <li>Sass</li>
                <li>Material UI</li>
                <li>Angular (some)</li>
                <li>Typescript (some)</li>
              </ul>
            </Typography>
            <br />
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Tools
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Openshift</li>
                <li>VS Code</li>
              </ul>
            </Typography>
          </div>
        </div>

        <div className='intro-card'>
          <div className='icon-holder'>
            <DesignServicesIcon sx={{ fontSize: 60, color: "#CE7B65" }} />
            <br />
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>
              UX/UI Designer
            </Typography>
          </div>
          <div className='card-bullets'>
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Skills
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                <li>UX Flows</li>
                <li>Interface Design</li>
                <li>Wireframing/Prototyping</li>
                <li>Collaborative UX Sessions</li>
                <li>Icon Design</li>
              </ul>
            </Typography>
            <br />
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Tools
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                <li>Figma</li>
                <li>Invision Studio</li>
                <li>Adobe Illustrator</li>
              </ul>
            </Typography>
          </div>
        </div>

        <div className='intro-card'>
          <div className='icon-holder'>
            <SelfImprovementIcon sx={{ fontSize: 60, color: "#CE7B65" }} />
            <br />
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>
              Leader
            </Typography>
          </div>
          <div className='card-bullets'>
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Project Ownership
            </Typography>
            <Typography variant='subtitle1'>
              <ul>Own projects from inception to delivery.</ul>
            </Typography>
            <br />
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Code Reviews
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                Lead code reviews to maintain code quality and best practices.
              </ul>
            </Typography>
            <br />
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              UX Advocacy
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                Advocate for user-centric design through UX sessions with
                stakeholders.
              </ul>
            </Typography>
            <br />
            <Typography
              variant='subtitle1'
              sx={{ color: "#CE7B65", fontWeight: "bold" }}
            >
              Task Prioritizing
            </Typography>
            <Typography variant='subtitle1'>
              <ul>
                Prioritize tasks to deliver the most impactful features first.
              </ul>
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
