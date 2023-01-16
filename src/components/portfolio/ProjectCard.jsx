import React from "react";
import "./portfolio.css";
const ProjectCard = (props) => {
  return (
    <div className="screenshot__card">
      <h4 className="screenshot__title">{props.title}</h4>
      <h5 className="screenshot__subtitle">{props.subTitle}</h5>
      <div className="screenshot__image">
        <img alt={"app screenshot"} src={props.screenshotImage} />
      </div>
    </div>
  );
};

export default ProjectCard;
