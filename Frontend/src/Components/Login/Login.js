import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Login.css'; 
import { Eye, EyeOff } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faApple } from '@fortawesome/free-brands-svg-icons';

function Login() {
  
  const history = useNavigate();
  const [user, setUser] = useState({
    gmail: "",
    password: "" 

  })
    const [showPassword, setShowPassword] = useState(false);
    
  const handleInputChange =(e)=>{
    const {name, value} = e.target;
    setUser((prevUser)=> ({ ...prevUser,[name]: value }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await  sendRequest();
      if (response.status === "ok")
      {
      alert('Login Success');
      history('/coursedetails');
    }else{
      alert('Login Error');
    }
    } catch (err) {
      alert( "error" + err.message);
    }

  }
  const sendRequest = async() =>{
    return await axios
    .post("http://localhost:5000/login",{
      gmail: user.gmail,
      password: user.password,     
    }).then(res => res.data);
  }
const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div>
      <Nav />
      
      <div className="login-page">
        <div className="login-container">
          {/* Left side - Logo and description */}
          <div className="left-section">
            <div className="logo-login-container">
              <div className="logo-login">
                <img src="/img/logo-regi.png" alt="Logo" className="logo-regi" />  
              </div>
            </div>
            {/*<h3 className="welcome-text">Join The Learning Hub – Unlock Your Potential!</h3>*/}
            <p className="description">
              Log in to continue your learning journey and access your courses anytime, anywhere.
            </p>
          </div>

          {/* Right side - Registration form */}
          <div className="right-section">
            <form onSubmit={handleSubmit} className="login-form">


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
                <label>Password</label>
                <div className="password-input-container">
                  <input
                    type="password"
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
                Login
              </button>

              <div className="login-link">
                <span>Create new account</span>
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
    
  )
}

export default Login