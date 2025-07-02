import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sidebar-toggle-button" onClick={() => setOpen(!open)}>
       ⁘⁝
      </div>

      <div className={`sidebar-slide ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        <h2>Bénin +</h2>
        <nav>
          <Link to="/paiement" onClick={() => setOpen(false)}>Payer</Link>
          <Link to="/evenements" onClick={() => setOpen(false)}>Événements </Link>
          <Link to="/temoignages" onClick={() => setOpen(false)}>Témoignages</Link>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
