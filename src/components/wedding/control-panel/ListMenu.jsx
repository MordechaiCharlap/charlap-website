import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import $ from "jquery";
export const ListMenu = ({ setCurrentList }) => {
  useEffect(() => {
    $(".list-btn").on("click", (e) => {
      $(".current-list-btn").removeClass("current-list-btn");
      e.target.classList.add("current-list-btn");
    });
  }, []);
  return (
    <div className="menu d-flex justify-content-around py-3">
      <Button
        onClick={() => setCurrentList("submittedNotComing")}
        className="list-btn"
      >
        לא מגיעים - מחכה לאישור
      </Button>
      <Button
        onClick={() => setCurrentList("submittedComing")}
        className="list-btn"
      >
        מגיעים - מחכה לאישור
      </Button>
      <Button
        onClick={() => setCurrentList("guestList")}
        className="current-list-btn list-btn"
      >
        רשימה ראשית
      </Button>
    </div>
  );
};
