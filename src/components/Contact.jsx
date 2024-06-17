import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='contact-bar'>
        <h2>Let's Connect</h2>
        <p>
          If you'd like to get in touch, feel free to reach out on LinkedIn or
          GitHub.
        </p>
        <div className='contact-links'>
          <a
            href='https://www.linkedin.com/in/james-wheatley'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/james-wheatley'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
