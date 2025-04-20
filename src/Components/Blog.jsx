import React from 'react';
import './Blog.css';

const Blog = () => {
  const articles = [
    {
      title: 'Danses traditionnelles béninoises',
      image: '/img/dance-festival-1.png',
      description: 'Découvrez les rythmes vibrants et les mouvements ancestraux qui font vivre l’âme du Bénin.',
      link: 'https://www.google.com/search?q=Danses+traditionnelles+Bénin',
    },
    {
      title: 'Langues et dialectes',
      image: '/IMG-20200904-WA0008-1024x768.jpg.webp',
      description: 'Parcourez la diversité linguistique du Bénin, entre Fon, Yoruba, Bariba et bien d’autres.',
      link: 'https://www.google.com/search?q=Langues+et+dialectes+du+Bénin',
    },
    {
      title: 'Coutumes et rituels',
      image: '/img/benin_nouvelle_destination_touristique.jpg',
      description: 'Plongez dans les traditions et les cérémonies qui rythment la vie sociale et spirituelle.',
      link: 'https://www.google.com/search?q=Coutumes+et+rituels+du+Bénin',
    },
    {
      title: 'L’artisanat local',
      image: '/textile.jpg',
      description: 'Tissus, poteries, sculptures : l’ingéniosité des artisans béninois à l’honneur.',
      link: 'https://www.google.com/search?q=Artisanat+local+au+Bénin',
    },
    {
      title: 'Gastronomie béninoise',
      image: '/sauce-le-man-tindjan-pour-accompagne-le-pate-de-mais-plat-legendaire-du-benin-1024x1024.jpeg',
      description: 'Des mets riches et savoureux qui racontent une culture à travers ses saveurs.',
      link: 'https://www.google.com/search?q=Gastronomie+béninoise',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Le Blog de Bénin +</h1>
      <div className="blog-grid">
        {articles.map((article, index) => (
          <div key={index} className="blog-card">
            <img src={article.image} alt={article.title} className="blog-image" />
            <h2 className="blog-card-title">{article.title}</h2>
            <p className="blog-description">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="read-more">Lire plus</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
