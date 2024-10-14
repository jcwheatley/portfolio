import { Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Landing.scss";

const handleScroll = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
};

const Landing = () => {
  return (
    <>
      <section id='intro' className='landing'>
        <Typography
          variant='h4'
          gutterBottom
          sx={{ fontWeight: "bold", padding: "0 20px 0 20px" }}
        >
          Front-end Developer + UX/UI Designer
        </Typography>
        <img
          className='portrait'
          src={require("../images/portfolio-portrait.png")}
          alt='James'
        />
        {/* <img
          className='arrow'
          src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png'
          alt='bouncing arrow'
        /> */}
        <div className='arrow' onClick={() => handleScroll("skills")}>
          <KeyboardArrowDownIcon sx={{ fontSize: 100, color: "#CE7B65" }} />
        </div>
        {/* <div className='arrow'>
          <KeyboardArrowDownIcon sx={{ fontSize: 70, color: "#000" }} />
        </div> */}

        <div className='landing-background' />
      </section>
    </>
  );
};

export default Landing;
