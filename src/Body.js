import React, { Component } from "react";
import "./Body.css";
let baseURL = "https://nom-noms-api.herokuapp.com/user/";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
    };
  }

  deleteData = () => {
    const username = this.props.match.params.Username;
    const profileURL = `${baseURL}${username}`;
    fetch(profileURL, {
      method: "DELETE",
      body: this.state,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="body">
        <div className="searchBar">
          <p>
            This is where our search bar will go.
            <input type="text"></input>
            <input type="submit"></input>
          </p>
        </div>
        <div className="results">
          <p>This is where our search results and recipes will go.</p>
        </div>
        <button type="click" onCLick={this.deleteData()}>
          DELETE PROFILE
        </button>
      </div>
    );
  }
}

export default Body;
