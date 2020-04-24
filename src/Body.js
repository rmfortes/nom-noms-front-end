import React, { Component } from "react";
import "./Body.css";
let baseURL = "https://nom-noms-api.herokuapp.com/user/";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      Username: "arjunrawal07",
      Password: "",
      FavoriteRecipes: [],
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    const username = this.props.match.params.name;
    const profileURL = `${baseURL}${username}`;
    console.log(profileURL);

    fetch(profileURL)
      .then((res) => res.json())
      .then((data) => {
        let profilePages = data.map((profile) => ({
          Username: `${profile.name}`,
          FavoriteRecipes: `${profile.Favorites.FavoriteRecipes[0]}`,
        }));
        this.props.setProfiles(profilePages);
        console.log(profilePages);
      })
      .catch((err) => {
        console.log(err);
      });
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
    let display = this.props.profiles.map((profile, i) => {
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
          <div>Your Favorites: {profile.FavoriteRecipes}</div>
          <button type="click" onCLick={this.deleteData()}>
            DELETE PROFILE
          </button>
        </div>
      );
    });
    return <div>{display}</div>;
  }
}
export default Body;
