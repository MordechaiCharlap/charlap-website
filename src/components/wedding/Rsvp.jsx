import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HowMany } from "./HowMany";
export const Rsvp = () => {
  const [side, setSide] = useState();
  const dropdownItemStyle = {
    textAlign: "right",
  };
  return (
    <div
      dir="rtl"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
      id="rsvp"
    >
      <h1 style={{ alignSelf: "center" }}>אישור הגעה</h1>
      <DropdownButton id="dropdown-basic-button" title={side || "בחרו צד"}>
        <Dropdown.Item
          style={dropdownItemStyle}
          onClick={() => setSide("משפחה תם")}
        >
          משפחה תם
        </Dropdown.Item>
        <Dropdown.Item
          style={dropdownItemStyle}
          onClick={() => setSide("משפחה מוטי")}
        >
          משפחה מוטי
        </Dropdown.Item>
        <Dropdown.Item
          style={dropdownItemStyle}
          onClick={() => setSide("החברים של תם")}
        >
          החברים של תם
        </Dropdown.Item>
        <Dropdown.Item
          style={dropdownItemStyle}
          onClick={() => setSide("ההורים של תם")}
        >
          ההורים של תם
        </Dropdown.Item>
        <Dropdown.Item
          style={dropdownItemStyle}
          onClick={() => setSide("החברים של מוטי")}
        >
          החברים של מוטי
        </Dropdown.Item>
        <Dropdown.Item
          style={dropdownItemStyle}
          onClick={() => setSide("ההורים של מוטי")}
        >
          ההורים של מוטי
        </Dropdown.Item>
      </DropdownButton>
      <div style={{ height: 10 }} />
      <input style={{ borderRadius: 8 }} dir="rtl" placeholder="שם מלא" />
      <div style={{ height: 10 }} />
      <input style={{ borderRadius: 8 }} dir="rtl" placeholder="מספר טלפון" />
      <div style={{ height: 10 }} />
      <HowMany />
      <div style={{ height: 10 }} />

      <Button>עדכון הגעה</Button>
    </div>
  );
};
