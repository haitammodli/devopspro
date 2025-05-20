import React, { useState } from 'react';
import { FaAmbulance } from 'react-icons/fa';
import './PatientForm.css';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    bloodType: '',
    allergies: '',
    symptoms: '',
    medicalHistory: ''
  });

  const [emergencyMode, setEmergencyMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient data:', formData);
    alert('Form submitted successfully!');
  };

  const handleEmergency = () => {
    setEmergencyMode(true);
    alert(
      'MEDICAL EMERGENCY\n\nCalling emergency services...\n\nStay calm and follow the doctor’s instructions.'
    );
    window.location.href = 'tel:15';
  };

  return (
    <div className="form-layout">
      {/* Left info panel */}
      <div className="form-side-info">
        <h2>Welcome to MediCare</h2>
        <p>
          Please fill out this form carefully to ensure fast and accurate medical support.
        </p>
        <img src="src/assets/medical.jpg" alt="Medical " />
        <img src="src/assets/medicalcare.jpg" alt="Medical " />
        <img src="src/assets/doctor.jpg" alt="Medical " />
      </div>

      {/* Right form panel */}
      <div className={`patient-form-container ${emergencyMode ? 'emergency-mode' : ''}`}>
        <button
          className={`emergency-btn ${emergencyMode ? 'blinking' : ''}`}
          onClick={handleEmergency}
        >
          <FaAmbulance className="emergency-icon" />
          EMERGENCY
        </button>

        <div className="medical-header">
          <h1>Medical Form</h1>
          <p>Please complete all required fields</p>
        </div>

        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Medical Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Blood Type</label>
                <select name="bloodType" value={formData.bloodType} onChange={handleChange}>
                  <option value="">Unknown</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <label>Allergies</label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="List known allergies"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Reason for Consultation</h2>
            <div className="form-group">
              <label>Symptoms</label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder="Describe your symptoms in detail..."
                required
                rows={4}
              />
            </div>
            <div className="form-group">
              <label>Medical History</label>
              <textarea
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                placeholder="Chronic conditions, surgeries, etc."
                rows={4}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Save Patient Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
