import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="name">Nom Noms</p>
        </Link>
      </header>
    </div>
  );
}

export default Header;
