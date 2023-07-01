import React, { useEffect } from "react";
import "../components/wedding/control-panel/wedding-control-panel.css";
import { firestore } from "../firebase.config";
import { useState } from "react";
import $ from "jquery";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

import { ListMenu } from "../components/wedding/control-panel/ListMenu";
import { Button } from "react-bootstrap";
export const WeddingControlPanelPage = () => {
  const db = firestore;
  const [weddingData, setWeddingData] = useState();
  const [currentList, setCurrentList] = useState("guestList");
  const gridColumns = [
    ["fullName", "שם מלא"],
    ["guestCount", "כמה אתם"],
    ["isComing", "מגיעים?"],
    ["side", "צד"],
  ];
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "wedding/allData"), (doc) => {
      const data = doc.data();
      setWeddingData(data);
    });
    return () => unsub();
  }, []);
  const deleteFromList = async (index) => {
    const listClone = weddingData[currentList];
    listClone.splice(index, 1);
    await updateDoc(doc(db, "wedding/allData"), {
      [`${currentList}`]: listClone,
    });
  };
  return (
    <div id="control-panel">
      <div>
        <ListMenu currentList={currentList} setCurrentList={setCurrentList} />
      </div>
      {weddingData != null ? (
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

              <th key={4} className="text-center col-3 border">
                פעולה
              </th>
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
      ) : (
        <h3 dir="rtl" className="text-center">
          טוען...
        </h3>
      )}
    </div>
  );
};
