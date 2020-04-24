import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      FavoriteRecipes: [],
      redirect: null,
    };
  }

  usernameCreated = (e) => {
    e.preventDefault();
    this.setState({
      Username: e.target.value,
    });
  };

  passwordCreated = (e) => {
    e.preventDefault();
    this.setState({
      Password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let URL = `https://nom-noms-api.herokuapp.com/user/`;
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.setState({ redirect: "/user" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
