import React, { Component } from "react";
import "./Buttons.css";
import Forms from "./Forms";

let baseURL = "https://nom-noms-api.herokuapp.com/user/";

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Ingredients: [],
      URL: "",
      Username: "",
    };
  }

  handleClick = e => {
    e.preventDefualt();
    console.log("I have been click");
    const favoriteURL = "/Favorites/FavoriteRecipes";
    const newURL = `${baseURL}${this.state.Username}${favoriteURL}`;
    let newFavorite = {
      Ingredients: this.state.Ingredients,
    };
    fetch(newURL, {
      method: "PUT",
      body: {
        Name: this.state.Name,
        Ingredients: this.state.Ingredients,
        URL: this.state.URL,
      },
      headers: { "Content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <button
          className={`button-${props.type}`}
          type="favorites"
          onClick={this.handleClick}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Buttons;

// const Buttons = props => {
//   let classList = "";

//   let types = ["login", "submit", "favorites"];

//   let onClick = () => {
//     console.log("I've been clicked!");
//   }

//   if (types.includes(props.type)) {
//     classList += ` button-${props.type}`;
//   }

//   return <button className={classList} onClick={props.onClick}>{props.label}</button>;

// };

// export default Buttons;

// function handleSubmit(e) {
//   e.preventDefault()
//   return (
//   <Router>
//   <Route path="/" exact component={Body}>

//   </Route>
//   </Router>
//   )}
