import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const SideDropdown = (props) => {
  const [side, setSide] = useState(props.value);

  const dropdownItemStyle = {
    width: 200,
    textAlign: "center",
  };
  useEffect(() => {
    props.setSide(side);
  }, [side]);
  return (
    <DropdownButton
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      className="dropdown-not-filled"
      id="dropdown-basic-button"
      title={side || "בחרו צד"}
    >
      {props.sides.map((side, index) => {
        return (
          <Dropdown.Item
            key={index}
            style={dropdownItemStyle}
            onClick={() => setSide(side)}
          >
            {side}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
