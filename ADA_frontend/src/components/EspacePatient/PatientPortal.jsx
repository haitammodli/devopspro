import React from 'react';
import './PatientPortal.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaFileMedical, FaStethoscope } from 'react-icons/fa';
import Chatbot from '../Chatbot/Chatbot';

const PatientPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="portal-container">
      <header className="portal-header">
        <h1>Your Health, In One Place</h1>
        <p className="intro-text">
          Welcome to your secure medical space. Here, you can manage your profile, book appointments, contact specialists, and keep your health journey organized.
        </p>
      </header>

      <section className="info-box">
        <h3>What Can You Do Here?</h3>
        <p>
          Our Patient Portal simplifies your healthcare management. Everything is centralized, secure, and accessible with just a few clicks.
        </p>
        <ul>
          <li>Update your personal health profile</li>
          <li>Schedule and manage your appointments</li>
          <li>Fill in important medical forms</li>
          <li>Find doctors suited to your needs</li>
          <li>Chat with our AI health assistant</li>
        </ul>
      </section>

      <section className="card-grid">
        <div className="card" onClick={() => navigate('/profile')}>
          <div className="card-title">
            <FaUser /> My Profile
          </div>
          <div className="card-description">
            Keep your personal details and health information up to date to ensure accurate treatment and records.
          </div>
          <button className="card-button">Access Profile</button>
        </div>

        <div className="card" onClick={() => navigate('/appointments')}>
          <div className="card-title">
            <FaCalendarAlt /> Appointments
          </div>
          <div className="card-description">
            View upcoming visits, set new ones, and stay on top of your health without missing a beat.
          </div>
          <button className="card-button">Manage Appointments</button>
        </div>

        <div className="card" onClick={() => navigate('/patient')}>
          <div className="card-title">
            <FaFileMedical /> Medical Forms
          </div>
          <div className="card-description">
            Fill out and submit your medical history forms so your healthcare provider can prepare in advance.
          </div>
          <button className="card-button">Fill Forms</button>
        </div>

        <div className="card" onClick={() => navigate('/doctors')}>
          <div className="card-title">
            <FaStethoscope /> Find Doctors
          </div>
          <div className="card-description">
            Search by specialty, availability, or rating to find the right healthcare professional for you.
          </div>
          <button className="card-button">Browse Doctors</button>
        </div>
      </section>

      <section className="health-tips">
        <h3>Daily Health Tips</h3>
        <ul>
          <li>Stay hydrated by drinking at least 8 glasses of water daily.</li>
          <li>Eat a rainbow of fruits and vegetables every day.</li>
          <li>Get 7-9 hours of sleep to let your body recover.</li>
          <li>Exercise for 30 minutes, at least 5 days a week.</li>
          <li>Schedule regular check-ups, even if you feel fine.</li>
        </ul>
      </section>

      <section className="contact-box">
        <h3>We're Here to Help</h3>
        <p>Need help navigating the portal or have a medical question?</p>
        <p>Email us at <a href="mailto:support@MediCareclinic.com">support@MediCareclinic.com</a></p>
        <p>Or call us at <strong>+212 6 04 37 37 12</strong></p>
      </section>

      <Chatbot />
    </div>
  );
};

export default PatientPortal;
