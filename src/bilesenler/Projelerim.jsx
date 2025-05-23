import React from 'react';
import './Projelerim.css';
import robotfoto from '../img/robot.jpg';
import Lottie from 'lottie-react';
import burcanimasyon from '../animasyonlar/Animation - 1748018784252.json';
import soruanimasyon from '../animasyonlar/Animation - 1748019405165.json';
import notepadanimasyon from '../animasyonlar/Animation - 1748019856137.json';

function Projelerim() {
  const projeler = [
    {
      baslik: 'Tarım Robotu',
      aciklama: 'Bitki gelişimini analiz eden ve sulamayı otomatikleştiren bir tarım robotu geliştirdim.',
      link: 'https://github.com/fahri/tarim-robotu',
      resim: robotfoto
    },
    {
      baslik: 'Burç Rehberi',
      aciklama: 'PyQt5 ile doğum tarihine göre burç hesaplayan ve kullanıcıya özelliklerini gösteren bir uygulama.',
      link: 'https://github.com/Fahriyeelifdikci/BurcRehberi2025.git'
    },
    {
      baslik: 'Soru Bankası',
      aciklama: 'Derslere göre test soruları ekleyip cevaplama imkanı sunan bir JSON tabanlı test uygulaması.',
      link: 'https://github.com/Fahriyeelifdikci/SoruBankasi2025.git',
      resim: 'https://placehold.co/300x180/ddeeff/ffffff?text=Soru+Bankası'
    },
    {
      baslik: 'Notepad',
      aciklama: 'PyQt5 ile basit not alma, kaydetme ve açma işlevlerini içeren masaüstü not uygulaması.',
      link: 'https://github.com/Fahriyeelifdikci/Notepad.git',
      resim: 'https://placehold.co/300x180/ffeecc/000000?text=Notepad'
    }
  ];

  return (
    <section className="projelerim" id="projelerim">
      <h2>Projelerim</h2>
      <div className="proje-kartlari">
        {projeler.map((proje, index) => {
          let içerik;
          if (proje.baslik === 'Burç Rehberi') {
            içerik = <Lottie animationData={burcanimasyon} loop style={{ width: 200, height: 200, margin: '0 auto' }} />;
          } else if (proje.baslik === 'Soru Bankası') {
            içerik = <Lottie animationData={soruanimasyon} loop style={{ width: 200, height: 200, margin: '0 auto' }} />;
          } else if (proje.baslik === 'Notepad') {
            içerik = <Lottie animationData={notepadanimasyon} loop style={{ width: 200, height: 200, margin: '0 auto' }} />;
          }
          else {
            içerik = (
              <img
                src={proje.resim}
                alt={proje.baslik}
                className={proje.baslik === 'Tarım Robotu' ? 'kucuk-resim' : ''}
              />
            );
          }

          return (
            <div key={index} className="proje-karti">
              {içerik}
              <div className="proje-icerik">
                <h3>{proje.baslik}</h3>
                <p>{proje.aciklama}</p>
                {proje.baslik !== 'Tarım Robotu' && (
                  <a href={proje.link} target="_blank" rel="noopener noreferrer">
                    Github'da Gör
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projelerim;






