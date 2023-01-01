import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const HeaderSocials = () => {
  const socialStyle = {
    margin: "0.3rem",
  };
  return (
    <div>
      <a style={socialStyle}>
        <BsLinkedin />
      </a>
      <a style={socialStyle}>
        <FaGithub />
      </a>
      <a style={socialStyle}>
        <SiGmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
