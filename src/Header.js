import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
          <Link to="/" style={{textDecoration: "none"}}><h3>NomNoms</h3>
          </Link>
      </header>
    </div>
  );
}

export default Header;
