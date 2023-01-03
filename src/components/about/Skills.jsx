import React, { createElement } from "react";

const Skills = () => {
  const getSkills = () => {
    const skills = [
      "JavaScript",
      "Firebase",
      "React",
      "React Native",
      "HTML",
      "CSS",
      "C#",
      "Github",
      "SQL",
      "Photoshop",
    ];
    const skillCards = [];
    for (var skillValue of skills) {
      const skillCard = (
        <div key={skillValue} className="skill__card">
          <h4>{skillValue}</h4>
        </div>
      );
      skillCards.push(skillCard);
    }
    return <div className="skill__cards">{skillCards}</div>;
  };
  return (
    <div className="skills__container container">
      <h2>My Skills</h2>
      {getSkills()}
    </div>
  );
};

export default Skills;
