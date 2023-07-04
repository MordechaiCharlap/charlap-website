import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AddToList } from "./AddToList";
import { gridColumns } from "../defaultValues";

export const ListTable = ({ db, currentList, weddingData }) => {
  const [comingCount, setComingCount] = useState(0);
  const [notComingCount, setNotComingCount] = useState(0);
  const [needUpdate, setNeedUpdate] = useState(true);
  useEffect(() => {
    if (needUpdate) return;
    console.log("updating counters");
    var tempComing = 0;
    var tempNotComing = 0;
    weddingData[currentList].forEach((rsvp) => {
      if (rsvp.isComing) {
        tempComing += rsvp.guestCount;
      } else {
        tempNotComing += rsvp.guestCount;
      }
    });
    setComingCount(tempComing);
    setNotComingCount(tempNotComing);
    setNeedUpdate(false);
  }, [needUpdate]);
  const deleteFromList = async (index) => {
    const listClone = weddingData[currentList];
    listClone.splice(index, 1);
    await updateDoc(doc(db, "wedding/allData"), {
      [`${currentList}`]: listClone,
    });
  };
  return (
    <div dir="rtl">
      {currentList == "guestList" ? (
        <div>
          <div className="d-flex">
            <h3>מגיעים: {comingCount}</h3>
            <h3>לא מגיעים: {notComingCount}</h3>
          </div>
          <AddToList
            db={db}
            sides={weddingData.sides}
            setNeedUpdate={setNeedUpdate}
          />
        </div>
      ) : (
        <h3 className="text-center">
          כמות אנשים כללית:{" "}
          {weddingData[currentList].reduce((accumulator, currentValue) => {
            return accumulator + currentValue.guestCount;
          }, 0)}
        </h3>
      )}

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
          {weddingData[currentList].map((rsvp, index) => {
            return (
              <tr key={`${currentList}/${index}`}>
                {gridColumns.map((colName, index) => {
                  return (
                    <th key={index} className="text-center align-middle">
                      {typeof rsvp[colName[0]] == "boolean"
                        ? rsvp[colName[0]] == true
                          ? "כן"
                          : "לא"
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
