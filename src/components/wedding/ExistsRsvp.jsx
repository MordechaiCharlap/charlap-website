import React from "react";
import "./existsRsvp.css";
import { Button } from "react-bootstrap";
export const ExistsRsvp = ({ existsRsvp, updateRsvp }) => {
  const gridColumns = [
    ["fullName", "שם מלא"],
    ["guestCount", "כמה אתם"],
    ["isComing", "מגיעים?"],
    ["side", "צד"],
  ];
  return (
    <div dir="rtl" id="existsRsvp" className="fullPage">
      <div className="form">
        <h3>המספר טלפון קיים במערכת, האם אתה רוצה להחליף את הפרטים הישנים?</h3>
        <div style={{ height: 10 }} />
        <div className="grid">
          <div className="row">
            {gridColumns.map((columnField, index) => {
              return (
                <div key={columnField + index} className="column">
                  <div className="gridCube">
                    <p style={{ fontWeight: 500 }}>{columnField[1]}</p>
                  </div>
                  <div className="gridCube">
                    <p>
                      {typeof existsRsvp[columnField[0]] === "boolean"
                        ? existsRsvp[columnField[0]] == false
                          ? "לא"
                          : "כן"
                        : existsRsvp[columnField[0]]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ height: 10 }} />
        <div
          style={{
            display: "flex",
            flex: 1,
          }}
        >
          <Button
            onClick={() => {
              updateRsvp(true);
            }}
          >
            כן
          </Button>
          <div style={{ width: 10 }} />
          <Button
            onClick={() => {
              updateRsvp(false);
            }}
          >
            לא
          </Button>
        </div>
      </div>
    </div>
  );
};
