import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate('/');
    } catch {
      alert('Registration failed.');
    }
  };

  return (
    <div className="register-page">
      <header>
        <div className="logo">My Courses</div>
        <nav>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/')}>Login</button>
        </nav>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Create an Account</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Register</button>
        </form>
      </main>

      <footer>&copy; {new Date().getFullYear()} MyCourseApp. All rights reserved.</footer>
    </div>
  );
};

export default Register;
