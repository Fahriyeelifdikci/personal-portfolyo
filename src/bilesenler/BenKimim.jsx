import React from 'react';
import './BenKimim.css';
import Lottie from 'lottie-react';
import hayatanimasyonu from '../animasyonlar/Animation - 1748013649448.json';
import egitimanimasyonu from '../animasyonlar/Animation - 1748014240278.json';
import programanimasyonu from '../animasyonlar/Animation - 1748014545628.json';
import hedefanimasyonu from '../animasyonlar/Animation - 1748014983765.json';


function BenKimim() {
  return (
    <section className="benkimim" id="benkimim">
      <h2 className="benkimim-baslik">Ben Kimim?</h2>
      <div className="benkimim-kutular">
        {/* Hayatım */}
        <div className="benkimim-kutu">
          <Lottie
            animationData={hayatanimasyonu}
            loop={true}
            style={{ width: 150, height: 150, margin: '0 auto' }}
          />
          <h3>Hayatım</h3>
          <p>
              17 Ekim 2004’te Ordu’nun Ünye ilçesinde doğdum. İlkokul, ortaokul ve liseyi burada tamamladıktan sonra,
              eğitimime Balıkesir Üniversitesi’nde devam ettim.Merakım ve üretkenliğim, beni yeni şeyler keşfetmeye ve gelişmeye teşvik ediyor.
              Teknolojiye olan ilgim, öğrenme tutkumla birleşerek sürekli ilerlememi sağlıyor.İnsanlarla etkili iletişim kurmayı ve takım çalışmalarında aktif rol almayı önemsiyorum.
              İnsanlarla olan uyum yeteneğim sayesinde çeşitli mühendislik topluluklarında ve sosyal sorumluluk projelerinde görev alıyorum.Hayatımda sürekli yeniliklere açık olmak ve kendimi geliştirmek önceliğim.
          </p>
        </div>

        <div className="benkimim-kutu">
          <Lottie
            animationData={egitimanimasyonu}
            loop={true}
            style={{ width: 150, height: 150, margin: '0 auto' }}
          />
          <h3>Eğitimim</h3>
          <p>
              Şu anda Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.
              Yazılım geliştirme, kullanıcı arayüzü tasarımı ve problem çözme alanlarında kendimi geliştirmeye büyük bir tutkuyla devam ediyorum.
              Üniversite sürecimde teorik bilgimi pratiğe dökme fırsatları arıyor, yenilikçi projelerde yer almayı hedefliyorum.
              Ayrıca, sosyal sorumluluk projelerine katılarak takım çalışması ve liderlik deneyimlerimi güçlendiriyorum.
          </p>
        </div>

        {/* Programlama Dilleri */}
         <div className="benkimim-kutu">
          <Lottie
              animationData={programanimasyonu}
              loop
              style={{ width: 150, height: 150, margin: '0 auto' }} />
          <h3>Programlama Dilleri</h3>
          <p>
              C#, Java, Python, JavaScript, React ve PyQt5 gibi diller ve teknolojilerle aktif olarak çalışıyorum. Kullanıcı dostu arayüz tasarımından veritabanı yönetimine kadar geniş bir yelpazede deneyim sahibiyim.
              Yeni teknolojileri projeler geliştirerek öğrenmeyi ve uygulamayı sürdürüyorum.
          </p>
        </div>

        {/* Hedefler */}
       <div className="benkimim-kutu">
          <Lottie
            animationData={hedefanimasyonu}
            loop={true}
            style={{ width: 150, height: 150, margin: '0 auto' }}
          />
          <h3>Hedefler</h3>
          <p>
            Web ve mobil uygulama geliştirme alanlarında derinleşerek, yenilikçi ve sürdürülebilir dijital çözümler üretmeyi hedefliyorum.
              Sadece işlevsel değil, aynı zamanda estetik açıdan da özenli arayüzler tasarlamak benim için öncelikli.
              Amacım, teknolojiyi sade ve sezgisel deneyimlere dönüştürerek insan hayatına dokunan çözümler üretmek.
              İlham verici ve işlevsel dijital ürünler tasarlayarak, kendi izimi bırakmak istiyorum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenKimim;






