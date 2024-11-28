import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Link the CSS

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
