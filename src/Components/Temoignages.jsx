
import React from 'react';

function Temoignages() {
  const temoignages = [
    {
      nom: "Fatoumata T.",
      texte: "Le Bénin m’a offert l’un des plus beaux voyages culturels de ma vie. L’accueil des habitants est inoubliable.",
      image: "/tim.jpg",
    },
    {
      nom: "Jean-Michel K.",
      texte: "J’ai découvert l’artisanat béninois et j’ai pu rencontrer des sculpteurs passionnés. Une expérience authentique !",
      image: "/temoi.jpg",
    },
    {
      nom: "Aline D.",
      texte: "Assister à un festival traditionnel fut un choc culturel merveilleux. Les danses, les chants, l’énergie… Tout était magique.",
      image: "/fem.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-danger text-center mb-4">Témoignages</h1>

      <div className="row">
        {temoignages.map((temoin, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img src={temoin.image} className="card-img-top" alt={temoin.nom} />
              <div className="card-body">
                <h5 className="card-title">{temoin.nom}</h5>
                <p className="card-text">{temoin.texte}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Temoignages;
