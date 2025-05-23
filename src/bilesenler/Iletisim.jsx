import React, { useState } from 'react';
import './Iletisim.css';

function Iletisim() {
  const [form, setForm] = useState({ ad: '', email: '', mesaj: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi. Teşekkürler!');
    setForm({ ad: '', email: '', mesaj: '' });
  };

  return (
    <section className="iletisim" id="iletisim">
      <h2>İletişim</h2>
      <div className="iletisim-container">
        {/* Sol: Flip Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>İletişim Bilgilerim</h3>
            </div>
            <div className="flip-card-back">
              <p><strong>E-posta:</strong> elifdikci52@gmail.com</p>
              <p><strong>Telefon:</strong> +90 543 946 35 27</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="iletisim-formu">
          <input
            type="text"
            name="ad"
            placeholder="Ad Soyad"
            value={form.ad}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mesaj"
            placeholder="Mesajınız"
            value={form.mesaj}
            onChange={handleChange}
            required
          />
          <button type="submit">Gönder</button>
        </form>
      </div>
    </section>
  );
}

export default Iletisim;



