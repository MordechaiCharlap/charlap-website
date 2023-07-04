import React from "react";
import { Rsvp } from "../components/wedding/Rsvp";
import reservation from "../assets/wedding/wedding-reservation-transparent.png";
import us from "../assets/wedding/tom-and-me.jpg";
import { Button } from "react-bootstrap";
import "../components/wedding/wedding.css";
const WeddingReservationsPage = () => {
  return (
    <div
      id="wedding-reservation-start"
      className="weddingReservationsPage"
      style={{ backgroundColor: "gray" }}
    >
      <div className="container" style={{}}>
        <div className="fullPage align-items-center">
          <img
            className="reservation"
            src={reservation}
            alt="reservation"
            style={{ backgroundColor: "#ffffff" }}
          />
          <div className="height-margin" />
          <Button variant="secondary" size="lg" href="#rsvp">
            אישור/ביטול הגעה
          </Button>
        </div>
        <Rsvp />
      </div>
    </div>
  );
};
export default WeddingReservationsPage;
