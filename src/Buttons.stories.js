import React from "react";
import { storiesOf } from "@storybook/react";

import Buttons from "./Buttons.js";

let onClick = () => {
  console.log("I've been clicked!");
}

storiesOf("Buttons", module)
  .add("Login", () => <Buttons type="login" label="Login" onClick={onClick}/>)
  .add("Submit", () => <Buttons type="submit" label="Submit" />)
  .add("Favorites", () => (
    <Buttons type="favorites" label="Add to Favorites" />
  ));
