import React, { Component } from "react";
import "./Buttons.css";
import Forms from "./Forms";

import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Ingredients: [],
      URL: "",
    };
  }

  handleClick = e => {
    e.preventDefualt();
    console.log("I have been click");
    let URL = `https://nom-noms-api.herokuapp.com/search`;
    fetch(URL, {
      method: "GET",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <button className={classList} onClick={this.handleClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Buttons;

// const Buttons = props => {
//   let classList = "";

//   let types = ["login", "submit", "favorites"];

//   let onClick = () => {
//     console.log("I've been clicked!");
//   }

//   if (types.includes(props.type)) {
//     classList += ` button-${props.type}`;
//   }

//   return <button className={classList} onClick={props.onClick}>{props.label}</button>;

// };

// export default Buttons;

// function handleSubmit(e) {
//   e.preventDefault()
//   return (
//   <Router>
//   <Route path="/" exact component={Body}>

//   </Route>
//   </Router>
//   )}
