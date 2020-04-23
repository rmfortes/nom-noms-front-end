import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="loginDummy">
               <Link to="/user"><p>I am a placeholder component. Eventually I'll be replaced by a Storybook Component.
                </p> </Link>
            </div>
        );
    }
}

export default Login;