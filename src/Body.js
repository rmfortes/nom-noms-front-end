import React, { Component } from "react";
<<<<<<< HEAD
import FavoritesDummy from "./FavoritesDummy.js"

class Body extends Component {
  componentDidMount () {

  }
=======
import Search from "./Search";

class Body extends Component {
  componentDidMount() {
    // const url=//our url here
    // fetch(url)
    // .then(response => response.json())
    // .then(response => {
    //   let newUser = response
    //   this.props.addUser(newUser)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

>>>>>>> second-login-page-second-feature-branch
  render() {
    return (
      <div className="body">
        <div className="searchBar">
<<<<<<< HEAD
          <p>
            This is where our search bar will go.
            <input type="text"></input><input type="submit"></input>
          </p>
          <FavoritesDummy/>
=======
          <Search />
>>>>>>> second-login-page-second-feature-branch
        </div>
        <div className="recipes">
          <p>This is where our search results and recipes will go.</p>
        </div>
</div>
    );
  }
}

export default Body;
