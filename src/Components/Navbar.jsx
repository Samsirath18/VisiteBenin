import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand benin-logo" to="/">BENIN +</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/decouvrir" className="nav-link">Découvrir</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/galerie" className="nav-link">Galerie</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
