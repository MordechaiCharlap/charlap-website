import React, { useState } from "react";
import { gridColumns } from "../defaultValues";
import { Button, DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import $ from "jquery";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
export const AddToList = ({ sides, db }) => {
  const [fullName, setFullName] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [isComing, setIsComing] = useState(false);
  const [side, setSide] = useState();
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
    setIsComing(false);
    setGuestCount(0);
    setIsComing(false);
    setSide();
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
      isComing: isComing == true ? "yes" : isComing == false ? "no" : "maybe",
      side: side,
    };

    clearInputs();
    console.log(newValue);
    await updateDoc(doc(db, "wedding/allData"), {
      guestList: arrayUnion(newValue),
    });
  };
  return (
    <div className="bg-secondary rounded m-5 p-5">
      <h3 className="text-center">הכנסת אורחים ידנית</h3>
      <table className="table">
        <thead>
          <tr>
            {gridColumns.map((colName, index) => {
              return (
                <th key={index} className="text-center border col-3">
                  {colName[1]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <th className="border text-center">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded text-center"
              />
            </th>
            <th className="border text-center">
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
            <th className="border text-center">
              <DropdownButton
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="dropdown-not-filled"
                id="dropdown-basic-button"
                title={
                  isComing == true
                    ? "כן"
                    : isComing == false
                    ? "לא"
                    : "לא ידוע עדיין"
                }
              >
                <Dropdown.Item
                  style={dropdownItemStyle}
                  onClick={() => setIsComing(true)}
                >
                  כן
                </Dropdown.Item>
                <Dropdown.Item
                  style={dropdownItemStyle}
                  onClick={() => setIsComing(false)}
                >
                  לא
                </Dropdown.Item>
                <Dropdown.Item
                  style={dropdownItemStyle}
                  onClick={() => setIsComing()}
                >
                  לא ידוע עדיין
                </Dropdown.Item>
              </DropdownButton>
            </th>
            <th className="border text-center">
              <DropdownButton
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="dropdown-not-filled"
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
