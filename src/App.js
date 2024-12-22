import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseViewer from './pages/CourseViewer';
import UploadCourse from './pages/UploadCourse';
import UploadNotes from './pages/UploadNotes';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseViewer />} /> {/* Dynamic course viewer route */}
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Login />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseViewer />} />
      <Route path="/upload-course" element={<UploadCourse />} />
      <Route path="/upload-notes" element={<UploadNotes />} />
    </Routes>
  </Router>
);

export default App;
