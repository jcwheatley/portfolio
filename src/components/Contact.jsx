import React from "react";
import "./Contact.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='contact-bar'>
        <h2>Let’s Connect</h2>
        <p>
          Let’s build something great together! Reach out via LinkedIn—I'd love
          to connect and explore how we can collaborate.
        </p>
        <a
          href='https://www.linkedin.com/in/jcwheatley/'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-button'
        >
          <LinkedInIcon fontSize='small' sx={{ marginRight: "8px" }} />
          Contact via LinkedIn
        </a>
        <div className='contact-links'>
          <a
            href='https://github.com/jcwheatley'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link'
          >
            <GitHubIcon fontSize='large' />
          </a>
          <a href='mailto:jcwheatley1@gmail.com' className='icon-link'>
            <EmailIcon fontSize='large' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
