import { Button, Typography } from "@mui/material";
import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <section id='intro' className='landing'>
        <Typography variant='h4' gutterBottom sx={{ fontWeight: "bold" }}>
          Frontend Developer, Designer, and Hobbyist
        </Typography>
        <p>
          I create visually appealing solutions that are as functional as they
          are user-friendly.
        </p>
        <img
          className='portrait'
          src={require("../images/portfolio-portrait.png")}
          alt='James'
        />
        <img
          className='arrow'
          src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png'
          alt='bouncing arrow'
        />
        <div className='landing-background' />
      </section>
    </>
  );
};

export default Landing;
