import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/home">HOME</Link></li>
        <li className="nav-item"><Link to="">FOOD-MENU</Link></li>
        <li className="nav-item"><Link to="">BARCODE</Link></li>
        <li className="nav-item"><Link to="">FEEDBACK</Link></li>
        <div className="nav-right">
          <li className="nav-item"><Link to="">CART</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;