import React from "react";
import Landing from "../components/Landing";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      {/* <SideNav /> */}

      <Header />
      <Landing />
      <Intro />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
