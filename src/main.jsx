import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar.jsx'
import Accueil from './Components/Accueil.jsx'
import Decouvrir from './Components/Decouvrir.jsx'
import Blog from './Components/Blog.jsx'
import Galerie from './Components/Galerie.jsx'
import Footer from './Components/Footer.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Evenements from './Components/Evenements.jsx'
import Temoignages from './Components/Temoignages.jsx'
import Paiement from './Components/Paiement.jsx'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <App />
  
  </StrictMode>,
)
