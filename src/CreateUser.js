import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
  }

  usernameCreated = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    this.setState({
      Username: e.target.value,
=======

    this.setState({
      username: e.target.value,
>>>>>>> 558e36619bca854a842826c51b4eec425a4644ad
    });
  };

  passwordCreated = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    this.setState({
      Password: e.target.value,
    });
=======

    this.setState({
      password: e.target.value,
    });

    console.log(this.state)
>>>>>>> 558e36619bca854a842826c51b4eec425a4644ad
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
<<<<<<< HEAD
    let URL = `https://nom-noms-api.herokuapp.com/user/`;
=======
    let URL = `https://nom-noms-api.herokuapp.com/user`;
>>>>>>> 558e36619bca854a842826c51b4eec425a4644ad
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
<<<<<<< HEAD
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
=======
      .then((res) => console.log(res));
>>>>>>> 558e36619bca854a842826c51b4eec425a4644ad
  };

  render() {
    return (
      <div>
        <form
          className={`forms-${this.props.type}`}
          onSubmit={this.handleSubmit}
        >
          {" "}
          <input
            type="text"
            placeholder="Create Username"
            onChange={this.usernameCreated}
          ></input>
          <input
            type="text"
            placeholder="Create Password"
            onChange={this.passwordCreated}
          ></input>
          <input
            onSubmit={this.handleSubmit}
            type="submit"
            placeholder="submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default CreateUser;
