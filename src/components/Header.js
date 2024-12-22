import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav>
      <Link to="/courses">Courses</Link>
      {localStorage.getItem('token') ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/">Login</Link>
      )}
    </nav>
  );
};

export default Header;
