import React, { useState } from 'react';
import { addCourse } from '../api';

const UploadCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await addCourse({ title, description, price }, token);
      alert('Course added!');
    } catch {
      alert('Failed to add course');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default UploadCourse;
