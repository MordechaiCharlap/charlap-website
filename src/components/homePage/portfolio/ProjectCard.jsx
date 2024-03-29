import React from "react";
import "./portfolio.css";
const ProjectCard = (props) => {
  return (
    <div className="screenshot__card">
      <div className="screenshot__image__container">
        <img
          className="screenshot__image"
          alt={"app screenshot"}
          src={props.screenshotImage}
        />
      </div>
      <div className="screenshot__text">
        <h4 className="screenshot__title">{props.title}</h4>
        <h5 className="screenshot__subtitle">{props.subTitle}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
