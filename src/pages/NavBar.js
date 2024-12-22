import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin')); // Check if the user is an admin

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        MyCourseApp
      </div>
      <nav className="nav-buttons">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About Us</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/courses')}>Courses</button>

        {/* Admin-only buttons */}
        {/*isAdmin && */(
          <>
            <button onClick={() => navigate('/upload-course')}>Add Course</button>
            <button onClick={() => navigate('/upload-notes')}>Add Notes</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
