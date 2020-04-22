import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Forms from './Forms.js';
import Buttons from './Buttons.js';
import CreateUser from './CreateUser.js';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
     <Switch>
      <Link>
    <Route path = "/" exact component={Forms}></Route>
    </Link>
    {Buttons}
    {CreateUser}
      </Switch>
      
  
    </div>
    </Router>
  );
}

export default App;
