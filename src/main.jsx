import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar.jsx'
import Accueil from './Components/Accueil.jsx'
import Decouvrir from './Components/Decouvrir.jsx'
import Blog from './Components/Blog.jsx'
import Contact from './Components/Contact.jsx'
import Galerie from './Components/Galerie.jsx'
import Footer from './Components/Footer.jsx'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <App />
  
  </StrictMode>,
)
