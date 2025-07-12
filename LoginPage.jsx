import React from "react";
import "./Login.css"; // Import CSS
import logo from '../assets/logo.png';
import loginback from '../assets/loginback.jpeg';


export default function LoginPage() {
  return (
    <div className="login-container" style={{
        backgroundImage: `url(${loginback})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh',
      }}>
      <div className="login-box">
        <h2 className="title">Login</h2>

        <div className="avatar"><img src={logo} alt="App Logo" className="logo" /></div>

        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <button className="login-button">Login</button>
      </div>
    </div>
  );
}
