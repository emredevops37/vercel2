import React, { useState, useEffect } from 'react';
import './styles.css';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// Hero slider için resimler
import slide1 from './images/1.jpg';
import slide2 from './images/2.jpg';
import slide3 from './images/3.jpg';

// Ürün resimleri
import kabaZurna from './images/kaba-zurna.jpg';
import ortaZurna from './images/orta-zurna.jpg';
import curaZurna from './images/cura-zurna.jpg';
import proMey from './images/pro-mey.jpg';
import ogrenciMey from './images/ogrenci-mey.jpg';
import proBalaban from './images/pro-balaban.jpg';
import ogrenciBalaban from './images/ogrenci-balaban.jpg';
import kamisSeti from './images/kamıs-seti.jpg';

// Eksik resimler için Unsplash'tan geçici resimler
const kabaZurnaTemp = "https://images.unsplash.com/photo-1621144516187-bcc1789c7d6a?w=300&h=200&fit=crop";
const kamisSetTemp = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop";
const bakimYagiTemp = "https://images.unsplash.com/photo-1601390696201-26d122e73f94?w=300&h=200&fit=crop";
const temizlemeSetTemp = "https://images.unsplash.com/photo-1522687533888-1b4c530c4289?w=300&h=200&fit=crop";
const tamirSetTemp = "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=300&h=200&fit=crop";

// Kayan yazılar için içerik
const scrollingTexts = [
  "🎵 Profesyonel Zurna Yapımı",
  "🎼 Mey ve Balaban Üretimi",
  "🛠️ Bakım ve Onarım Hizmetleri",
  "✨ Özel Sipariş İmkanı",
  "📦 Türkiye'nin Her Yerine Kargo"
];

// Hero slider için içerik ve resimler
const heroSlides = [
  {
    title: "Kalite ve Güven",
    description: "El yapımı, profesyonel kalitede zurna, mey ve balaban üretimi",
    image: slide1
  },
  {
    title: "Profesyonel İşçilik",
    description: "Ustadan çırağa aktarılan bilgi birikimiyle üretim",
    image: slide2
  },
  {
    title: "Geleneksel El İşçiliği",
    description: "30 yıllık tecrübemizle en kaliteli enstrümanlar",
    image: slide3
  }
];

// Modal bileşeni
function ImageModal({ image, alt, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={image} alt={alt} />
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  // FAQ verisi
  const faqData = [
    {
      question: "Sipariş süreci nasıl işliyor?",
      answer: "Sipariş sürecimiz şu şekilde işlemektedir: İlk olarak istediğiniz ürünü seçip WhatsApp üzerinden bizimle iletişime geçebilirsiniz. Ürün detayları ve ödeme seçenekleri hakkında bilgi verdikten sonra, siparişiniz onaylanır ve üretim sürecine başlanır. Üretim süresi ortalama 2-3 ay sürmektedir. Ürününüz hazır olduğunda kargo ile size ulaştırılır."
    },
    {
      question: "Enstrümanların bakımı nasıl yapılmalı?",
      answer: "Enstrümanlarınızın uzun ömürlü olması için düzenli bakım çok önemlidir. Her kullanımdan sonra yumuşak bir bezle silinmeli, özel bakım yağı ile belirli aralıklarla yağlanmalıdır. Aşırı sıcak ve nemden korunmalı, direkt güneş ışığına maruz bırakılmamalıdır. Kullanılmadığı zamanlarda özel çantasında muhafaza edilmelidir."
    },
    {
      question: "Kargo süreci nasıl işliyor?",
      answer: "Ürünleriniz özel olarak tasarlanmış koruyucu kutularda, sigortalı kargo ile Türkiye'nin her yerine gönderilmektedir. Kargo süreci 1-3 iş günü içerisinde tamamlanır. Kargo takip numarası SMS ile tarafınıza iletilir."
    },
    {
      question: "Garanti kapsamı nedir?",
      answer: "Tüm ürünlerimiz üretim hatalarına karşı 2 yıl garantilidir. Garanti kapsamında; malzeme ve işçilik hatalarından kaynaklanan sorunlar, ses problemleri ve yapısal bozulmalar yer alır. Kullanıcı hatası, kaza sonucu oluşan hasarlar ve normal aşınma garanti kapsamı dışındadır."
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Havale/EFT, kredi kartı ile tek çekim veya taksitli ödeme seçeneklerimiz mevcuttur. Kredi kartına 6 taksit imkanı sunmaktayız. Kapıda ödeme seçeneğimiz bulunmamaktadır."
    }
  ];

  // Hero slider için otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Kayan yazılar için otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % scrollingTexts.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Ürün detayını gösterme fonksiyonu
  const showProductDetail = (product) => {
    setSelectedProduct(product);
  };

  // Resmi büyük gösterme fonksiyonu
  const showImage = (image, alt) => {
    setSelectedImage({ src: image, alt });
  };

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <nav>
            <ul>
              <li><a href="#anasayfa">Ana Sayfa</a></li>
              <li><a href="#hakkimizda">Hakkımızda</a></li>
              <li><a href="#urunlerimiz">Ürünlerimiz</a></li>
              <li><a href="#sss">S.S.S</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="anasayfa" className="hero-section">
          <div className="hero-slider">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`
                }}
              >
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            ))}
            <div className="slider-dots">
              {heroSlides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="scrolling-text-container">
          <div className="scrolling-text">
            {scrollingTexts.map((text, index) => (
              <span
                key={index}
                className={`scroll-item ${index === currentText ? 'active' : ''}`}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        <section id="hakkimizda">
          <h2>Hakkımızda</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={slide2} alt="Geleneksel El İşçiliği" />
            </div>
            <div className="about-text">
              <h3>Geleneksel El İşçiliği ve Ustalık</h3>
              <p>30 yıllık tecrübemizle, her bir enstrümanı geleneksel yöntemlerle, sabırla ve özenle üretiyoruz. Ustadan çırağa aktarılan kadim bilgilerimizi, modern tekniklerle harmanlayarak sizlere sunuyoruz.</p>
              <p>Her bir enstrüman, usta ellerimizde yaklaşık 2-3 ay süren titiz bir çalışmanın ürünüdür. Ağacın seçiminden başlayan süreç, doğal kurutma, el işçiliği ve son ses ayarlarına kadar her aşamada büyük bir özenle ilerler.</p>
              <p>Kullandığımız ağaçlar, yıllarca doğal yöntemlerle kurutulur ve her biri tek tek seçilir. Özellikle dut, erik ve şimşir ağaçlarını tercih ederek, en kaliteli sesi elde etmeyi hedefliyoruz.</p>
              <p>Bizim için her enstrüman bir sanat eseridir ve ustasının ruhunu taşır. Bu nedenle seri üretime geçmeden, her bir parçayı el yapımı olarak üretmeye devam ediyoruz.</p>
            </div>
          </div>
        </section>

        <section id="urunlerimiz">
          <h2>Ürünlerimiz</h2>
          <div className="category-section">
            <h3>Zurnalar</h3>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(kabaZurna, "Kaba Zurna")}>
                  <img src={kabaZurna} alt="Kaba Zurna" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Kaba Zurna</h4>
                <p>Profesyonel kalitede, dut ağacından üretilmiş kaba zurna</p>
                <p className="price">2500 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Kaba Zurna",
                  image: kabaZurna,
                  price: "2500 TL",
                  description: "Profesyonel kalitede, dut ağacından üretilmiş kaba zurna",
                  details: [
                    "Malzeme: Dut Ağacı",
                    "Uzunluk: 60cm",
                    "Ses Aralığı: 2.5 oktav",
                    "Akort: Re",
                  ],
                  features: [
                    "El yapımı işçilik",
                    "Doğal cilalı",
                    "Özel taşıma çantası dahil",
                    "2 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(ortaZurna, "Orta Zurna")}>
                  <img src={ortaZurna} alt="Orta Zurna" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Orta Zurna</h4>
                <p>Erik ağacından üretilmiş, orta boy zurna</p>
                <p className="price">2000 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Orta Zurna",
                  image: ortaZurna,
                  price: "2000 TL",
                  description: "Erik ağacından üretilmiş, profesyonel kalitede orta boy zurna",
                  details: [
                    "Malzeme: Erik Ağacı",
                    "Uzunluk: 52cm",
                    "Ses Aralığı: 2 oktav",
                    "Akort: Mi",
                  ],
                  features: [
                    "Geleneksel el işçiliği",
                    "Doğal cila",
                    "Taşıma çantası hediye",
                    "1 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(curaZurna, "Cura Zurna")}>
                  <img src={curaZurna} alt="Cura Zurna" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Cura Zurna</h4>
                <p>Şimşir ağacından üretilmiş, cura zurna</p>
                <p className="price">1800 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Cura Zurna",
                  image: curaZurna,
                  price: "1800 TL",
                  description: "Şimşir ağacından üretilmiş, kompakt boyutlu cura zurna",
                  details: [
                    "Malzeme: Şimşir Ağacı",
                    "Uzunluk: 45cm",
                    "Ses Aralığı: 1.5 oktav",
                    "Akort: Fa",
                  ],
                  features: [
                    "Hafif ve kompakt tasarım",
                    "Özel işçilik",
                    "Koruma kılıfı dahil",
                    "1 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
            </div>
          </div>

          <div className="category-section">
            <h3>Mey</h3>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(proMey, "Profesyonel Mey")}>
                  <img src={proMey} alt="Profesyonel Mey" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Profesyonel Mey</h4>
                <p>Erik ağacından, tam profesyonel mey</p>
                <p className="price">1800 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Profesyonel Mey",
                  image: proMey,
                  price: "1800 TL",
                  description: "Erik ağacından üretilmiş, profesyonel kalitede mey",
                  details: [
                    "Malzeme: Erik Ağacı",
                    "Uzunluk: 35cm",
                    "Ses Aralığı: 1.5 oktav",
                    "5 adet yedek kamış",
                  ],
                  features: [
                    "Profesyonel ses kalitesi",
                    "Özel seçilmiş kamışlar",
                    "Deri kaplı taşıma çantası",
                    "2 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(ogrenciMey, "Yarı Profesyonel Mey")}>
                  <img src={ogrenciMey} alt="Yarı Profesyonel Mey" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Yarı Profesyonel Mey</h4>
                <p>Dut ağacından, öğrenci meyi</p>
                <p className="price">1200 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Yarı Profesyonel Mey",
                  image: ogrenciMey,
                  price: "1200 TL",
                  description: "Dut ağacından üretilmiş, ��ğrenciler için ideal mey",
                  details: [
                    "Malzeme: Dut Ağacı",
                    "Uzunluk: 33cm",
                    "Ses Aralığı: 1.5 oktav",
                    "3 adet yedek kamış",
                  ],
                  features: [
                    "Öğrenmeye uygun tasarım",
                    "Dayanıklı yapı",
                    "Bez çanta hediye",
                    "1 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
            </div>
          </div>

          <div className="category-section">
            <h3>Balaban</h3>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(proBalaban, "Profesyonel Balaban")}>
                  <img src={proBalaban} alt="Profesyonel Balaban" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Profesyonel Balaban</h4>
                <p>Erik ağacından, profesyonel balaban</p>
                <p className="price">2000 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Profesyonel Balaban",
                  image: proBalaban,
                  price: "2000 TL",
                  description: "Erik ağacından üretilmiş, profesyonel kalitede balaban",
                  details: [
                    "Malzeme: Erik Ağacı",
                    "Uzunluk: 37cm",
                    "Ses Aralığı: 1.5 oktav",
                    "5 adet özel kamış",
                  ],
                  features: [
                    "Profesyonel ses kalitesi",
                    "El yapımı işçilik",
                    "Deri kaplı özel çanta",
                    "2 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
              <div className="product-card">
                <div className="product-image" onClick={() => showImage(ogrenciBalaban, "Başlangıç Balaban")}>
                  <img src={ogrenciBalaban} alt="Başlangıç Balaban" />
                  <div className="image-overlay">
                    <span>Büyük Görüntüle</span>
                  </div>
                </div>
                <h4>Başlangıç Balaban</h4>
                <p>Dut ağacından, öğrenci balabanı</p>
                <p className="price">1500 TL</p>
                <button className="detail-button" onClick={() => showProductDetail({
                  name: "Başlangıç Balaban",
                  image: ogrenciBalaban,
                  price: "1500 TL",
                  description: "Dut ağacından üretilmiş, öğrenciler için ideal balaban",
                  details: [
                    "Malzeme: Dut Ağacı",
                    "Uzunluk: 35cm",
                    "Ses Aralığı: 1.5 oktav",
                    "3 adet kamış",
                  ],
                  features: [
                    "Kolay üfleme",
                    "Dayanıklı yapı",
                    "Bez çanta hediye",
                    "1 yıl garanti"
                  ]
                })}>
                  Detayları Gör
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="sss">
          <h2>Sık Sorulan Sorular</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className={`faq-question ${activeQuestion === index ? 'active' : ''}`}
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeQuestion === index ? '−' : '+'}</span>
                </div>
                <div className={`faq-answer ${activeQuestion === index ? 'active' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p><strong>Adres:</strong> Davutpaşa Mahallesi, Esenler/İstanbul</p>
              <p><strong>Telefon:</strong> 0212 345 67 89</p>
              <p><strong>E-posta:</strong> info@zurna.net</p>
              <p><strong>Çalışma Saatleri:</strong> Hafta içi 09:00-18:00</p>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48164.92923771582!2d28.85655065136719!3d41.04047099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4e5c0bde8cf%3A0x580d6ea05c024613!2sEsenler%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1703420771695!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Esenler Konum"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2024 Zurna.net - Tüm hakları saklıdır.</p>
          </div>
          <div className="footer-section">
            <h4>Bizi Takip Edin</h4>
            <div className="social-links">
              <a href="https://facebook.com/zurnanet" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/zurnanet" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/zurnanet" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://wa.me/905336830805" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/905336830805" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      {/* Modal'ları ekleyelim */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      {selectedProduct && (
        <div className="product-detail-modal" onClick={() => setSelectedProduct(null)}>
          <div className="product-detail-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="product-detail-grid">
              <div className="product-detail-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="product-detail-info">
                <h2>{selectedProduct.name}</h2>
                <p className="price">{selectedProduct.price}</p>
                <p className="description">{selectedProduct.description}</p>
                
                <h3>Teknik Özellikler</h3>
                <ul>
                  {selectedProduct.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>

                <h3>Özellikler</h3>
                <ul>
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
