import React, { useEffect, useState } from "react";
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons";

export const HowMany = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  return (
    <div
      style={{
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center" }}>כמה אתם?</h3>
      <div style={{ height: 10 }} />
      <div
        className="how__many"
        dir="ltr"
        style={{
          display: "inline-flex",
          columnGap: 20,
          borderRadius: 9999,
          padding: 10,
        }}
      >
        <a
          onClick={() => {
            if (numberOfGuests > 1) {
              setNumberOfGuests((prev) => prev - 1);
            }
          }}
        >
          <div className="increment__button">
            <DashCircleFill color="black" size={50} />
          </div>
        </a>
        <div style={{ flex: 1 }}>
          <h1
            style={{
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
              setNumberOfGuests((prev) => prev + 1);
            }
          }}
        >
          <div className="increment__button">
            <PlusCircleFill color="black" size={50} />
          </div>
        </a>
      </div>
    </div>
  );
};
