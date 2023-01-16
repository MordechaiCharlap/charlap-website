import React from "react";
import "./portfolio.css";
import Workouteer from "./workouteer/Workouteer";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>PROJECTS</h1>
      <div className="portfolio__container container">
        <Workouteer />
      </div>
    </section>
  );
};

export default Portfolio;
