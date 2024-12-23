import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://backend-qp5o.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed.");
      }

      setSuccess("Registration successful! You can now log in.");
      setTimeout(() => navigate("/"), 2000); // Redirect to login after success
    } catch (err) {
      console.error("Registration error:", err.message);
      setError(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <header>
        <div className="logo">My Courses</div>
        <nav>
          <button onClick={() => navigate("/about")}>About Us</button>
          <button onClick={() => navigate("/")}>Login</button>
        </nav>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Create an Account</h2>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
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

      <footer>
        &copy; {new Date().getFullYear()} MyCourseApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Register;