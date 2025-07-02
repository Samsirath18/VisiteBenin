import React, { useState } from 'react';
import './Galerie.css';
import { useNavigate } from 'react-router-dom';

function Galerie() {
  const navigate = useNavigate();
  const [categorieActive, setCategorieActive] = useState(null);

  const produits = {
    sacs: [
      {
        nom: 'Sac pagne wax',
        image: '/sac pagne.jpg',
        prix: '8 000 FCFA',
        description: 'Sac en tissu wax cousu à la main.',
      },
      {
        nom: 'Sac en cuir rouge',
        image: '/cuir.jpg',
        prix: '10 000 FCFA',
        description: 'Cuir véritable, fabrication artisanale.',
      },
      {
        nom: 'Sac tissé Abomey',
        image: '/sac-en-jute-wax-a-anses-rouge-1.jpeg.webp',
        prix: '7 500 FCFA',
        description: 'Fabriqué avec des fibres locales.',
      },
      {
        nom: 'Mini sac doré',
        image: '/dore.jpg',
        prix: '9 000 FCFA',
        description: 'Idéal pour les événements.',
      },
      {
        nom: 'Sac bandoulière',
        image: '/bando.jpg',
        prix: '6 500 FCFA',
        description: 'Pratique et léger, style moderne.',
      },
      {
        nom: 'Sac cabas',
        image: '/id.jpg',
        prix: '12 000 FCFA',
        description: 'Grand volume, très résistant.',
      },
    ],
    sculptures: [
      {
        nom: 'Statue roi Fon',
        image: '/bez.avif',
        prix: '15 000 FCFA',
        description: 'Représentation historique du royaume d’Abomey.',
      },
      {
        nom: 'Masque Yoruba',
        image: '/yoruba.jpg',
        prix: '11 000 FCFA',
        description: 'Utilisé lors de rituels traditionnels.',
      },
      {
        nom: 'Statuette gardien',
        image: '/gardient.jpg',
        prix: '9 500 FCFA',
        description: 'Symbole de protection des foyers.',
      },
      {
        nom: 'Sculpture femme peule',
        image: '/peul.jpg',
        prix: '13 000 FCFA',
        description: 'Inspirée des femmes du nord Bénin.',
      },
      {
        nom: 'Couple cultivateur en bois d’ébène',
        image: '/Couple Cultivateur en Bois Ébène _ Statuette Raphia.jpg',
        prix: '17 000 FCFA',
        description: 'Pièce rare taillée dans du bois noir.',
      },
      {
        nom: 'Trophée artisanat',
        image: '/prix.jpeg',
        prix: '10 000 FCFA',
        description: 'Récompense artisanale à collectionner.',
      },
    ],
    objets: [
      {
        nom: 'Masque mural',
        image: '/murale.webp',
        prix: '6 000 FCFA',
        description: 'Décoration murale traditionnelle.',
      },
      {
        nom: 'Calebasse décorée',
        image: '/calebase.jpg',
        prix: '4 500 FCFA',
        description: 'Peinte à la main par les femmes Goun.',
      },
      {
        nom: 'Ifé African Bronze Bracelet',
        image: '/akan.jpg',
        prix: '3 000 FCFA',
        description: 'Bijou traditionnel symbolique.',
      },
      {
        nom: 'Boîte à bijoux Baatonou',
        image: '/bronze.webp',
        prix: '5 500 FCFA',
        description: 'Bois gravé, fabrication artisanale.',
      },
      {
        nom: 'Marque-page royal',
        image: '/marque.jpg',
        prix: '2 500 FCFA',
        description: 'Souvenir artisanal de la cour d’Abomey.',
      },
      {
        nom: 'Tapis traditionnel tissé',
        image: '/tapis.jpg',
        prix: '9 000 FCFA',
        description: 'Design authentique et chaleureux.',
      },
    ],
  };

  const handleBuyClick = () => {
    const section = document.getElementById('acheter');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPaiement = (produitNom) => {
    navigate(`/paiement?produit=${encodeURIComponent(produitNom)}`);
  };

  return (
    <div className="galerie-page">
      <h1 style={{ marginTop: '4rem', textAlign: 'center', color: '#004d26' }}>
  🖼️ Artisanat Béninois
</h1>
      <div className="section">
        <div className="card" onClick={() => { setCategorieActive('sacs'); handleBuyClick(); }}>
          <img src="/bag1.jpg" alt="Sacs en cuir traditionnels" />
          <h3>Sacs traditionnels</h3>
          <p>Confectionnés à la main, ces sacs reflètent le savoir-faire ancestral des artisans béninois.</p>
        </div>
        <div className="card" onClick={() => { setCategorieActive('sculptures'); handleBuyClick(); }}>
          <img src="/hero1.jpg" alt="Sculptures en bois" />
          <h3>Sculptures en bois</h3>
          <p>Représentations artistiques de la culture béninoise, taillées dans du bois local.</p>
        </div>
        <div className="card" onClick={() => { setCategorieActive('objets'); handleBuyClick(); }}>
          <img src="/artisans-kda.webp" alt="Objets artisanaux divers" />
          <h3>Objets artisanaux divers</h3>
          <p>Objets faits main, témoignant de la richesse de l'artisanat béninois.</p>
        </div>
      </div>
      <h1 style={{marginTop: '4rem'  , textAlign: 'center', color: '#004d26'}}  >💃 Danses Traditionnelles du Bénin</h1>
<div className="section">
  {[
    {
      titre: 'Zolari',
      image: '/zolari.jpeg',
      description: "Zolarie est une danse traditionnelle dynamique du nord du Bénin (Djougou), caractérisée par des frappes de pieds et une synchronisation impressionnante en groupe. Elle est souvent exécutée lors des cérémonies de réjouissance.",
      video: 'https://www.youtube.com/embed/-6XftjJj8ho',
    },
    {
      titre: 'Tipenti',
      image: '/Évenement_Folklorique_au_bénin,_un_mélange_de_tradition_et_de_modernitée._40.jpg',
      description: "Danse de réjouissance de l'Atacora, exécutée par les hommes pour célébrer la fin des travaux agricoles.",
      video: 'https://www.youtube.com/embed/Ri-Ok7s0oCs',
    },
    {
      titre: 'Tèkè',
      image: '/maxresdefault (1).jpg',
      description: "Danse du bâton pratiquée lors des cérémonies chez les Baatonu, symbolisant la joie des retrouvailles.",
      video: 'https://www.youtube.com/embed/LpXpQSAWkIQ',
    },
  ].map((danse, index) => (
    <div key={index} className="card">
      <img src={danse.image} alt={danse.titre} />
      <h3>{danse.titre}</h3>
      <p>{danse.description}</p>
      <div className="video-wrapper">
        <iframe
          src={danse.video}
          title={danse.titre}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ))}
</div>
<h1 id="gastronomie"   style={{marginTop: '4rem'  , textAlign: 'center', color: '#004d26'}}  >🍽️ Gastronomie Béninoise</h1>
{[
  {
    nom: 'Igname pilée',
    description: "Un plat traditionnel préparé à base d'igname bouillie et pilée, servi avec une sauce savoureuse.",
    image: '/igname-pilee-plat-traditionnel-du-benin.webp',
    video: 'https://www.youtube.com/embed/RVhxVk9sKoU',
  },
  {
    nom: 'Côme',
    description: "Plat à base de farine de maïs fermentée, accompagné de sauce tomate épicée et de poisson frit.",
    image: '/le-come-plat-traditionnel-du-benin.webp',
    video: 'https://www.youtube.com/embed/fxbEfSLrKAI',
  },
  {
    nom: 'Wassa Wassa',
    description: "Préparé à base de cossettes de manioc râpées, ce plat est populaire dans le nord du Bénin.",
    image: '/wassa-wassa-critikmag-1024x576.webp',
    video: 'https://www.youtube.com/embed/AR-8ctgOaUw',
  },
].map((plat, index) => (
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


      

      <div id="acheter" style={{ marginTop: '5rem', padding: '2rem', backgroundColor: '#ffe' }}>
        <h2 style={{ color: '#004d26' }}>🛒 Boutique Artisanale</h2>
        {categorieActive ? (
          <div>
            <h3 style={{ color: '#c00', textTransform: 'capitalize' }}>
              Produits : {categorieActive}
            </h3>
            <div className="row">
              {produits[categorieActive].map((item, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img src={item.image} alt={item.nom} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.nom}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="text-danger fw-bold">{item.prix}</p>
                      <button
                        className="btn btn-success w-100"
                        onClick={() => goToPaiement(item.nom)}
                      >
                        Acheter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>📌 Cliquez sur un objet artisanal ci-dessus pour découvrir les produits disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Galerie;
