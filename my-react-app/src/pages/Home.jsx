import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cookiesImg from '../assets/Cookies.png';
import cookies1Img from '../assets/Cookies1.png';

const bestSellers = [
  { id: 1, name: 'Chocolate Chips Cookies', price: '$6.99', img: cookies1Img },
  { id: 2, name: 'Chocolate Chips Cookies', price: '$6.99', img: cookies1Img },
  { id: 3, name: 'Chocolate Chips Cookies', price: '$6.99', img: cookies1Img },
];

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
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
            {bestSellers.map((item) => (
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
