import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNotes, addNote } from '../api';

const CourseDetails = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      const data = await fetchNotes(id);
      setNotes(data);
    };
    loadNotes();
  }, [id]);

  const handleAddNote = async () => {
    await addNote({ courseId: id, content: noteContent });
    setNoteContent('');
    const updatedNotes = await fetchNotes(id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Course Details</h2>
      <h3>Notes</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <textarea value={noteContent} onChange={(e) => setNoteContent(e.target.value)} placeholder="Add a note"></textarea>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default CourseDetails;
