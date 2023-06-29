import React from "react";
import { Rsvp } from "../components/wedding/Rsvp";
import reservation from "../assets/wedding/reservation_.jpg";
import { Button } from "react-bootstrap";
import "../components/wedding/wedding.css";
const WeddingReservationsPage = () => {
  return (
    <div id="#weddingReservationStart" className="weddingReservationsPage">
      <div className="container" style={{}}>
        <div className="fullPage align-items-center">
          <img className="reservation" src={reservation} alt="reservation" />
          <div style={{ height: 10 }} />
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
