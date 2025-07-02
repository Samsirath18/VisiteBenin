import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-success text-warning pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo + Description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Bénin+</h4>
            <p>
              Explorez la richesse du Bénin à travers ses villes, cultures et sites touristiques.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-4 mb-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-warning text-decoration-none">Accueil</a></li>
              <li><a href="/decouvrir" className="text-warning text-decoration-none">Découvrir</a></li>
              <li><a href="/blog" className="text-warning text-decoration-none">Blog</a></li>
              <li><a href="/galerie" className="text-warning text-decoration-none">Galerie</a></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5>Acheter</h5>
            <p><FaEnvelope className="me-2" /> samsirathsylla@gmail.com</p>
            <p><FaPhoneAlt className="me-2" /> +229 01 60 53 34 15/ 01 91 16 22 82</p>
            <p><FaMapMarkerAlt className="me-2" /> Parakou, Bénin</p>

            
          </div>
        </div>

        <hr className="border-warning" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Bénin+. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
