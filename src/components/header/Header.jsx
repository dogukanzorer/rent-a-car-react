import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="nav container">
        <i className='bx bx-menu' id="menu" onClick={toggleMenu}></i>
        <a href="#about" className="logo">Dilek<span>Baler LLC</span></a>
        <ul className={`navbar ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cars">Cars</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
