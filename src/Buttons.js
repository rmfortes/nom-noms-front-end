import React from "react";
import "./Buttons.css";
import Forms from "./Forms";

const Buttons = props => {
  let classList = "";

  let types = ["login", "submit", "favorites"];

  let onSubmit = () => {
    console.log("I've been clicked!");
  }

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  return <button className={classList} onClick={props.onClick}>{props.label}</button>;


};

export default Buttons;

// function handleSubmit(e) {
//   e.preventDefault()
//   return (
//   <Router>
//   <Route path="/" exact component={Body}>

//   </Route>
//   </Router>
//   )}
