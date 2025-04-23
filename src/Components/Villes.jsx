import { useEffect, useState } from 'react';
import axios from 'axios';
import './Villes.css'

function Villes() {
  const [villes, setVilles] = useState([]);
  const [selectedVille, setSelectedVille] = useState(''); // Ville sélectionnée

  useEffect(() => {
    axios.get("https://benin-plus-api.onrender.com/api/villes")
      .then((response) => {
        setVilles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedVille(e.target.value);
  };

  // Filtrer la ville choisie
  const villeAffichee = villes.find(ville => ville.nom === selectedVille);

  return (
    <div className='ville-container'>
      <h2 className='ville-titre'>Choisissez une ville</h2>
      <select onChange={handleChange} value={selectedVille}>
        <option value="">-- Sélectionner une ville --</option>
        {villes.map((ville) => (
          <option key={ville._id} value={ville.nom}>
            {ville.nom}
          </option>
        ))}
      </select>

      {villeAffichee && (
        <div className='ville-card' style={{ marginTop: '20px' }}>
          <h3>{villeAffichee.nom}</h3>
          <p><strong>Description:</strong> {villeAffichee.description}</p>
          <p><strong>Histoire:</strong> {villeAffichee.histoire}</p>
          <p><strong>Culture:</strong> {villeAffichee.culture}</p>
          <p><strong>Activités économiques:</strong> {villeAffichee.activites_economiques}</p>
          <p><strong>Géographie:</strong> {villeAffichee.situation_geographique}</p>
          <p><strong>Spécialité culinaire:</strong> {villeAffichee.specialite_culinaire}</p>
          <p><strong>Langues:</strong> {villeAffichee.langues}</p>
          <p><strong>Produits locaux:</strong> {villeAffichee.produits_locaux}</p>
        </div>
      )}
    </div>
  );
}

export default Villes;
