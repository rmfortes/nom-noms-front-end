import React, { Component } from "react";

class Body extends Component {
  componentDidMount () {
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

  
  
  render() {
    return (
      <div className="body">
        <div className="searchBar">
          <p>
            This is where our search bar will go.
            <input type="text"></input><input type="submit"></input>
          </p>
        </div>
        <div className="results">
          <p>This is where our search results and recipes will go.</p>
        </div>
      </div>
    );
  }
}

export default Body;
