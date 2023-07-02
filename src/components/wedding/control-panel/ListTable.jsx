import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { Button } from "react-bootstrap";

export const ListTable = ({ db, currentList, weddingData }) => {
  const gridColumns = [
    ["fullName", "שם מלא"],
    ["guestCount", "כמה אתם"],
    ["isComing", "מגיעים?"],
    ["side", "צד"],
  ];
  const deleteFromList = async (index) => {
    const listClone = weddingData[currentList];
    listClone.splice(index, 1);
    await updateDoc(doc(db, "wedding/allData"), {
      [`${currentList}`]: listClone,
    });
  };
  return (
    <div dir="rtl">
      <h3>
        כמות אנשים כללית:{" "}
        {weddingData[currentList].reduce((accumulator, currentValue) => {
          return accumulator + currentValue.guestCount;
        }, 0)}
      </h3>
      <table dir="rtl" className="table table-striped">
        <thead>
          <tr>
            {gridColumns.map((colName, index) => {
              return (
                <th key={index} className="text-center col-3 border">
                  {colName[1]}
                </th>
              );
            })}

            <th className="text-center col-3 border">פעולה</th>
          </tr>
        </thead>
        <tbody>
          {weddingData[currentList].map((rsvp, index) => {
            return (
              <tr key={`${currentList}/${index}`}>
                {gridColumns.map((colName) => {
                  return (
                    <th className="text-center align-middle">
                      {typeof rsvp[colName[0]] == "boolean"
                        ? rsvp[colName[0]] == true
                          ? "כן"
                          : "לא"
                        : rsvp[colName[0]]}
                    </th>
                  );
                })}
                <th>
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
