import React, { useState } from "react";
import { IsComingDropdown } from "./IsComingDropdown";
import { SideDropdown } from "./SideDropdown";
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

export const EditingLine = ({ currentDetails, sides, finishEditRow }) => {
  const [fullName, setFullName] = useState(currentDetails.fullName);
  const [isComing, setIsComing] = useState(currentDetails.isComing);
  const [phoneNumber, setPhoneNumber] = useState(currentDetails.phoneNumber);
  const [side, setSide] = useState(currentDetails.side);
  const [guestCount, setGuestCount] = useState(currentDetails.guestCount);
  const thStyle = {
    textAlign: "center",
  };
  return (
    <tr className="align-middle">
      <th style={thStyle}>
        <input
          style={{ width: 150 }}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="rounded text-center bg-primary"
        />
      </th>
      <th style={thStyle}>
        <input
          style={{ width: 150 }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="rounded text-center bg-primary"
        />
      </th>
      <th style={thStyle}>
        <input
          style={{ width: 70 }}
          value={guestCount}
          onChange={(e) =>
            e.target.value == ""
              ? setGuestCount(0)
              : setGuestCount(parseInt(e.target.value, 10))
          }
          type="number"
          className="rounded text-center bg-primary"
        />
      </th>
      <th style={thStyle}>
        <IsComingDropdown setIsComing={setIsComing} value={isComing} />
      </th>
      <th style={thStyle}>
        <SideDropdown sides={sides} setSide={setSide} value={side} />
      </th>
      <th style={thStyle}>
        <Button
          className={`btn-success p-1`}
          onClick={() => {
            finishEditRow({
              fullName: fullName,
              isComing: isComing,
              side: side,
              phoneNumber: phoneNumber,
              guestCount: guestCount,
            });
          }}
        >
          <Check size={30} />
        </Button>
      </th>
    </tr>
  );
};
