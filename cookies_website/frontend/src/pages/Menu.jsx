import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
const Menu = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="page-content">
                <section className="home-section">
                    <h2 className="section-title">Our Menu</h2>
                    <div className="product-grid">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Menu;

