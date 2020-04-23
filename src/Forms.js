import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
  render() {
    const Forms = props => (
    <form className={`forms-${props.type}`}>
      {" "}
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Password"></input>
      <input type="Submit" placeholder="submit"></input>
    </form>
    );
    return <div></div>;
  }
}

export default Forms;
