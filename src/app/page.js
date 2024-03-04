// src/pages/Home.js (or index.js, depending on your file name)
import React from 'react';
import CreateInvoice from '../pages/createInvoices';
import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';
import '../styles/Home.css'; // Create a new stylesheet for Home if needed

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <CreateInvoice />
      </div>
    </div>
  );
};

export default Home;
