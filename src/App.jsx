// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Accueil from './Components/Accueil';
import Decouvrir from './Components/Decouvrir';
import Blog from './Components/Blog';
import Galerie from './Components/Galerie';
import Contact from './Components/Contact';
import Apropos from './Components/Apropos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="decouvrir" element={<Decouvrir />} />
          <Route path="blog" element={<Blog />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="contact" element={<Contact />} />
          <Route path="A-propos" element={<Apropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
