import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FavoritesDummy extends Component {
    render() {
        return (
            <div>
                <Link to="/">Show me my Favorites</Link>
            </div>
        );
    }
}

export default FavoritesDummy;