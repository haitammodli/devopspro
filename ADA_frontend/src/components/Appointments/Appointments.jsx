import React from 'react';
import './Appointments.css';

const Appointments = () => {
  return (
    <div className="appointments-wrapper">
      {/* Sidebar Gauche */}
      <div className="appointments-sidebar">
        <h2>🩺 Appointment Hub</h2>
        <p>Manage all your appointments in one place.</p>

        <div className="sidebar-section">
          <h4>💡 Tips:</h4>
          <ul>
            <li>Be on time for your visit</li>
            <li>Have your insurance card ready</li>
            <li>Bring previous medical reports</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>📌 Quick Links:</h4>
          <button className="sidebar-btn">🔍 Find a Doctor</button>
          <button className="sidebar-btn">📄 My Medical Files</button>
          <button className="sidebar-btn">📊 Health Dashboard</button>
        </div>

        <div className="support-box">
          <p>Need Help?</p>
          <strong>📞 06 94 37 37 12</strong><br />
          <a href="mailto:support@MediCareclinic.com">📧 support@MediCareclinic.com</a>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="appointments-container">
        <h2>My Appointments</h2>
        <p>Here you can view, schedule, or reschedule your medical appointments.</p>

        <div className="appointment-actions">
          <button className="action-button">📅 Schedule New Appointment</button>
          <button className="action-button">🔄 Reschedule Appointment</button>
          <button className="action-button">❌ Cancel Appointment</button>
        </div>

        <div className="appointment-list">
          <h3>Upcoming Appointments</h3>
          <ul>
            <li>
              <strong>Date:</strong> May 15, 2025 – <strong>Time:</strong> 10:00 AM<br />
              <strong>Doctor:</strong> Dr. Sarah El Amrani – Cardiologist<br />
              <strong>Location:</strong> Orange Medical Center, Casablanca
            </li>
            <li>
              <strong>Date:</strong> June 3, 2025 – <strong>Time:</strong> 2:30 PM<br />
              <strong>Doctor:</strong> Dr. Youssef Bennani – Dermatologist<br />
              <strong>Location:</strong> Orange Medical Center, Rabat
            </li>
          </ul>
        </div>

        <div className="appointment-info">
          <h3>How to Schedule</h3>
          <p>Choose your doctor and preferred time. We’ll confirm the appointment by email or SMS.</p>
          <p>Need urgent help? Contact our support team at <strong>06 94 37 37 12</strong> or <strong>support@MediCareclinic.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;