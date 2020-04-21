import React from "react";
import { storiesOf } from "@storybook/react";

import Forms from "./Forms.js";
import CreateUser from "./CreateUser.js";

storiesOf("Forms", module)
  .add("Username Login", () => <Forms type="text" />)
  .add("Create Username", () => (
    <CreateUser type="text" placeholder="Create Username" />
  ));
