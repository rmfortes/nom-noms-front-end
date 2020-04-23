import React, { Component } from "react";
import FavoritesDummy from "./FavoritesDummy.js"

class Body extends Component {
  componentDidMount () {

  }
  render() {
    return (
      <div className="body">
        <div className="searchBar">
          <p>
            This is where our search bar will go.
            <input type="text"></input><input type="submit"></input>
          </p>
          <FavoritesDummy/>
        </div>
        <div className="recipes">
          <p>This is where our search results and recipes will go.</p>
        </div>
</div>
    );
  }
}

export default Body;
