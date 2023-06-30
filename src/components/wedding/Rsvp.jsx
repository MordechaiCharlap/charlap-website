import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HowMany } from "./HowMany";
import styles from "./wedding.css";
import $ from "jquery";
import { firestore } from "../../firebase.config";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { ExistsRsvp } from "./ExistsRsvp";

export const Rsvp = () => {
  const db = firestore;
  const [weddingData, setWeddingData] = useState();
  const [sides, setSides] = useState([]);
  const [side, setSide] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [isComing, setIsComing] = useState();
  const [allArraysArray, setAllArraysArray] = useState([]);
  const [existsRsvp, setExistsRsvp] = useState();
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "wedding/allData"), (doc) => {
      const data = doc.data();
      setWeddingData(data);
      setSides(data.sides);
      setAllArraysArray([
        ...data.submittedComing,
        ...data.submittedNotComing,
        ...data.guestList,
      ]);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    if (isComing == null) return;
    if (!checkIfPhoneNumberExists()) submitRsvp();
  }, [isComing]);
  useEffect(() => {
    if (side == null) {
      $("#dropdown-basic-button").addClass("dropdown-not-filled");
      $("#dropdown-basic-button").removeClass("dropdown-filled");
    } else {
      $("#dropdown-basic-button").addClass("dropdown-filled");
      $("#dropdown-basic-button").removeClass("dropdown-not-filled");
    }
  }, [side]);
  const emptyInputColor = "#bebebe";
  const filledInputColor = "white";
  const dropdownItemStyle = {
    width: 200,
    textAlign: "center",
  };

  const checkIfPhoneNumberExists = () => {
    const existsDataIndex = allArraysArray.findIndex((element) => {
      return element.phoneNumber == phoneNumber;
    });
    if (existsDataIndex != -1) {
      setExistsRsvp(allArraysArray[existsDataIndex]);
      return true;
    }
    return false;
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
      setIsComing(true);
    }
  };
  const submitNotComing = () => {
    if (validateInputs()) {
      console.log("setting coming to false");
      setIsComing(false);
    }
  };
  const sideChanged = (sideChange) => {
    setSide(sideChange);
    if (sideChange) {
      $("#dropdown-basic-button").removeClass("errorInput");
    }
  };
  const updateRsvp = (update) => {
    if (update) {
      const weddingDataClone = { ...weddingData };

      const newSubmittedComing = weddingDataClone.submittedComing.filter(
        (rsvp) => rsvp.phoneNumber != phoneNumber
      );
      const newSubmittedNotComing = weddingDataClone.submittedNotComing.filter(
        (rsvp) => rsvp.phoneNumber != phoneNumber
      );
      const newRsvp = {
        phoneNumber: phoneNumber,
        fullName: fullName,
        side: side,
        guestCount: guestCount,
        isComing: isComing,
      };
      if (isComing) newSubmittedComing.push(newRsvp);
      else newSubmittedNotComing.push(newRsvp);
      updateDoc(doc(db, "wedding/allData"), {
        submittedComing: newSubmittedComing,
        submittedNotComing: newSubmittedNotComing,
      });
      setSubmitted(true);
    } else {
      const element = document.getElementById("wedding-reservation-start");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    cleanState();
  };
  const cleanState = () => {
    setFullName("");
    setPhoneNumber("");
    setGuestCount(1);
    setSide();
    setIsComing();
    setExistsRsvp();
  };
  const submitRsvp = () => {
    const dataClone = { ...weddingData };
    const newRsvp = {
      phoneNumber: phoneNumber,
      fullName: fullName,
      side: side,
      guestCount: guestCount,
      isComing: isComing,
    };
    if (isComing == false) dataClone.submittedComing.push(newRsvp);
    else dataClone.submittedNotComing.push(newRsvp);
    console.log(dataClone);
    updateDoc(doc(db, "wedding/allData"), dataClone);
    setSubmitted(true);
    cleanState();
  };
  return (
    <div id="rsvp">
      {submitted ? (
        <div className="fullPage align-items-center">
          <h1 dir="rtl" className="text-center">
            {`הטופס נשלח ונקלט במערכת, מחכים לראותכם :)`}
          </h1>
          <Button
            href="#wedding-reservation-start"
            onClick={() => setSubmitted(false)}
          >
            חזרה
          </Button>
        </div>
      ) : existsRsvp ? (
        <ExistsRsvp
          existsRsvp={existsRsvp}
          newRsvp={{
            phoneNumber: phoneNumber,
            fullName: fullName,
            guestCount: guestCount,
            isComing: isComing,
          }}
          updateRsvp={updateRsvp}
        />
      ) : (
        <div dir="rtl" className="fullPage">
          <div className="form">
            <DropdownButton
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              id="dropdown-basic-button"
              title={side || "בחרו צד"}
            >
              {sides.map((side, index) => {
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
          {/* <p>
            *אם אתם רוצים לעדכן את האישור שלכם מלאו את הטופס שוב עם אותו מספר
            טלפון
          </p> */}
        </div>
      )}
    </div>
  );
};
