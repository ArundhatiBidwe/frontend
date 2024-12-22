import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseById, fetchNotesForCourse } from '../api';

const CourseViewer = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const courseData = await fetchCourseById(id);
      setCourse(courseData.data);

      const notesData = await fetchNotesForCourse(id);
      setNotes(notesData.data);
    };
    loadData();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseViewer;
