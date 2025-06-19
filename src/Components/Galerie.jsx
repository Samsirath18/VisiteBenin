import React from 'react';
import './Galerie.css';
import { useNavigate } from 'react-router-dom';

function Galerie() {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    const section = document.getElementById('acheter');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const danses = [
    {
      titre: 'Agbadja',
      image: '/hq720.jpg',
      description: 'Originaire du sud-ouest du Bénin, l\'Agbadja est une danse festive aux mouvements d\'épaules dynamiques.',
      video: 'https://www.youtube.com/embed/example1'
    },
    {
      titre: 'Tipenti',
      image: '/Évenement_Folklorique_au_bénin,_un_mélange_de_tradition_et_de_modernitée._40.jpg',
      description: 'Danse de réjouissance de l\'Atacora, exécutée par les hommes pour célébrer la fin des travaux agricoles.',
      video: 'https://www.youtube.com/embed/example2'
    },
    {
      titre: 'Tèkè',
      image: '/maxresdefault (1).jpg',
      description: 'Danse du bâton pratiquée lors des cérémonies chez les Baatonu, symbolisant la joie des retrouvailles.',
      video: 'https://www.youtube.com/embed/example3'
    }
  ];

  const gastronomie = [
    {
      nom: 'Igname pilée',
      description: 'Un plat traditionnel préparé à base d\'igname bouillie et pilée, servi avec une sauce savoureuse.',
      image: '/igname-pilee-plat-traditionnel-du-benin.webp',
      video: 'https://www.youtube.com/embed/vid1'
    },
    {
      nom: 'Côme',
      description: 'Plat à base de farine de maïs fermentée, accompagné de sauce tomate épicée et de poisson frit.',
      image: '/le-come-plat-traditionnel-du-benin.webp',
      video: 'https://www.youtube.com/embed/vid2'
    },
    {
      nom: 'Wassa Wassa',
      description: 'Préparé à base de cossettes de manioc râpées, ce plat est populaire dans le nord du Bénin.',
      image: '/wassa-wassa-critikmag-1024x576.webp',
      video: 'https://www.youtube.com/embed/vid3'
    }
  ];

  return (
    <div className="galerie-page">
      <h1>🖼️ Artisanat Béninois</h1>
      <div className="section">
        <div className="card" onClick={handleBuyClick}>
          <img src="/bag1.jpg" alt="Sacs en cuir traditionnels" />
          <h3>Sacs traditionnels</h3>
          <p>Confectionnés à la main, ces sacs reflètent le savoir-faire ancestral des artisans béninois.</p>
        </div>
        <div className="card" onClick={handleBuyClick}>
          <img src="/hero1.jpg" alt="Sculptures en bois" />
          <h3>Sculptures en bois</h3>
          <p>Représentations artistiques de la culture béninoise, ces sculptures sont taillées dans du bois local.</p>
        </div>
        <div className="card" onClick={handleBuyClick}>
          <img src="/artisans-kda.webp" alt="Objets artisanaux divers" />
          <h3>Objets artisanaux divers</h3>
          <p>Une variété d'objets faits main, témoignant de la richesse de l'artisanat béninois.</p>
        </div>
      </div>

      <h1>💃 Danses Traditionnelles du Bénin</h1>
      <div className="section">
        {danses.map((danse, index) => (
          <div key={index} className="card">
            <img src={danse.image} alt={danse.titre} />
            <h3>{danse.titre}</h3>
            <p>{danse.description}</p>
            <iframe
              src={danse.video}
              title={danse.titre}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <h1 id="gastronomie">🍽️ Gastronomie Béninoise</h1>
      {gastronomie.map((plat, index) => (
        <div key={index} className="gastronomie-item">
          <div className="gastronomie-text">
            <img src={plat.image} alt={plat.nom} />
            <h3>{plat.nom}</h3>
            <p>{plat.description}</p>
          </div>
          <div className="gastronomie-video">
            <iframe
              src={plat.video}
              title={plat.nom}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}

      {/* Section Acheter simulée */}
      <div id="acheter" style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#ffe' }}>
        <h2 style={{ color: '#004d26' }}>🛒 Acheter des objets artisanaux</h2>
        <p>Vous pouvez acheter des articles artisanaux béninois ici...</p>
      </div>
    </div>
  );
}

export default Galerie;
