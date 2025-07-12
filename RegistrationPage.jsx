import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "./Registration.css";
import bg3 from '../assets/bg3.png'

export default function RegistrationPage() {
  return (
    <div className="register-container"  style={{
    backgroundImage: `url(${bg3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '10vh',
  }}
>
      <div className="register-box">
        
        <h2 className="title">Register</h2>

        <div className="avatar"><img src={logo} alt="App Logo" className="logo" /></div>

        <input
          type="text"
          placeholder="Full Name"
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="input-field"
        />
         
        <button className="register-button">Register</button>
        <br />
        <Link to="/" className="link">Already have an account? Login</Link>
         <br />

      </div>
     
    </div>
  );
}
