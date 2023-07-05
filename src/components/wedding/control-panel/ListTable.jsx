import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AddToList } from "./AddToList";
import { gridColumns } from "../defaultValues";
import { Button, DropdownButton } from "react-bootstrap";
import $ from "jquery";
import { Dropdown } from "react-bootstrap";
export const ListTable = ({ db, currentList, weddingData }) => {
  const [comingCount, setComingCount] = useState(0);
  const [notComingCount, setNotComingCount] = useState(0);
  const [maybeComingCount, setMaybeComingCount] = useState(0);
  const [shownArray, setShownArray] = useState(weddingData[currentList]);
  const [sortMethod, setSortMethod] = useState();
  const [sortMethodName, setSortMethodName] = useState();
  useEffect(() => {
    if (sortMethod == "isComing") isComingSort();
    if (sortMethod == "side") sideSort();
  }, []);

  useEffect(() => {
    const updatedArray = weddingData[currentList];
    setShownArray(updatedArray);
    var tempComing = 0,
      tempNotComing = 0,
      tempMaybeComing = 0;
    updatedArray.forEach((rsvp) => {
      if (rsvp.isComing == "yes") {
        tempComing += rsvp.guestCount;
      } else if (rsvp.isComing == "no") {
        tempNotComing += rsvp.guestCount;
      } else tempMaybeComing += rsvp.guestCount;
    });
    setComingCount(tempComing);
    setNotComingCount(tempNotComing);
    setMaybeComingCount(tempMaybeComing);
  }, [weddingData]);
  const deleteFromList = async (index) => {
    const listClone = shownArray.slice();
    listClone.splice(index, 1);
    await updateDoc(doc(db, "wedding/allData"), {
      [`${currentList}`]: listClone,
    });
  };
  const dropdownItemStyle = {
    width: 200,
    textAlign: "center",
  };
  const isComingSort = () => {
    const listClone = shownArray.slice();
    listClone.sort((a, b) => {
      if (a.isComing === "maybe") {
        return -1; // null comes first
      } else if (b.isComing === "maybe") {
        return 1; // null comes first
      } else if (a.isComing == "yes" && b.isComing == "no") {
        return -1; // true comes before false
      } else if (a.isComing == "no" && b.isComing == "yes") {
        return 1; // true comes before false
      } else {
        return 0; // no change in order
      }
    });
    setShownArray(listClone);
    setSortMethod("isComing");
    setSortMethodName("הגעה");
  };
  const sideSort = () => {
    const listClone = shownArray.slice();
    listClone.sort((a, b) => {
      var aIndex = weddingData.sides.indexOf(a.side);
      var bIndex = weddingData.sides.indexOf(b.side);
      return aIndex - bIndex;
    });

    setSortMethod("side");
    setShownArray(listClone);
    setSortMethodName("צד");
  };

  return (
    <div dir="rtl">
      {currentList == "guestList" ? (
        <div>
          <div className="d-flex">
            <h3>מגיעים: {comingCount}</h3>
            <h3>לא מגיעים: {notComingCount}</h3>
            <h3>סימן שאלה: {maybeComingCount}</h3>
          </div>
          <AddToList db={db} sides={weddingData.sides} />
        </div>
      ) : (
        <h3 className="text-center">
          כמות אנשים כללית:{" "}
          {shownArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.guestCount;
          }, 0)}
        </h3>
      )}
      <div className="d-flex justify-content-center">
        <h3 className="m-1">מיון לפי:</h3>
        <DropdownButton
          className="dropdown-not-filled m-0"
          id="dropdown-basic-button"
          title={sortMethodName || "בחירה"}
        >
          <Dropdown.Item style={dropdownItemStyle} onClick={isComingSort}>
            הגעה
          </Dropdown.Item>
          <Dropdown.Item style={dropdownItemStyle} onClick={sideSort}>
            צד
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <table dir="rtl" className="table table-striped">
        <thead>
          <tr>
            {gridColumns.map((colName, index) => {
              return (
                <th key={index} className="text-center border">
                  {colName[1]}
                </th>
              );
            })}

            <th className="text-center border">פעולה</th>
          </tr>
        </thead>
        <tbody>
          {shownArray.map((rsvp, index) => {
            return (
              <tr key={`${currentList}/${index}`}>
                {gridColumns.map((colName, index) => {
                  return (
                    <th key={index} className="text-center align-middle">
                      {colName[0] == "isComing"
                        ? rsvp[colName[0]] == "yes"
                          ? "כן"
                          : rsvp[colName[0]] == "no"
                          ? "לא"
                          : "אולי"
                        : rsvp[colName[0]]}
                    </th>
                  );
                })}
                <th className="text-center">
                  <Button
                    className="btn-danger"
                    onClick={async () => {
                      await deleteFromList(index);
                    }}
                  >
                    X
                  </Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
