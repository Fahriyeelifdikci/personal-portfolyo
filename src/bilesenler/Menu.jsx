import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#anasayfa">Ana Sayfa</a></li>
        <li><a href="#benkimim">Ben Kimim?</a></li>
        <li><a href="#yetenekler">Neler Yapabilirim?</a></li>
        <li><a href="#projelerim">Projelerim</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
