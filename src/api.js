import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; // Replace with your backend URL if deployed

// Authentication APIs
export const registerUser = (data) => axios.post(`${BASE_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${BASE_URL}/auth/login`, data);

// Course APIs
export const fetchCourses = () => axios.get(`${BASE_URL}/courses`);
export const fetchCourseById = (id) => axios.get(`${BASE_URL}/courses/${id}`);

// Notes APIs
export const addNote = (data) =>
  axios.post(`${BASE_URL}/notes`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });

export const fetchNotesForCourse = (courseId) =>
  axios.get(`${BASE_URL}/notes`, {
    params: { courseId },
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });

// Admin APIs
export const addCourse = (data, token) =>
  axios.post(`${BASE_URL}/admin/courses`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addAdminNote = (data, token) =>
  axios.post(`${BASE_URL}/admin/notes`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
