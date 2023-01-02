import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquare } from "react-icons/bi";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#exprience">
        <BiBook />
      </a>
      <a href="#portfolio">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <BiMessageSquare />
      </a>
    </nav>
  );
};

export default Nav;
