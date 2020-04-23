import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
          <Link to="/"><p>NomNoms</p></Link>
      </header>
    </div>
  );
}

export default Header;
