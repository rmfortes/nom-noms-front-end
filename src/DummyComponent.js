import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DummyComponent extends Component {
    render() {
        
        return (
            <div className="createDummy">
                <Link to="/user">I'm a dummy component! 
                I am standing in for the 'create username' fields</Link>
            </div>
        );
    }
}

export default DummyComponent;