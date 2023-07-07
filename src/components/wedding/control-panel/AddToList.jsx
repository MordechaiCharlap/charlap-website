import React, { useState } from "react";
import { gridColumns } from "../defaultValues";
import { Button } from "react-bootstrap";
import $ from "jquery";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { IsComingDropdown } from "./IsComingDropdown";
import { SideDropdown } from "./SideDropdown";
export const AddToList = ({ sides, db }) => {
  const [fullName, setFullName] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [isComing, setIsComing] = useState("maybe");
  const [side, setSide] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorText, setErrorText] = useState(" ");
  const dropdownItemStyle = {
    width: 200,
    textAlign: "center",
  };
  const sideChanged = (sideChange) => {
    setSide(sideChange);
    if (sideChange) {
      $("#dropdown-basic-button").removeClass("errorInput");
    }
  };
  const clearInputs = () => {
    setFullName("");
    setIsComing("maybe");
    setGuestCount(0);
    setSide();
    setPhoneNumber("");
  };
  const checkIsValid = () => {
    if (fullName == "" || guestCount == 0 || side == null) {
      console.log("not valid");
      setErrorText("נא למלא את כל הפרטים");
      return false;
    }
    return true;
  };
  const addToGuestList = async () => {
    setErrorText(" ");
    if (!checkIsValid()) return;
    const newValue = {
      fullName: fullName,
      guestCount: guestCount,
      isComing: isComing,
      side: side,
      phoneNumber: phoneNumber,
    };

    clearInputs();
    await updateDoc(doc(db, "wedding/allData"), {
      guestList: arrayUnion(newValue),
    });
  };
  const thStyle = {
    textAlign: "center",
    borderColor: "#0b0c10",
    borderWidth: 1,
  };
  return (
    <div className="rounded m-5 p-5" style={{ backgroundColor: "#cbcbcb" }}>
      <h3 className="text-center mb-3">הכנסת אורחים ידנית</h3>
      <table className="table">
        <thead>
          <tr>
            {gridColumns.map((colName, index) => {
              return (
                <th key={index} style={thStyle} className="col-3">
                  {colName[1]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <th style={thStyle}>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded text-center"
              />
            </th>
            <th style={thStyle}>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="rounded text-center"
              />
            </th>
            <th style={thStyle}>
              <input
                value={guestCount}
                onChange={(e) =>
                  e.target.value == ""
                    ? setGuestCount(0)
                    : setGuestCount(parseInt(e.target.value, 10))
                }
                type="number"
                className="rounded text-center"
              />
            </th>
            <th style={thStyle}>
              <IsComingDropdown setIsComing={setIsComing} />
            </th>
            <th style={thStyle}>
              <SideDropdown sides={sides} setSide={sideChanged} />
            </th>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <p className="text-center">{errorText}</p>
          <Button className="text-center" onClick={addToGuestList}>
            הכנסה למאגר
          </Button>
        </div>
      </div>
    </div>
  );
};
