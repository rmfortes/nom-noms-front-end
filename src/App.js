import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import Register from './pages/Onboarding/Register';
import './App.css';
/*
App starts on splash page if a user isn't logged in. 
Splash page allows for logging in or registering.
If registering is selected, component swaps out 
*/
function App() {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Splash>

          </Splash>
        </Route>
        <Route exact path="/register">
          <Register>

          </Register>
        </Route>
      </Switch> 
    </div>
  </Router>)
}

export default App;
