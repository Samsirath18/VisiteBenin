import React, { useState } from 'react';
import './Decouvrir.css';

const Decouvrir = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="discover-page">
      <h1 className="title">Explorez le Bénin</h1>

      <img 
        src="/img/Ville-de-Cotonou-Place-de-lAmazon-Critikmag.webp" 
        alt="Place de l'Amazone à Cotonou" 
        className="hero-image"
      />

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

        {selectedOption === 'villes' && (
          <select className="dropdown">
            <option value="Parakou">Parakou</option>
            <option value="Natitingou">Natitingou</option>
            <option value="Abomey">Abomey Calavi</option>
          </select>
        )}

        
      </div>
    </div>
  );
};

export default Decouvrir;
