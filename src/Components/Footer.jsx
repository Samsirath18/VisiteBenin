import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Colonne 1 - Logo + description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Bénin+</h4>
            <p>
              Explorez la richesse du Bénin à travers ses villes, sa culture, ses sites touristiques et bien plus encore.  
              Votre guide vers un Bénin authentique.
            </p>
          </div>

          {/* Colonne 2 - Liens de navigation */}
          <div className="col-md-4 mb-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/apropos" className="text-light text-decoration-none">À propos</a></li>
              <li><a href="/decouvrir" className="text-light text-decoration-none">Découvrir</a></li>
              <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="/galerie" className="text-light text-decoration-none">Galerie</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Contact info */}
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <p>Email : contact@beninplus.com</p>
            <p>Téléphone : +229 0160533415</p>
            <p>Parakou, Bénin</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Bénin+. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

