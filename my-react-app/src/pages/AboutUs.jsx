import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <div className="placeholder-section">
          <h1>About Us</h1>
          <p>Our story and passion for cookies — coming soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
