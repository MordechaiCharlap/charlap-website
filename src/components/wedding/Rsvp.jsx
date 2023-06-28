import React from "react";
import { Button } from "react-bootstrap";

export const Rsvp = () => {
  return (
    <div style={{ alignItems: "center", padding: 30 }} id="rsvp">
      <input
        dir="rtl"
        placeholder="שם מלא"
        style={{
          borderRadius: 8,
          width: "100%",
          marginBottom: 5,
          padding: 5,
        }}
      />
      <input
        dir="rtl"
        placeholder="מספר טלפון"
        style={{
          borderRadius: 8,
          width: "100%",
          marginBottom: 5,
          padding: 5,
        }}
      />
      <Button>עדכון הגעה</Button>
    </div>
  );
};
