import React from "react";
import { Typography } from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className='intro'>
      <div className='intro-bar'>
        <div className='intro-bar-text'>
          <Typography variant='h5' sx={{ fontWeight: "bold" }}>
            Pleasure to meet you.
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            I am a Front-end Engineer with 5 years of React and UX/UI design
            experience. Demonstrated success in both modernizing existing
            solutions and leading new projects as the primary front-end
            developer. Leveraging my front-end expertise and recent full-stack
            learning, I am eager to continue delivering user experiences that
            exceed expectations.
          </Typography>
        </div>
      </div>

      <div className='intro-cards'>
        <div className='intro-card'>
          <CodeIcon sx={{ fontSize: 60, color: "#CE7B65" }} />
          <br />
          <Typography variant='h5'>Frontend Developer</Typography>
          <br />
          <Typography variant='subtitle1'>
            I love building responsive web applications. My experience ranges
            from leading new projects to modernizing existing solutions.
          </Typography>
          <br />
          <Typography
            variant='subtitle1'
            sx={{ color: "#CE7B65", fontWeight: "bold" }}
          >
            Technologies I Use:
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Redux</li>
              <li>Sass</li>
              <li>Material UI</li>
              <li>Angular (Some)</li>
            </ul>
          </Typography>
          <br />
          <Typography
            variant='subtitle1'
            sx={{ color: "#CE7B65", fontWeight: "bold" }}
          >
            Dev tools:
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Openshift</li>
            </ul>
          </Typography>
        </div>
        <div className='intro-card'>
          <DesignServicesIcon sx={{ fontSize: 60, color: "#CE7B65" }} />
          <br />
          <Typography variant='h5'>Designer</Typography>
          <br />
          <Typography variant='subtitle1'>
            I am a minimalist with an eye for the details. I believe clear
            communication and iteration are the key to delivering successful
            user experiences.
          </Typography>
          <br />
          <Typography
            variant='subtitle1'
            sx={{ color: "#CE7B65", fontWeight: "bold" }}
          >
            I enjoy designing:
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            <ul>
              <li>UX Flows</li>
              <li>UI Design (Wireframes/Prototypes)</li>
              <li>Icons</li>
            </ul>
          </Typography>
          <br />
          <Typography
            variant='subtitle1'
            sx={{ color: "#CE7B65", fontWeight: "bold" }}
          >
            Tools:
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            <ul>
              <li>Figma</li>
              <li>Invision Studio</li>
              <li>Adobe Illustrator</li>
            </ul>
          </Typography>
        </div>
        <div className='intro-card'>
          <SelfImprovementIcon sx={{ fontSize: 60, color: "#CE7B65" }} />
          <br />
          <Typography variant='h5'>Hobbyist</Typography>
          <br />
          <Typography variant='subtitle1'>
            Outside of work, most of my hobbies involve designing and building
            physical things rather than digital.
          </Typography>
          <br />
          <Typography
            variant='subtitle1'
            sx={{ color: "#CE7B65", fontWeight: "bold" }}
          >
            Things I enjoy:
          </Typography>
          <br />
          <Typography variant='subtitle1'>
            <ul>
              <li>3D Printing/Modeling</li>
              <li>Woodworking</li>
              <li>Leathercrafting</li>
              <li>Fireworks</li>
              <li>Skiing</li>
              <li>Hiking</li>
              <li>Boating</li>
            </ul>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Intro;
