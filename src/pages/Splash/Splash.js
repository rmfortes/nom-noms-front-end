import React from 'react';
//import Link from 'react-dom';
import './Splash.css';

function Splash(props) {

    return (
        <div id="splashdiv" className="splashdiv">
            <div className="splashinner">
                <h1>NomNoms</h1>
                <div className="input">
                    <h2>Login</h2>
                    <input type="text"></input>
                    <input type="text"></input>
                    <button>Login</button>
                </div>
                <div className="input">
                    <h2>Register</h2>
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )

}
export default Splash;