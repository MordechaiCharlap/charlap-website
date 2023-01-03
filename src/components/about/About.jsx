import React from "react";
import "./about.css";
import Me from "../../assets/robot-guy.png";
import { FaAward } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="title">
          <h1>ABOUT ME</h1>
          <h4>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h4>
        </div>
        <div className="about__content">
          <h2>Get to know me!</h2>
          <h4>
            I'm an aspiring <span>Fullstack developer</span> building the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the{" "}
            <span>Projects</span> section.
          </h4>
          <h4>
            I also like sharing content related to the stuff that I have learned
            over the years in <span>Web Development</span> so it can help other
            people of the Dev Community. Feel free to Connect or Follow me on my{" "}
            <a>
              <span>Github</span>
            </a>{" "}
            where I post useful content related to Web Development and
            Programming.
          </h4>
          <h4>
            {" "}
            I'm open to <span>Job</span> opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then don't hesitate to <span>contact</span>{" "}
            me.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
