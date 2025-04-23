import React from 'react';
import './Galerie.css';

function Galerie() {
  return (
    <div className="galerie-container">
      <h1>🖼️ Artisanat Béninois</h1>
      <div className="section">
        <div className="card">
          <img src="/bag1.jpg" alt="Sacs en cuir traditionnels" />
          <h3>Sacs en  traditionnels</h3>
          <p>Confectionnés à la main, ces sacs reflètent le savoir-faire ancestral des artisans béninois.</p>
        </div>
        <div className="card">
          <img src="/hero1.jpg" alt="Sculptures en bois" />
          <h3>Sculptures en bois</h3>
          <p>Représentations artistiques de la culture béninoise, ces sculptures sont taillées dans du bois local.</p>
        </div>
        <div className="card">
          <img src="/artisans-kda.webp" alt="Objets artisanaux divers" />
          <h3>Objets artisanaux divers</h3>
          <p>Une variété d'objets faits main, témoignant de la richesse de l'artisanat béninois.</p>
        </div>
      </div>

      <h1>💃 Danses Traditionnelles du Bénin</h1>
      <div className="section">
        <div className="card">
          <img src="/hq720.jpg" alt="Danse Agbadja" />
          <h3>Agbadja</h3>
          <p>Originaire du sud-ouest du Bénin, l'Agbadja est une danse festive aux mouvements d'épaules dynamiques.</p>
        </div>
        <div className="card">
          <img src="/Évenement_Folklorique_au_bénin,_un_mélange_de_tradition_et_de_modernitée._40.jpg" alt="Danse Tipenti" />
          <h3>Tipenti</h3>
          <p>Danse de réjouissance de l'Atacora, exécutée par les hommes pour célébrer la fin des travaux agricoles.</p>
        </div>
        <div className="card">
          <img src="/maxresdefault (1).jpg" alt="Danse Tèkè" />
          <h3>Tèkè</h3>
          <p>Danse du bâton pratiquée lors des cérémonies chez les Baatonu, symbolisant la joie des retrouvailles.</p>
        </div>
      </div>

      <h1>🍽️ Gastronomie Béninoise</h1>
      <div className="section">
        <div className="card">
          <img src="/igname-pilee-plat-traditionnel-du-benin.webp" alt="Igname pilée" />
          <h3>Igname pilée</h3>
          <p>Un plat traditionnel préparé à base d'igname bouillie et pilée, servi avec une sauce savoureuse.</p>
        </div>
        <div className="card">
          <img src="/le-come-plat-traditionnel-du-benin.webp" alt="Côme" />
          <h3>Côme</h3>
          <p>Plat à base de farine de maïs fermentée, accompagné de sauce tomate épicée et de poisson frit.</p>
        </div>
        <div className="card">
          <img src="/wassa-wassa-critikmag-1024x576.webp" alt="Atassi" />
          <h3>Wassa Wassa</h3>
          <p>Le Wassa Wassa est un mets traditionnel préparé à base de cossettes de manioc râpées puis cuites à la vapeur. Il est souvent accompagné de légumes, de poisson ou de viande et relevé avec une sauce épicée. C’est un plat populaire dans le nord du Bénin, apprécié pour sa texture granuleuse et son goût légèrement fermenté.</p>
        </div>
      </div>
    </div>
  );
}

export default Galerie;
