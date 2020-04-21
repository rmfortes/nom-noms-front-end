import React from "react";
import "./Buttons.css";

const Button = props => {
  let classList = "";

  let types = ["login", "submit", "favorites"];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
