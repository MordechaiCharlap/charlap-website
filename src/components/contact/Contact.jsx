import React, { useState } from "react";
import "./contact.css";
import { firestore } from "../../firebase.config.js";
import { addDoc, collection } from "firebase/firestore";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = async () => {
    if (name != "" && validateEmail(email) && message.length > 5) {
      const db = firestore;
      const submission = {
        senderName: name,
        senderEmail: email,
        message: message,
      };
      await addDoc(collection(db, "submissions"), {
        ...submission,
      });
    } else {
      console.log("not a valid submission");
    }
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    console.log("not a valid email");
    return false;
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__title">
          <h1>CONTACT</h1>
          <h4>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </h4>
        </div>
        <div className="contact__form__container">
          <form>
            <h5>Name</h5>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Your Name"
            ></input>
            <h5>Email</h5>
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Your Email"
            ></input>
            <h5>Message</h5>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              rows={10}
              className="messageInput"
              placeholder="Enter Your Message"
            ></textarea>
          </form>
          <a className="btn" onClick={submitForm}>
            Submit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
