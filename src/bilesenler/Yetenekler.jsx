import React from 'react';
import './Yetenekler.css';
import { FaHtml5, FaJs, FaMobileAlt } from 'react-icons/fa';
import Lottie from 'lottie-react';
import csharpanimasyon from '../animasyonlar/Animation - 1748015723798.json';
import htmlanimasyon from '../animasyonlar/Animation - 1748016066901.json';
import javaanimasyon from '../animasyonlar/Animation - 1748016436985.json';
import flutteranimasyon from '../animasyonlar/Animation - 1748017541896.json';


function Yetenekler() {
  return (
    <section className="yetenekler" id="yetenekler">
      <h2 className="yetenekler-baslik">Yeteneklerim</h2>
      <div className="yetenekler-kutular">

        {/* C# */}
        <div className="yetenekler-kutu">
          <div className="lottie-alani">
            <Lottie animationData={csharpanimasyon} loop={true} style={{ height: 100 }} />
          </div>
          <h3>C#</h3>
          <p>
            Nesne yönelimli programlama ilkelerini kullanarak masaüstü uygulamaları geliştirebilirim. Visual Studio ortamında Windows Forms ve WPF projeleri ürettim.
          </p>
        </div>

        {/* HTML & CSS */}
        <div className="yetenekler-kutu">
          <div className="lottie-alani">
            <Lottie animationData={htmlanimasyon} loop={true} style={{ height: 100 }} />
          </div>
          <h3>HTML & CSS</h3>
          <p>
            Web sayfalarının iskeletini oluşturan HTML yapıları ve stil tasarımı için CSS kullanarak modern, responsive ve kullanıcı dostu arayüzler geliştirebilirim.
          </p>
        </div>

        {/* JavaScript */}
        <div className="yetenekler-kutu">
          <div className="lottie-alani">
            <Lottie animationData={javaanimasyon} loop={true} style={{ height: 100 }} />
          </div>
          <h3>JavaScript</h3>
          <p>
            JavaScript ile kullanıcı etkileşimlerini yönetebiliyorum. Web sayfalarına dinamik ve işlevsel özellikler ekleyerek etkileşimi artırıyorum.
          </p>
        </div>

        {/* Flutter */}
        <div className="yetenekler-kutu">
          <div className="lottie-alani">
            <Lottie animationData={flutteranimasyon} loop={true} style={{ height: 100 }} />
          </div>
          <h3>Flutter</h3>
          <p>
            Temel düzeyde Flutter bilgisine sahibim. Basit kullanıcı arayüzleri oluşturabilir, sayfalar arası geçiş ve temel widget yapılarıyla mobil uygulama prototipleri geliştirebilirim.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Yetenekler;


