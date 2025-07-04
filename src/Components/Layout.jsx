import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop:'70px' }}>
      <Navbar />
      <Sidebar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
