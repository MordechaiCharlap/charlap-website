import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HowMany } from "./HowMany";
import styles from "./wedding.css";
import $ from "jquery";
import { firestore } from "../../firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const Rsvp = () => {
  const db = firestore;
  const [weddingData, setWeddingData] = useState();
  const [side, setSide] = useState();
  const [sides, setSides] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  useEffect(() => {
    const getWeddingData = async () =>
      setWeddingData((await getDoc(doc(db, "wedding/allData"))).data());
    getWeddingData();
  }, []);
  useEffect(() => {
    if (weddingData) setSides(weddingData.sides);
  }, [weddingData]);

  const emptyInputColor = "#bebebe";
  const filledInputColor = "white";
  const dropdownItemStyle = {
    width: 200,
    textAlign: "center",
  };
  const fullNameChanged = (text) => {
    setFullName(text);
    if (text != "") {
      $(".fullNameInput").removeClass("errorInput");
    }
  };
  const phoneNumberChanged = (text) => {
    const regex = /^\d{1,10}$/;
    const internationalRegex = /^[+]\d{0,20}$/;

    if (regex.test(text) || internationalRegex.test(text) || text == "") {
      setPhoneNumber(text);
    }
    if (text != "") {
      $(".phoneNumberInput").removeClass("errorInput");
    }
  };
  const validateInputs = () => {
    var isValid = true;
    if (fullName === "") {
      $(".fullNameInput").addClass("errorInput");
      isValid = false;
    }
    const validPhoneNumberRegex = /^\d{10}$/;
    const validInternationalRegex =
      /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,5}[-.\s]?\d{1,5}[-.\s]?\d{1,9}$/;
    if (
      phoneNumber === "" ||
      !validInternationalRegex.test(phoneNumber) ||
      !validPhoneNumberRegex.test(phoneNumber)
    ) {
      $(".phoneNumberInput").addClass("errorInput");
      isValid = false;
    }
    if (!side) {
      $("#dropdown-basic-button").addClass("errorInput");
      isValid = false;
    }
    return isValid;
  };
  const submitComing = () => {
    if (validateInputs()) {
    }
  };
  const submitNotComing = () => {
    if (validateInputs()) {
    }
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
          {sides.map((side) => {
            return (
              <Dropdown.Item
                key={side}
                style={dropdownItemStyle}
                onClick={() => sideChanged(side)}
              >
                {side}
              </Dropdown.Item>
            );
          })}
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
          dir="ltr"
          placeholder="מספר טלפון"
        />
        <div style={{ height: 10 }} />
        <HowMany setGuestCount={setGuestCount} />
        <div style={{ height: 10 }} />
        <div className="coming__or__not">
          <Button
            onClick={submitComing}
            className="coming__button"
            variant="success"
          >
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
        *אם אתם רוצים לעדכן את האישור שלכם מלאו את הטופס שוב עם אותו מספר טלפון
      </p>
    </div>
  );
};
