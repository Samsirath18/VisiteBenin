import React, { useState } from 'react';
import Villes from '../Components/Villes';
import SitesTouristiques from '../Components/SitesTouristiques';
import './Decouvrir.css';

const Decouvrir = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="discover-page">
        <h1 className="title">Explorez le Bénin</h1>

        <div className="dropdown-container">
          <select 
            id="main-dropdown" 
            onChange={handleDropdownChange} 
            className="dropdown main-dropdown"
          >
            <option value="">Choisissez une catégorie</option>
            <option value="villes">Villes</option>
            <option value="sites">Sites touristiques</option>
          </select>

          <img 
            src="/img/Ville-de-Cotonou-Place-de-lAmazon-Critikmag.webp" 
            alt="Place de l'Amazone à Cotonou" 
            className="hero-image"
          />
        </div>
      </div>

      <div className="results-container">
        {selectedOption === 'villes' && (
          <>
            <p className="info-text">Veuillez choisir une ville ci-dessous :</p>
            <Villes />
          </>
        )}
        {selectedOption === 'sites' && (
          <>
            <p className="info-text">Veuillez choisir un site touristique ci-dessous :</p>
            <SitesTouristiques />
          </>
        )}
      </div>
    </>
  );
};

export default Decouvrir;
