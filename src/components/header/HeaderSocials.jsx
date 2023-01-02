import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a>
        <BsLinkedin />
      </a>
      <a>
        <FaGithub />
      </a>
      <a>
        <SiGmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
