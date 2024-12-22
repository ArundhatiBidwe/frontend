import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/courses', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Failed to fetch courses');
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
