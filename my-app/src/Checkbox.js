import React from "react";
import "./styles/CheckBox.css";
/*
export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onChange={props.handleCheckfieldElement} onClick={props.handleCheckfieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox

*/
export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheckfieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.label}
    </li>
  );
};

export default CheckBox;
