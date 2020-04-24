import React, { Component } from "react";

import Search from "./Search";
import "./Body.css";
let searchURL = "https://nom-noms-api.herokuapp.com/search/?ingredient=";
let baseURL = "https://nom-noms-api.herokuapp.com/user/";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      FavoriteRecipes: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    const username = this.state.Username;
    const profilePageURL = `${baseURL}${username}`;
    const searchTerm = this.state.searchTerm;
    let searchURL = `https://nom-noms-api.herokuapp.com/search/?ingredient=${this.state.searchTerm}`;

    fetch(profilePageURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let profilePages = {
          Username: `${data.Username}`,
          Favorites: `${data.Favorites[0].FavoriteRecipes}`,
        };
        console.log(profilePages);
        this.props.setProfiles(profilePages);
        console.log(profilePages);
      });
  }
  usernameLogin = (e) => {
    e.preventDefault();
    this.setState({
      Username: e.target.value,
    });
    console.log(this.state);
  };

  passwordLogin = (e) => {
    e.preventDefault();
    this.setState({
      Password: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseURL}${this.state.Username}`)
      .then((res) => res.json())
      .then((data) => {
        if (
          this.state.Username == data.Username &&
          this.state.Password == data.Password
        ) {
          console.log("success");
          this.setState({ FavoriteRecipes: data.Favorites[0].FavoriteRecipes });
          console.log(this.state);
        }
      })
      .catch((err) => console.log(err));
  };

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
    // let display = this.props.profiles.map((profile, i) => {
    return (
      <div>
        <div className="body">
          <div className="searchBar">
            <Search />
          </div>
          <div className="results">
            <p>Your results:</p>
          </div>
          <div className="favorites">
            Your Favorites: {this.state.FavoriteRecipes}
          </div>
        </div>
        <div className="button">
          <button type="click">DELETE PROFILE</button>
        </div>
        <div>
          <form
            className={`forms-${this.props.type}`}
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              onChange={this.usernameLogin}
            ></input>
            <input
              type="text"
              placeholder="Password"
              onChange={this.passwordLogin}
            ></input>
            <input
              onSubmit={this.handleSubmit}
              type="Submit"
              placeholder="submit"
              value="Login"
            ></input>
          </form>
        </div>
      </div>
    );
    //   });
    //   return <div>{display}</div>;
    // }
  }
}
export default Body;
