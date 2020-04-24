import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  userSubmit = (e) => {
    e.preventDefault();

    this.setState({
      searchTerm: e.target.value,
      //We are not setting the state of the username, we are setting the state of the body? Of what are we setting the state? 
    });
    console.log(this.state.searchTerm)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let URL = `https://nom-noms-api.herokuapp.com/search/?ingredient=${this.state.searchTerm}`;
    fetch(URL, {
      method: "GET",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
    }).catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          className={`forms-${this.props.type}`}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            onChange={this.userSubmit}
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

export default Search;
