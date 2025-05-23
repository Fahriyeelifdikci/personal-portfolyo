import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [acik, setAcik] = useState(false);

  const toggleMenu = () => {
    setAcik(!acik);
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <div className="menu-logo">Portfolyom</div>
        <div className={`hamburger ${acik ? 'acik' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu-links ${acik ? 'acik' : ''}`}>
          <li><a href="#anasayfa" onClick={toggleMenu}>Ana Sayfa</a></li>
          <li><a href="#benkimim" onClick={toggleMenu}>Ben Kimim?</a></li>
          <li><a href="#yetenekler" onClick={toggleMenu}>Neler Yapabilirim?</a></li>
          <li><a href="#projelerim" onClick={toggleMenu}>Projelerim</a></li>
          <li><a href="#iletisim" onClick={toggleMenu}>İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;


