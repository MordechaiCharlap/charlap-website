import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HowMany } from "./HowMany";
import styles from "./wedding.css";
import $ from "jquery";
export const Rsvp = () => {
  const [side, setSide] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const emptyInputColor = "#bebebe";
  const filledInputColor = "white";
  const dropdownItemStyle = {
    textAlign: "right",
  };
  const fullNameChanged = (text) => {
    setFullName(text);
    if (text != "") {
      $(".fullNameInput").removeClass("errorInput");
    }
  };
  const phoneNumberChanged = (text) => {
    const regex = /^\d{1,10}$/;
    if (regex.test(text) || text == "") {
      setPhoneNumber(text);
    }
    if (text != "") {
      $(".phoneNumberInput").removeClass("errorInput");
    }
  };
  const submitComing = () => {};
  const submitNotComing = () => {
    var isValid = true;
    if (fullName === "") {
      $(".fullNameInput").addClass("errorInput");
      isValid = false;
    }
    const validPhoneNumberRegex = /^\d{10}$/;
    if (phoneNumber === "" || !validPhoneNumberRegex.test(phoneNumber)) {
      $(".phoneNumberInput").addClass("errorInput");
      isValid = false;
    }
    if (!side) {
      $("#dropdown-basic-button").addClass("errorInput");
    }
    if (!isValid) return;
  };
  const sideChanged = (sideChange) => {
    setSide(sideChange);
    if (sideChange) {
      console.log(sideChange);
      $("#dropdown-basic-button").removeClass("errorInput");
    }
  };
  return (
    <div dir="rtl" id="rsvp">
      <div className="rsvp__form">
        <DropdownButton id="dropdown-basic-button" title={side || "בחרו צד"}>
          <Dropdown.Item
            style={dropdownItemStyle}
            onClick={() => sideChanged("משפחה תם")}
          >
            תם - משפחה
          </Dropdown.Item>
          <Dropdown.Item
            style={dropdownItemStyle}
            onClick={() => sideChanged("החברים של תם")}
          >
            תם - חברים
          </Dropdown.Item>
          <Dropdown.Item
            style={dropdownItemStyle}
            onClick={() => sideChanged("משפחה מוטי")}
          >
            מוטי - משפחה
          </Dropdown.Item>

          <Dropdown.Item
            style={dropdownItemStyle}
            onClick={() => sideChanged("ההורים של תם")}
          >
            מוטי - חברים
          </Dropdown.Item>
        </DropdownButton>
        <div
          style={{
            height: 10,
          }}
        />
        <input
          className="fullNameInput"
          onChange={(e) => {
            fullNameChanged(e.nativeEvent.target.value);
          }}
          style={{
            borderRadius: 8,
            backgroundColor:
              fullName == "" ? emptyInputColor : filledInputColor,
          }}
          dir="rtl"
          placeholder="שם מלא"
        />
        <div style={{ height: 10 }} />
        <input
          value={phoneNumber}
          className="phoneNumberInput"
          onChange={(e) => {
            phoneNumberChanged(e.nativeEvent.target.value);
          }}
          style={{
            borderRadius: 8,
            backgroundColor:
              phoneNumber == "" ? emptyInputColor : filledInputColor,
          }}
          dir="rtl"
          placeholder="מספר טלפון"
        />
        <div style={{ height: 10 }} />
        <HowMany setGuestCount={setGuestCount} />
        <div style={{ height: 10 }} />
        <div className="coming__or__not">
          <Button className="coming__button" variant="success">
            מגיעים
          </Button>
          <div style={{ width: 10 }} />
          <Button
            onClick={submitNotComing}
            className="not__coming__button"
            variant="danger"
          >
            לא מגיעים
          </Button>
        </div>
      </div>
      <p style={{ width: 400 }}>
        *אם אתם רוצים לעדכן את האישור שלכם מלאו את הטופס שוב עם אותו המספר טלפון
      </p>
    </div>
  );
};
