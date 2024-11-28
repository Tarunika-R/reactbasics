import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"></h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item" activeclassname="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-item" activeclassname="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className="nav-item" activeclassname="active">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
