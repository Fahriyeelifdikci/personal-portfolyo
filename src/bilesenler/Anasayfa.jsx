import React, { useState, useEffect } from 'react';
import './Anasayfa.css';
import profil from '../img/profil.jpg';
import Menu from './Menu';
import { FaGithub, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

function Anasayfa() {
  const isim = "Fahriye Elif Dikci";
  const hosgeldin = "Hoş Geldiniz";
  const [displayedName, setDisplayedName] = useState("");
  const [displayedHosgeldin, setDisplayedHosgeldin] = useState("");

  useEffect(() => {
    let hosIndex = 0;
    const hosInterval = setInterval(() => {
      setDisplayedHosgeldin(hosgeldin.slice(0, hosIndex + 1));
      hosIndex++;
      if (hosIndex === hosgeldin.length) clearInterval(hosInterval);
    }, 100);

    let isimIndex = 0;
    let isimTimeout = setTimeout(() => {
      const isimInterval = setInterval(() => {
        setDisplayedName(isim.slice(0, isimIndex + 1));
        isimIndex++;
        if (isimIndex === isim.length) clearInterval(isimInterval);
      }, 150);
    }, hosgeldin.length * 100 + 300);

    return () => {
      clearInterval(hosInterval);
      clearTimeout(isimTimeout);
    };
  }, [isim, hosgeldin]);

  return (
    <>
      <Menu />
      <section id="anasayfa">
        <div className="kapsayici-alan">
          <div className="yazi-alani">
            <div className="hosgeldiniz-yazi">{displayedHosgeldin}</div>
            <h1 className="anim-isim">
              <span className="isim-renkli">{displayedName}</span>
            </h1>
            <p className="alt-baslik anim-soldan">Bilgisayar Mühendisliği <br /> Portföyüm</p>
            <a href="#iletisim" className="iletisim-buton anim-sag">İletişime Geç</a>

            <div className="ikonlar anim-sag">
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter size={28} />
              </a>
              <a href="https://github.com/Fahriyeelifdikci" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={28} />
              </a>
              <a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={28} />
              </a>
              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>

          <div className="resim-alani anim-sag">
            <img src={profil} alt="Profil Fotoğrafı" />
          </div>
        </div>

        <div className="asagi-kaydir-uyari">
          <p>Beni daha iyi tanımak için aşağı kaydırın</p>
          <div className="asagi-oku"></div>
        </div>
      </section>
    </>
  );
}

export default Anasayfa;









