import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CookiesImg from '../assets/Cookies.png';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          Brookies<span> Shop</span>
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shipping"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Shipping
            </NavLink>
          </li>
          <li>
            <a href="#" className="navbar-login-btn" onClick={(e) => {
              e.preventDefault();
              setShowAuthModal(true);
            }}>
              Login
            </a>
          </li>
        </ul>
      </nav>
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;
