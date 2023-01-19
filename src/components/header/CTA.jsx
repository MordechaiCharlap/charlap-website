import React from "react";
import "./header.css";
import resume from "../../assets/Moti-Charlap-Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Download CV
      </a>
      <a href="https://wa.me/972508566533" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
