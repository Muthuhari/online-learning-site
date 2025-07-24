import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Eye, EyeOff } from 'lucide-react';
import './Register.css';
import Contacts from "../Contacts/Contacts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faApple } from '@fortawesome/free-brands-svg-icons';


function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    createPassword: "",
    password: "",
  });
  
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (user.createPassword !== user.password) {
      alert('Passwords do not match!');
      return;
    }
    
    sendRequest().then(() => {
      alert('Register Success');
      history('/coursedetails');
    }).catch((err) => {
      alert(err.message);
    });
  };
  
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/register", {
      name: String(user.name),
      gmail: String(user.gmail),
      password: String(user.password),     
    }).then(res => res.data);
    console.log(user, "user check");
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div>
      <Nav />
      
      <div className="register-page">
        <div className="register-container">
          {/* Left side - Logo and description */}
          <div className="left-section">
            <div className="logo-regi-container">
              <div className="logo-regi">
                <img src="/img/logo-regi.png" alt="Logo" className="logo-regi" />  
              </div>
            </div>
            <h3 className="welcome-text">Join The Learning Hub – Unlock Your Potential!</h3>
            <p className="description">
              Create your free account and start learning with expert-led courses, hands-on projects, 
              and industry-recognized certifications.
            </p>
          </div>

          {/* Right side - Registration form */}
          <div className="right-section">
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={user.name || ''}
                  required
                />
              </div>

              <div className="form-group">
                <label>Gmail</label>
                <input
                  type="email"
                  name="gmail"
                  onChange={handleInputChange}
                  value={user.gmail || ''}
                  required
                />
              </div>

              <div className="form-group">
                <label>Create Password</label>
                <div className="password-input-container">
                  <input
                    type={showCreatePassword ? "text" : "password"}
                    name="createPassword"
                    onChange={handleInputChange}
                    value={user.createPassword || ''}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowCreatePassword(!showCreatePassword)}
                  >
                    {showCreatePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleInputChange}
                    value={user.password || ''}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="signup-btn">
                Sign Up
              </button>

              <div className="login-link">
                <span>Already have an account</span>
              </div>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-buttons">
  <button
    type="button"
    className="social-btn google-btn"
    onClick={() => handleSocialLogin('google')}
  >
    <span className="social-icon">
      <FontAwesomeIcon icon={faGoogle} />
    </span>
  </button>

  <button
    type="button"
    className="social-btn facebook-btn"
    onClick={() => handleSocialLogin('facebook')}
  >
    <span className="social-icon">
      <FontAwesomeIcon icon={faFacebookF} />
    </span>
  </button>

  <button
    type="button"
    className="social-btn apple-btn"
    onClick={() => handleSocialLogin('apple')}
  >
    <span className="social-icon">
      <FontAwesomeIcon icon={faApple} />
    </span>
  </button>
</div>

            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Register;