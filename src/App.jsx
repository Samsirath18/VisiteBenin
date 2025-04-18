import React from 'react'
import Navbar from './Components/Navbar'
import Accueil from './Components/Accueil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Decouvrir from './Components/Decouvrir'
import Blog from './Components/Blog'
import Galerie from './Components/Galerie'
import Contact from './Components/Contact'
import Apropos from './Components/Apropos'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>    
        <Route path='/' element={<Accueil />} />
        <Route path='/decouvrir' element={<Decouvrir />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/galerie' element={<Galerie />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/A-propos' element={<Apropos />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
