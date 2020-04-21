import React from "react";
import "./Forms.css";

const Forms = props => (
  <form className={`forms-${props.type}`}>
    {" "}
    <input type="text" placeholder="Username"></input>
    <input type="text" placeholder="Password"></input>
  </form>
);

export default Forms;
