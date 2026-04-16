import { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={onClose}>&times;</button>
        <h2 className="auth-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        {isLogin ? (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <div className="form-group-checkbox">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Tick remember me</label>
            </div>
            <button type="submit" className="auth-submit-btn">Sign in button</button>
            <p className="auth-switch-text">
              Not A member ? <span onClick={() => setIsLogin(false)}>Sign Up Now</span>
            </p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>First Name Last Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>email address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>date of birth</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>password</label>
              <input type="password" placeholder="Create a password" required />
            </div>
            <button type="submit" className="auth-submit-btn">Sign Up</button>
            <p className="auth-switch-text">
              Already A member ? <span onClick={() => setIsLogin(true)}>Sign In</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
