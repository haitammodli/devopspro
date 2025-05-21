// src/components/JoinUs/JoinUs.jsx
import './JoinUs.css';
import { useState } from 'react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API or email logic can go here)
    alert('Form submitted successfully!');
  };

  return (
    <div className="joinus-container">
      <div className="joinus-header">
        <h1>Join the MediCare Team</h1>
        <p>Are you passionate about healthcare and technology? Come work with us!</p>
      </div>

      <section className="joinus-info">
        <h2>Why Join Us?</h2>
        <div className="joinus-info-content">
          <p>
            At MediCare, we believe in leveraging technology to provide better healthcare. Join our team and contribute to
            creating innovative solutions that impact people's lives. We offer a collaborative and dynamic work environment
            where your ideas can thrive!
          </p>
          
        </div>
      </section>

      <section className="joinus-positions">
        <h2>Open Positions</h2>
        <div className="position-list">
          <div className="position">
            <h3>AI Engineer</h3>
            <p>Develop and implement intelligent algorithms for our platform's features.</p>
          </div>
          <div className="position">
            <h3>Full Stack Developer</h3>
            <p>Build and maintain the backend and frontend of our web platform.</p>
          </div>
          <div className="position">
            <h3>UX/UI Designer</h3>
            <p>Design seamless user experiences and interfaces for our platform.</p>
          </div>
        </div>
      </section>

      <section className="joinus-form">
        <h2>Apply Now</h2>
        <p>Fill out the form below to submit your application to join our team!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Cover Letter</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Resume (PDF or DOC)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="apply-btn">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default JoinUs;
