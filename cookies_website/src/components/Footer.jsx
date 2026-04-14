import { Link } from 'react-router-dom';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=420+Pitt+Street+Haymarket+NSW+2000';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Column 1 - Brand */}
        <div className="footer-col">
          <div className="footer-brand-name">Brookies Shop</div>
          <p className="footer-tagline">
            Freshly baked cookies crafted with love, delivered straight to your door.
          </p>
        </div>

        {/* Column 2 - Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li>Sydney, NSW</li>
            <li>
              <a href="mailto:brookiesshop@email.com">brookiesshop@email.com</a>
            </li>
            <li>
              <a href="tel:0400000000">0400 000 000</a>
            </li>
            <li>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-address-link"
              >
                420 Pitt Street, Haymarket NSW 2000
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Policy */}
        <div className="footer-col">
          <h3>Policy</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Returns &amp; Refunds</a></li>
          </ul>
        </div>

        {/* Column 4 - Customer Service */}
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brookies Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
