import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
export const IsComingDropdown = (props) => {
  const [isComing, setIsComing] = useState(props.value || "maybe");
  const dropdownItemStyle = {
    width: 200,
    textAlign: "center",
  };
  useEffect(() => {
    props.setIsComing(isComing);
  }, [isComing]);
  return (
    <DropdownButton
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      className="dropdown-not-filled"
      id="dropdown-basic-button"
      title={
        isComing === "yes" ? "כן" : isComing === "no" ? "לא" : "לא ידוע עדיין"
      }
    >
      <Dropdown.Item
        style={dropdownItemStyle}
        onClick={() => setIsComing("yes")}
      >
        כן
      </Dropdown.Item>
      <Dropdown.Item
        style={dropdownItemStyle}
        onClick={() => setIsComing("no")}
      >
        לא
      </Dropdown.Item>
      <Dropdown.Item
        style={dropdownItemStyle}
        onClick={() => setIsComing("maybe")}
      >
        לא ידוע עדיין
      </Dropdown.Item>
    </DropdownButton>
  );
};
