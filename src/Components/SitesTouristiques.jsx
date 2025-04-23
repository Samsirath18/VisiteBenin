import { useEffect, useState } from 'react';
import axios from 'axios';
import './Sites.css'

function SitesTouristiques() {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState('');

  useEffect(() => {
    axios.get("https://benin-plus-api.onrender.com/api/sites")
      .then((response) => {
        setSites(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des sites :", error);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedSite(e.target.value);
  };

  const siteAffiche = sites.find(site => site.nom === selectedSite);

  return (
    <div className='sites-container'>
      <h2 className='site-title'>Choisissez un site touristique</h2>
      <select onChange={handleChange} value={selectedSite}>
        <option value="">-- Sélectionner un site --</option>
        {sites.map((site) => (
          <option key={site._id} value={site.nom}>
            {site.nom}
          </option>
        ))}
      </select>

      {siteAffiche && (
        <div className='site-card' style={{ marginTop: '20px' }}>
          <h3>{siteAffiche.nom}</h3>
         
          <p><strong>Description :</strong> {siteAffiche.description}</p>
          <p><strong>Localisation:</strong> {siteAffiche.localisation}</p>
        
        </div>
      )}
    </div>
  );
}

export default SitesTouristiques;
