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
        <h5>Fullstack developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Just me" />
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
