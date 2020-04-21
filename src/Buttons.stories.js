import React from "react";
import { storiesOf } from "@storybook/react";

import Buttons from "./Buttons.js";

storiesOf("Buttons", module)
  .add("Login", () => <Buttons type="login" label="Login" />)
  .add("Submit", () => <Buttons type="submit" label="Submit" />)
  .add("Favorites", () => (
    <Buttons type="favorites" label="Add to Favorites" />
  ));
