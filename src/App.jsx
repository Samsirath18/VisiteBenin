// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Accueil from './Components/Accueil';
import Decouvrir from './Components/Decouvrir';
import Blog from './Components/Blog';
import Galerie from './Components/Galerie';
import Villes from './Components/Villes';
import SitesTouristiques from './Components/SitesTouristiques';
import Sidebar from './Components/Sidebar';
import Evenements from './Components/Evenements';
import Temoignages from './Components/Temoignages';
import Paiement from './Components/Paiement';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // requis pour navbar-toggler





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="decouvrir" element={<Decouvrir />} />
          <Route path="blog" element={<Blog />} />
          <Route path="galerie" element={<Galerie />} />
           <Route path="evenements" element={<Evenements />} />
           <Route path="temoignages" element={<Temoignages />} />
           <Route path="paiement" element={<Paiement />} />
        
          <Route path="/test-sites" element={<SitesTouristiques />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
