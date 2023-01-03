import React from "react";
import "./about.css";
import Me from "../../assets/robot-guy.png";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h1>ABOUT ME</h1>
        <h4>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h4>
      </div>
    </section>
  );
};

export default About;
