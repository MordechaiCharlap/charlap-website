import React, { useEffect, useState } from "react";
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons";

export const HowMany = (props) => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const primaryColor = "#0d6efd";
  return (
    <div
      style={{
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center" }}>כמה אתם?</h3>
      <div style={{ height: 10 }} />
      <div className="how__many" dir="ltr">
        <a
          onClick={() => {
            if (numberOfGuests > 1) {
              const newCount = numberOfGuests - 1;
              setNumberOfGuests(newCount);
              props.setGuestCount(newCount);
            }
          }}
        >
          <div className="increment__button">
            <DashCircleFill color={primaryColor} size={50} />
          </div>
        </a>
        <div style={{ flex: 1 }}>
          <h1
            style={{
              color: primaryColor,
              textAlign: "center",
              justifySelf: "center",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            {numberOfGuests}
          </h1>
        </div>
        <a
          onClick={() => {
            if (numberOfGuests < 10) {
              const newCount = numberOfGuests + 1;
              setNumberOfGuests(newCount);
              props.setGuestCount(newCount);
            }
          }}
        >
          <div className="increment__button">
            <PlusCircleFill color={primaryColor} size={50} />
          </div>
        </a>
      </div>
    </div>
  );
};
