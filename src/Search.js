import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: [],
    };
  }

  userSubmit = (e) => {
    e.preventDefault();

    this.setState({
      searchTerm: e.target.value,
      //We are not setting the state of the username, we are setting the state of the body? Of what are we setting the state?
    });
    console.log(this.state.searchTerm);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let URL = `https://nom-noms-api.herokuapp.com/search/?ingredient=${this.state.searchTerm}`;
    fetch(URL)
      .then((res) => res.json())
      .then((searchData) => {
        console.log(searchData);
        this.setState({
          searchResults: searchData,
        });
      });
  };

  render() {
    let recipes = this.state.searchResults.map((recipe, i) => {
      return (
        <div key={i}>
          <ul>
            <Link
              className="urlLink"
              activeStyle={{ color: "blue" }}
              to={recipe.URL}
            >
              {recipe.Name} <br></br>
            </Link>
          </ul>
        </div>
      );
    });
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
        <div className="searchResults">
          Search Results: {recipes} <br></br>
        </div>
      </div>
    );
  }
}

export default Search;
