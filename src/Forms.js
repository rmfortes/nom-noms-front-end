import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
  render() {
    return (
      <div>
        {/* <form className={`forms-${props.type}`}>
          {" "} */}
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <input type="Submit" placeholder="submit"></input>
        {/* </form> */}
      </div>
    );
  }
}

export default Forms;
