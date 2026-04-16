import { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    dob: "",
    password: ""
  });

  // ✅ HANDLE REGISTER SUBMIT
  const handleRegister = (e) => {
    e.preventDefault();

    console.log("REGISTER CLICKED");
    console.log("DATA:", registerData);

    // 👉 sau này sẽ gọi API ở đây
    /*
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerData)
    })
    .then(res => res.json())
    .then(data => console.log(data));
    */
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>

        <button className="auth-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2 className="auth-title">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {/* ================= LOGIN ================= */}
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

            <button type="submit" className="auth-submit-btn">
              Sign in button
            </button>

            <p className="auth-switch-text">
              Not A member ?{" "}
              <span onClick={() => setIsLogin(false)}>
                Sign Up Now
              </span>
            </p>

          </form>
        ) : (
          /* ================= REGISTER ================= */
          <form className="auth-form" onSubmit={handleRegister}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    fullName: e.target.value
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Date of birth</label>
              <input
                type="date"
                required
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    dob: e.target.value
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value
                  })
                }
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign Up
            </button>

            <p className="auth-switch-text">
              Already A member ?{" "}
              <span onClick={() => setIsLogin(true)}>
                Sign In
              </span>
            </p>

          </form>
        )}

      </div>
    </div>
  );
};

export default AuthModal;