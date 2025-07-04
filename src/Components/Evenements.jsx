import React from 'react';
import './Evenements.css'; // Tu peux créer ce fichier pour du style personnalisé

function Evenements() {
  return (
    <div className="container my-5">
      <h1 className="text-success text-center mb-4">Événements Culturels</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <video className="img-fluid rounded shadow" controls>
            <source src="/video/Festival_des_arts_griotiques(360p).mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p>
            Le Bénin regorge de festivals, cérémonies traditionnelles et spectacles artistiques qui reflètent sa richesse culturelle. Participez aux événements qui font vibrer les villes et villages béninois tout au long de l’année.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src="/img/event1.jpg" alt="Festival 1" className="img-fluid rounded shadow mb-3" />
          <h5>Festival Vaudou</h5>
          <p>Une célébration spirituelle unique à Ouidah chaque 10 janvier.</p>
        </div>
        <div className="col-md-4">
          <img src="/img/event2.jpg" alt="Spectacle danses" className="img-fluid rounded shadow mb-3" />
          <h5>Danses traditionnelles</h5>
          <p>Des troupes locales se produisent lors des fêtes et rituels dans le nord du pays.</p>
        </div>
        <div className="col-md-4">
          <img src="/img/event3.jpg" alt="Festival musique" className="img-fluid rounded shadow mb-3" />
          <h5>Festival de musique moderne</h5>
          <p>Les talents béninois et africains se réunissent chaque été à Cotonou.</p>
        </div>
      </div>
    </div>
  );
}

export default Evenements;
