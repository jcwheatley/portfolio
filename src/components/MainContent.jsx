import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='landing'>
          <Typography variant='h4' gutterBottom>
            Frontend Developer, Designer, and Hobbyist
          </Typography>
          <Typography variant='subtitle1'>
            I create visually appealing solutions that are as functional as they
            are user-friendly.
          </Typography>
          <img
            className='portrait'
            src={require("../images/portfolio-portrait.png")}
            alt='This is James'
          />
          <br />
          <Button
            variant='contained'
            endIcon={<ArrowDownwardIcon />}
            color='lightBlue'
          >
            View Experience
          </Button>
        </div>
        <div className='background'></div> {/* Background div */}
      </div>
      <div className='experience-transition'>
        <Typography variant='h5'>Pleasure to meet you.</Typography>
        <br />
        <Typography variant='subtitle1'>
          I am a Front-end Engineer with 5 years of React and UX/UI design
          experience. Demonstrated success in both modernizing existing
          solutions and leading new projects as the primary front-end developer.
          Leveraging my front-end expertise and recent full-stack learning, I am
          eager to continue delivering user experiences that exceed
          expectations.
        </Typography>
      </div>
    </>
  );
};

export default MainContent;
