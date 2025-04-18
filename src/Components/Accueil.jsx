import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css';

function Accueil() {
  return (
   
    <> 
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/Benin,_un_amour_de_culture_et_tradition_Folklorique._02.jpg"
          alt="festival"
        />
        <Carousel.Caption>
          <h3>Mon Beau Bénin</h3>
          <p>Découvrez un pays où chaque culture mérite d'être explorée.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/Kankangui_instrument_de_musique_de_l'aire_cuturelle_Baatonu._03.jpg"
          alt="benin"
        />
        <Carousel.Caption>
          <h3>BENIN+</h3>
          <p>Un pays hospitalier</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/place_jean_bayol_porto_novo_benin-1-1024x685.jpg"
          alt="gaani"
        />
        <Carousel.Caption>
          <h3>Jardin Place Jean Bayol</h3>
          <p>Venez découvrir le berceau historique des royaumes africains tels que le Royaume du Dahomey.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

     {/* === Accès rapide aux sections populaires === */}
     <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ color: 'green' }}>
        À la Découverte des Trésors du Bénin
        </h2>
        
        <div className="row">
          {/* Tradition */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow" style={{ backgroundColor: '#f8d7da' }}>
              <img
                src="/img/image00005-1-scaled-800x500.jpeg"
                className="card-img-top"
                alt="Tradition"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title"> Héritages Vivants</h5>
                <p className="card-text">
                Plongez au cœur des traditions béninoises.
                Du culte vaudou aux fêtes royales, chaque région conserve des rituels uniques et riches de sens. Bénin + vous invite à découvrir les coutumes ancestrales, les danses tribales et les récits qui façonnent l’identité du pays.
                </p>
                <a href="/blog" className="btn btn-outline-danger">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>

          {/* Gastronomie */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow" style={{ backgroundColor: '#d4edda' }}>
              <img
                src="/toubani-credit-oukoikan-officiel-1200x675.webp"
                className="card-img-top"
                alt="Gastronomie"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Saveurs du Bénin</h5>
                <p className="card-text">
                Savourez les délices du Bénin.
               Wassa wassa, pâte noir, toubani, ou encore sauce d’arachide… La gastronomie béninoise est un véritable festin de saveurs et de couleurs. Retrouvez ici les plats typiques, leurs recettes et les histoires qui les accompagnent.
                </p>
                <a href="/blog" className="btn btn-outline-success">
                  Voir les recettes
                </a>
              </div>
            </div>
          </div>

          {/* Artisanat */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow" style={{ backgroundColor: '#fff3cd' }}>
              <img
                src="/hero1.jpg"
                className="card-img-top"
                alt="Artisanat"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mains d’Artisans</h5>
                <p className="card-text">
                L’art et le savoir-faire béninois à l’honneur.
                Du tissage traditionnel aux sculptures sur bois, l’artisanat du Bénin reflète l’âme de ses peuples. Explorez les créations locales, les techniques transmises de génération en génération, et les artisans passionnés qui perpétuent cet héritage.
                </p>
                <a href="/galerie" className="btn btn-outline-warning">
                  Explorer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     </>

   
  );
}

export default Accueil;
