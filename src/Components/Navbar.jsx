import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div className="container-fluid">
        <Link className="navbar-brand benin-logo" to="/">BENIN +</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/decouvrir">Découvrir</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galerie">Galerie</Link>
            </li>
            <li className="nav-item">
              <button className="custom-btn" ><Link className="nav-link" to="/contact">Contact</Link></button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
