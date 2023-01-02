import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Moti Charlap</h1>
        <h5>Fullstack Developer</h5>
        <CTA />

        <div>
          <img src={ME} alt="Just me" className="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
