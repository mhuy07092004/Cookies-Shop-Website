import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cookiesImg from '../assets/Cookies.png';
import cookies1Img from '../assets/Cookies1.png';

const FLASK_URL = 'http://127.0.0.1:5000';

const Home = () => {
  const [backendStatus, setBackendStatus] = useState('checking'); // 'checking' | 'ok' | 'error'
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    // Gọi API Flask khi trang load
    fetch(`${FLASK_URL}/api/cookies`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBackendStatus('ok');
        setCookies(data);
      })
      .catch((err) => {
        console.error('Flask backend error:', err);
        setBackendStatus('error');
      });
  }, []);

  // Fallback data nếu backend chưa có ảnh
  const displayCookies = cookies.length > 0
    ? cookies.map((c) => ({ ...c, img: cookies1Img, price: '$6.99' }))
    : [
        { id: 1, name: 'Chocolate Chips Cookies', price: '$6.99', img: cookies1Img },
        { id: 2, name: 'Oatmeal Cookies',         price: '$6.99', img: cookies1Img },
        { id: 3, name: 'Classic Sugar Cookies',   price: '$6.99', img: cookies1Img },
      ];

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* ── BANNER KIỂM TRA FLASK ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 24px',
        background: backendStatus === 'ok'
          ? 'rgba(34,197,94,0.15)'
          : backendStatus === 'error'
          ? 'rgba(239,68,68,0.15)'
          : 'rgba(234,179,8,0.15)',
        borderBottom: `2px solid ${
          backendStatus === 'ok' ? '#22c55e'
          : backendStatus === 'error' ? '#ef4444'
          : '#eab308'}`,
        fontSize: '14px',
        fontWeight: 500,
      }}>
        <span style={{ fontSize: '18px' }}>
          {backendStatus === 'ok' ? '🟢' : backendStatus === 'error' ? '🔴' : '🟡'}
        </span>
        <span>
          {backendStatus === 'checking' && 'Đang kết nối tới Flask backend...'}
          {backendStatus === 'ok'       && `Flask backend hoạt động bình thường — nhận được ${cookies.length} sản phẩm từ API`}
          {backendStatus === 'error'    && 'Không kết nối được Flask backend (http://127.0.0.1:5000). Kiểm tra terminal backend!'}
        </span>
      </div>

      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-slogan">Welcome to Brookies Shop</h1>
          <p className="hero-description">
            Freshly baked cookies made with love — crispy on the outside,
            soft and chewy on the inside. Discover our handcrafted flavours
            and treat yourself today!
          </p>
          <button className="hero-cta-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={cookiesImg} alt="Freshly baked cookies" />
        </div>
      </section>

      <main className="page-content">
        <section className="home-section">
          <h2 className="section-title">Our Best Selling</h2>
          <div className="product-grid">
            {displayCookies.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="product-card-body">
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="home-section">
          <h2 className="section-title">This Week&#39;s Offers</h2>
          <p className="empty-offers">No offers available right now. Check back soon!</p>
        </section>
        <section className="home-section">
          <h2 className="section-title">What Clients Say About Us</h2>
          <p className="empty-offers">No offers available right now. Check back soon!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
