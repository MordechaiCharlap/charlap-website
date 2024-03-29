import React, { useEffect } from "react";
import "../components/wedding/control-panel/wedding-control-panel.css";
import { firestore } from "../firebase.config";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { ListMenu } from "../components/wedding/control-panel/ListMenu";
import { ListTable } from "../components/wedding/control-panel/ListTable";
export const WeddingControlPanelPage = () => {
  const db = firestore;
  const [weddingData, setWeddingData] = useState();
  const [currentList, setCurrentList] = useState("guestList");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "wedding/allData"), (doc) => {
      const data = doc.data();
      setWeddingData(data);
    });
    return () => unsub();
  }, []);

  return (
    <div id="control-panel">
      <div>
        <ListMenu setCurrentList={setCurrentList} />
      </div>
      {weddingData != null ? (
        <ListTable
          db={db}
          currentList={currentList}
          weddingData={weddingData}
        />
      ) : (
        <h3 dir="rtl" className="text-center">
          טוען...
        </h3>
      )}
    </div>
  );
};
