import React from "react";
import About from "../components/homePage/about/About";
import Contact from "../components/homePage/contact/Contact";
import Experience from "../components/homePage/experience/Experience";
import Header from "../components/homePage/header/Header";
import Footer from "../components/homePage/footer/Footer";
import Nav from "../components/homePage/nav/Nav";
import Portfolio from "../components/homePage/portfolio/Portfolio";
import "../components/homePage/homePage.css";
function HomePage() {
  return (
    <div className="websiteLayout homePage">
      <Header />
      <About id="about" />
      <Experience id="experience" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer />
      <Nav />
    </div>
  );
}

export default HomePage;
