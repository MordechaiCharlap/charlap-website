import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__title">
          <h1>Contact</h1>
          <h4>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </h4>
        </div>
        <div className="contact__form__container">
          <form>
            <h5>Name</h5>
            <input placeholder="Enter Your Name"></input>
            <h5>Email</h5>
            <input placeholder="Enter Your Email"></input>
            <h5>Message</h5>
            <textarea
              rows={10}
              className="messageInput"
              placeholder="Enter Your Message"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
