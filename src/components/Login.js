import React, { useState } from 'react';
import loginLogo from "../images/icons/Login-cart.jpg";
import "./Login.css";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <Link to="/">
        <img className='login-logo' alt="logo-img" src={loginLogo} />
      </Link>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <h5>Password</h5>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button 
            className='login-signInBtn' 
            type='submit' 
            onClick={SignIn}
          >
            Sign in
          </button>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <button 
            className='login-registerBtn' 
            onClick={register}
          >
            Create Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
