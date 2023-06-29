import React from "react";
import "./wedding-control-panel.css";
import { Button } from "react-bootstrap";
import { firestore } from "../../../firebase.config";
export const WeddingControlPanel = () => {
  const db = firestore;
  return (
    <div id="control-panel">
      <div className="fullPage">
        <div className="heightMargin" />
        <div className="menu d-flex justify-content-around">
          <Button>לא מגיעים - מחכה לאישור</Button>
          <Button>מגיעים - מחכה לאישור</Button>
          <Button>רשימה ראשית</Button>
        </div>
      </div>
    </div>
  );
};
