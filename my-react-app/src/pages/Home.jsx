import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <div className="placeholder-section">
          <h1>Welcome to Brookies Shop</h1>
          <p>Freshly baked cookies, coming soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
