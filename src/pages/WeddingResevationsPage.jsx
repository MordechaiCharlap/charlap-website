import React from "react";
import { Rsvp } from "../components/wedding/Rsvp";
import US from "../assets/wedding/tom-and-me.jpg";
import "../components/wedding/wedding.css";
import reservation from "../assets/wedding/reservation_.jpg";
import { Button } from "react-bootstrap";
const WeddingResevationsPage = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "white" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <div className="wedding__container">
              <img className="our__image" src={US} alt="me and tom" />
              
        <h1 style={{ zIndex: 999 }}>החתונה של תם ומוטי</h1>
      </div> */}
        <div className="reservation__and__rsvp__button">
          <img className="reservation" src={reservation} alt="reservation" />
          <div>
            <Button variant="primary" size="lg" href="#rsvp">
              אישור הגעה
            </Button>
          </div>
        </div>
        <Rsvp />
      </div>
    </div>
  );
};
export default WeddingResevationsPage;
