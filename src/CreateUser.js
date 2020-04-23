import React, { Component } from "react";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createUsername: "",
      createPassword: "",
    };
    this.usernameCreated = this.usernameCreated.bind(this);
    this.passwordCreated = this.passwordCreated.bind(this);
  }

  usernameCreated = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      username: e.target.username,
    });

    //this.setState { username: e.target.value}
  };

  passwordCreated = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      password: e.target.password,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    let URL = `http://localhost:4000/user`;
    fetch(URL, {
      method: "post",
      body: JSON.stringify(this.state), //converts joke object to JSON, then send that JSON to post requset
      headers: { "Content-type": "application/json" },
    });
    // fetch(URL)
    //   .then(res => res.json())
    //   .then(res => console.log(res));

    //fetch here
  };
  render() {
    return (
      <div>
        <form className={`forms-${this.props.type}`}>
          {" "}
          <input
            type="text"
            placeholder="Create Username"
            value={this.state.createUsername}
            onChange={this.usernameCreated}
          ></input>
          <input
            type="text"
            placeholder="Create Password"
            value={this.state.createPassword}
            onChange={this.passwordCreated}
          ></input>
          <input
            onClick={this.handleSubmit}
            type="Submit"
            placeholder="submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default CreateUser;
