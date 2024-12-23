import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

//manually decode JWT
const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = JSON.parse(atob(base64));
    return decodedPayload;
  } catch (err) {
    console.error('Error decoding token:', err);
    return null;
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('https://backend-qp5o.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Invalid credentials');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      const decoded = decodeToken(token);
      if (decoded) {
        localStorage.setItem('isAdmin', decoded.isAdmin);
        navigate(decoded.isAdmin ? '/upload-course' : '/courses');
      } else {
        throw new Error('Failed to decode token');
      }
    } catch (err) {
      console.error('Login error:', err.message);
      setError(err.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <header>
        <div className="logo">Sharing Information</div>
        <nav>
        <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </nav>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome Back</h2>
          {error && <div className="error-message">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <button
            type="button"
            className="view-courses-button"
            onClick={() => navigate('/courses')}
          >
            View Courses
          </button>
        </form>
      </main>

      <footer>&copy; {new Date().getFullYear()} Online Course Project. All rights reserved.</footer>
    </div>
  );
};

export default Login;
