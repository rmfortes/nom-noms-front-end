import React from "react";

const CreateUser = props => (
  <form className={`forms-${props.type}`}>
    {" "}
    <input type="text" placeholder="Create Username" ></input>
    <input type="text" placeholder="Create Password" ></input>
    <input type="submit" ></input>
  </form>
);

export default CreateUser;
