import React from "react";
import "./about.css";
import Skills from "./Skills";
const About = () => {
  const aboutContent = (
    <div className="about__content">
      <h4>
        I learned to program in C# in high school, and after my military service
        I started a <span>1 year C# web application development course</span>,
        but in the last six months I decided to change direction, started to
        self learn <span>mobile applications development</span> and became
        addicted to the simplicity and efficiency of{" "}
        <span>JavaScript using react Native</span>. I am currently looking for a
        job in the field of software development for applications - preferably
        mobile - and I would be happy to gain experience and knowledge during
        this time.
      </h4>
      <h4>
        My goal is to develop apps that will help people in their daily lives -
        whether it's increasing the level of efficiency at work, fitness, and
        social life - or having fun with a simple and fun game while they take a
        moment for themselves.
        <br />
        <br />
        <span>
          Basically, I want people to use their time using the apps I helped
          creating - without it being considered a waste of time ^_^
        </span>
      </h4>
    </div>
  );
  return (
    <section id="about" className="container">
      <h1 className="about__title">EXPERIENCE</h1>
      <div className="about__and__skills">
        <div className="about__container">
          {aboutContent}
          <a className="btn" href="#contact">
            Contact
          </a>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default About;
