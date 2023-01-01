import React from "react";

const CTA = () => {
  const margin = {
    margin: "0.5rem",
  };
  return (
    <div>
      <a href="https://google.com" className="btn" style={margin}>
        Download CV
      </a>
      <a href="https://google.com" className="btn btn-primary" style={margin}>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
