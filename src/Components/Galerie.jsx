import React from 'react'
import './Galerie.css';

function Galerie() {
  return (
    <div>
      <h1>Les plats ou mets les plus consommés de la cuisine béninoise</h1>
       <div className="section1">
          <div className="container1">
              <div className='image-container'>
                 <img src="igname-pilee-plat-traditionnel-du-benin.webp" alt="image1" />
              </div>
              <h3>Igname pilée</h3>
              <p>Un plat traditionnel béninois, préparé à base d'igname bouillie et pilée, servi avec une sauce riche et savoureuse.</p>
          </div>

          <div className="container1">
              <div className='image-container'>
                 <img src="le-come-plat-traditionnel-du-benin.webp" alt="image2" />
              </div>
              <h3>Côme</h3>
              <p>Le Côme est un plat traditionnel fait à partir de farine de maïs fermenté. Il est accompagné d’une sauce de tomate, du piment noir épicé et du poisson frit.</p>
          </div>
        
         <div className="container1">
            <div className='image-container'>
              <img src="sauce-le-man-tindjan-pour-accompagne-le-pate-de-mais-plat-legendaire-du-benin-1024x1024.jpeg" alt="image3" />
            </div>
            <h3>Manh tindjan</h3>
            <p>Véritable sauce légume qui accompagne très souvent la pâte de maïs (le toh) ou la pâte de télibô, cette sauce est une spécialité du Sud Bénin. </p>
         </div>
        
         <div className="container1">
            <div className='image-container'>
              <img src="attassi-watche-critikmag-1024x683.webp" alt="image4" />
            </div>
            <h3>Atassi ou Watché</h3>
            <p>C’est un plat fait à base de riz et de haricots.  L’atassi se prend avec du poisson, de la saucisse, de l’œuf ou du fromage fait à base de lait de vache.</p>
         </div>
       </div>
       
       <h1>Quelques lieux emblématques du Bénin</h1>
       <div className="section2">
           
            <div className='card'>
                <div className="monument">
                    <img src="amazone.jfif" alt="image" />
                </div>
            </div>
            <div className='card'>
                <div className="monument">
                    <img src="tata-somba.jfif" alt="image" />
                </div>
            </div>
            <div className='card'>
                <div className="monument">
                    <img src="ganvie.jfif" alt="image" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Galerie
