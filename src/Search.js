import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  //     method: "GET",
  //     body: JSON.stringify(this.state),
  //     headers: { "Content-type": "application/json" },
  //   }).catch((err) => console.log(err));
  // };
  // fetch(searchURL)
  //   .then((res) => res.json())
  //   .then((searchData) => {
  //     console.log(searchData);
  //     let searchResults = searchData.map((search) => ({
  //       searchTerm: `${searchTerm}`,
  //     }));
  //     console.log(searchResults);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  render() {
    let recipes = this.state.searchResults.map((recipe, i) => {
      return (
        <div className="searchResults" key={i}>
          <ul>
            {recipe.Name} <br></br>
            {recipe.URL}
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
