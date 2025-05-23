import React from 'react';
import './UygulamaLinkleri.css';
import { FaGithub, FaXTwitter, FaFacebook } from 'react-icons/fa6';

function UygulamaLinkleri() {
  return (
    <footer className="uygulama-linkleri">
      <p>&copy; 2025 Fahri'nin Portfolyo Sitesi</p>
      <div className="ikonlar">
        <a href="https://github.com/kullaniciadiniz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}

export default UygulamaLinkleri;