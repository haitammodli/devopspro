import { Link } from 'react-router-dom';
import './home.css';
import medicalImage from '../../assets/medical.jpg';
import Chatbot from '../Chatbot/Chatbot';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="home-title">Welcome to MediCare</h1>
          <p className="home-description">
            Your smart medical assistant. From appointments to prescriptions, MediCare helps doctors and patients connect and collaborate with ease and security. — all in one place.
          </p>
          <Link to="/about" className="home-button">Learn More</Link>
        </div>
        <div className="hero-image">
          <img src={medicalImage} alt="Medical Team" />
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <h2>Our Medical Services</h2>
          <ul>
            <li>📋 Patient record management</li>
            <li>🧪 Lab result tracking</li>
            <li>💊 Prescription suggestions</li>
            <li>🕒 Appointment scheduling</li>
          </ul>
        </div>

        <div className="card">
          <h2>Available Doctors</h2>
          <ul>
            <li>🩺 Dr. Yasmine Laanaya — Cardiologist</li>
            <li>👶 Dr. Zayn Malik — Pediatrician</li>
            <li>🧠 Dr. Haitam Modli — Neurologist</li>
            <li>🧠 Dr. Ilyass Attaf </li>
          </ul>
        </div>

        <div className="card">
          <h2>Health Advice</h2>
          <ul>
            <li>💧 Stay hydrated and eat balanced meals</li>
            <li>🩺 Get regular medical checkups</li>
            <li>🏃‍♂️ Exercise at least 30 minutes daily</li>
          </ul>
        </div>

        <div className="card">
          <h2>Symptoms to Watch</h2>
          <ul>
            <li>🤒 Persistent fever</li>
            <li>😤 Shortness of breath</li>
            <li>💥 Sudden severe headaches</li>
            <li>🩸 Unusual bleeding or bruising</li>
          </ul>
        </div>

        {/* Nouvelle carte : Numéros d'urgence */}
        <div className="card">
          <h2>Emergency Numbers</h2>
          <ul>
            <li>🚨 Police: 19</li>
            <li>🚑 Ambulance: 15</li>
            <li>🔥 Fire Department: 15</li>
            <li>🏥 Nearest Hospital: +212 5 22 33 44 55</li>
          </ul>
        </div>

        {/* Dernière carte : Contact */}
        <div className="card">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong>support@MediCareclinic.com</p>
          <p><strong>Phone:</strong> +212 6 94 37 37 12</p>
        </div>
      </div>

      <Chatbot />
     
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Advanced Medical Assistant. All rights reserved.</p>
        <p>Project by Haitam Modli & Yasmine Laanaya — 4IIR @ EMSI</p>
      </footer>
    </div>
  );
};

export default Home;
