import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', firstname: '', email: '', message: '' }); // Etat pour stocker les données du formulaire
  const [status, setStatus] = useState(''); // Etat pour afficher un message de confirmation apres envoi

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }; // Fonction pour mettre à jour automatiquement  formData selon le champ modifié. Elle est utilisé quand
  //..l'utilisateur saisi sur un champ

  const handleSubmit = (e) => {
    e.preventDefault(); // Fonction appelée quand on soumet le formulaire. e.preventDefault pour empecher le rechargement de la page
    console.log('Données du formulaire :', formData);
    setStatus('Message envoyé ! Merci de nous avoir contacté.'); 
    setFormData({ name: '', firstname: '', email: '', message: '' }); //Réinitialise les champs du formulaire après envoi
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulaire de Contact</h2>

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm ">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" id="name" name="name" className="form-control" 
            value={formData.name} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">Prénom</label>
          <input type="text" id="firstname" name="firstname" className="form-control" 
            value={formData.firstname} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control"
            value={formData.email} onChange={handleChange}required/>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-control" rows="4"
            value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>

      {status && <div className="alert alert-success mt-3">{status}</div>}
    </div>
  );
}

export default Contact;
