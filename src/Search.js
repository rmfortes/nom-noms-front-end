import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Favorites: "",
    };
  }

  userSubmit = e => {
    e.preventDefault();

    this.setState({
      Username: e.target.value,
    });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("hello");
    let URL = `https://nom-noms-api.herokuapp.com/user`;
    let localURL = "http://localhost:4000/user";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    }).catch(err => console.log(err));
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
            placeholder="Search"
            onChange={this.userSubmit}
          ></input>
          {/* <Link to="/user"> */}
          <input
            onSubmit={this.handleSubmit}
            type="submit"
            placeholder="submit"
          ></input>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default Search;
