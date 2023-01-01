import React from "react";
import CTA from "./CTA";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Moti Charlap</h1>
        <h5>Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
