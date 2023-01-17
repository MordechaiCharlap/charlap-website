import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/moti-charlap-a27470200/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/MordechaiCharlap">
        <FaGithub />
      </a>
      <a href="mailto:mordechai.cha@gmail.com">
        <SiGmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
