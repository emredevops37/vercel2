import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Hoş Geldiniz</h1>
        <nav>
          <ul>
            <li><a href="#anasayfa">Ana Sayfa</a></li>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="anasayfa">
          <h2>Ana Sayfa</h2>
          <p>Web sitemize hoş geldiniz! Burada içeriğinizi gösterebilirsiniz.</p>
        </section>

        <section id="hakkimizda">
          <h2>Hakkımızda</h2>
          <p>Şirketimiz/projemiz hakkında bilgiler...</p>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Bize ulaşın: ornek@email.com</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Web Sitem. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
