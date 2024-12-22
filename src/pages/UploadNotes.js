import React, { useState } from 'react';
import { addNote } from '../api';

const UploadNotes = () => {
  const [courseId, setCourseId] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await addNote({ courseId, content }, token);
      alert('Note added!');
    } catch {
      alert('Failed to add note');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default UploadNotes;
