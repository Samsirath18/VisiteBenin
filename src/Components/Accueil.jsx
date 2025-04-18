import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css'
function Accueil() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Benin,_un_amour_de_culture_et_tradition_Folklorique._02.jpg"
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
          src="Kankangui_instrument_de_musique_de_l'aire_cuturelle_Baatonu._03.jpg"
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
          src="place_jean_bayol_porto_novo_benin-1-1024x685.jpg"
          alt="gaani"
        />
        <Carousel.Caption>
          <h3>Jardin Place Jean Bayol</h3>
          <p>Venez découvrir le berceau historique des royaumes africains.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Accueil;
