import React from "react";
import "./portfolio.css";
import Workouteer from "./workouteer/Workouteer";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio__container container">
        <h1>PROJECTS</h1>
        <Workouteer />
      </div>
    </section>
  );
};

export default Portfolio;
