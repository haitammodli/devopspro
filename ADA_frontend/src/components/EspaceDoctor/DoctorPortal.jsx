import React from 'react';
import './DoctorPortal.css';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaCalendarCheck, FaNotesMedical, FaUsers, FaComments } from 'react-icons/fa';
import Chatbot from '../Chatbot/Chatbot';

const DoctorPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="portal-container">
      <header className="portal-header">
        <h1>Doctor Workspace</h1>
        <p className="intro-text">
          Welcome, Doctor! Access your schedule, patient records, clinical notes, and communicate with your colleagues all in one place.
        </p>
      </header>

      <section className="info-box">
        <h3>Key Functionalities</h3>
        <p>
          This portal is designed to simplify your daily workflow and ensure you provide the best care possible to your patients.
        </p>
        <ul>
          <li>View and manage your upcoming consultations</li>
          <li>Access and update patient medical records</li>
          <li>Write and review clinical notes</li>
          <li>Collaborate with other healthcare professionals</li>
          <li>Use AI assistant to streamline your tasks</li>
        </ul>
      </section>

      <section className="card-grid">
        <div className="card" onClick={() => navigate('/patients')}>
          <div className="card-title">
            <FaUsers /> Patient List
          </div>
          <div className="card-description">
            Access patient profiles, medical history, and manage their healthcare journey efficiently.
          </div>
          <button className="card-button">View Patients</button>
        </div>

        <div className="card" onClick={() => navigate('/appointments')}>
          <div className="card-title">
            <FaCalendarCheck /> Appointments
          </div>
          <div className="card-description">
            See your schedule, upcoming consultations, and adjust time slots as needed.
          </div>
          <button className="card-button">Manage Schedule</button>
        </div>

        <div className="card" onClick={() => navigate('/notes')}>
          <div className="card-title">
            <FaNotesMedical /> Clinical Notes
          </div>
          <div className="card-description">
            Write detailed patient observations, treatment plans, and save them to medical records.
          </div>
          <button className="card-button">Write Notes</button>
        </div>

        <div className="card" onClick={() => navigate('/doctors')}>
          <div className="card-title">
            <FaComments /> Collaborate
          </div>
          <div className="card-description">
            Chat and exchange updates with other doctors, specialists, or team members.
          </div>
          <button className="card-button">Open Chat</button>
        </div>
      </section>

      <section className="health-tips">
        <h3>Clinical Reminders</h3>
        <ul>
          <li>Document notes immediately after each consultation.</li>
          <li>Review lab results before patient visits.</li>
          <li>Ensure prescriptions are up to date.</li>
          <li>Encourage patients to follow up regularly.</li>
          <li>Maintain clear communication within the care team.</li>
        </ul>
      </section>

      <section className="contact-box">
        <h3>Need Technical Help?</h3>
        <p>Our IT support team is here to assist with any portal-related issues.</p>
        <p>Email us at <a href="mailto:doctorsupport@MediCareclinic.com">doctorsupport@MediCareclinic.com</a></p>
        <p>Or call <strong>+212 6 94 37 37 12</strong></p>
      </section>

      <Chatbot />
    </div>
  );
};

export default DoctorPortal;
