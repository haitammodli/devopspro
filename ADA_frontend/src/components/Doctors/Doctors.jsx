import React from 'react';
import './Doctors.css';
import useFetch from '../../hooks/useFetch'; 

const Doctors = () => {
  const { data: doctors, loading, error } = useFetch('http://localhost:8085/doctors');

  return (
    <div className="doctors-wrapper">
      <div className="doctors-sidebar">
        <h2>Welcome to MediCare</h2>
        <p>Your health is our top priority. Search and connect with top medical specialists.</p>

        <div className="search-section">
          <label htmlFor="specialty-search">🔍 Search by Specialty</label>
          <input type="text" id="specialty-search" placeholder="e.g. Dermatologist" />
        </div>

        <div className="quick-stats">
          <h4>👨‍⚕️ 50+ Verified Doctors</h4>
          <h4>📍 8 Cities Covered</h4>
          <h4>⭐ 4.9/5 Patient Ratings</h4>
        </div>

        <div className="promo-banner">
          <h3>🎁 Free First Consultation!</h3>
          <p>Book your first appointment online and get your consultation for free.</p>
          <button className="book-now">Book Now</button>
        </div>
      </div>

      <div className="doctors-container">
        <h2>Our Specialists</h2>
        <p>Find the right doctor for your health needs. Click on a doctor to book a consultation.</p>

        {loading && <p>Loading doctors...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <div className="doctor-list">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <h3>{doc.username}</h3>
              <p><strong>Specialty:</strong> {doc.specialty}</p>
              <p><strong>License #:</strong> {doc.licenseNumber}</p>
              <p><strong>Phone:</strong> {doc.phone}</p>
              <p><strong>Email:</strong> <a href={`mailto:${doc.email}`}>{doc.email}</a></p>
              <button className="book-button">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
