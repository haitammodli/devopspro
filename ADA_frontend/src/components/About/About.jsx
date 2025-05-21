// src/components/About/About.jsx
import { Link } from 'react-router-dom';
import './about.css';
import medicalImage from '../../assets/v870-tang-36.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Section Accueil About */}
      <section className="about-section">
        <div className="about-left">
          <img src={medicalImage} alt="Medical Team" className="about-img" />
          <div className="about-buttons">
            <Link to="/Explore" className="about-btn">Explore Services</Link>
            <Link to="/ContactUs" className="about-btn secondary">Contact Us</Link>
          </div>
        </div>

        <div className="about-right">
          <h1 className="about-title">About MediCare</h1>
          <p className="about-description">
            Advanced Medical Assistant is an intelligent platform designed to assist healthcare professionals 
            in managing patient information, monitoring health conditions and enhancing decision-making through AI-powered tools.
          </p>

          <h2 className="about-subtitle">Our Mission</h2>
          <p className="about-description">
            Our goal is to streamline medical processes, improve patient care, and empower healthcare providers 
            with real-time data and smart recommendations.
          </p>
        </div>
      </section>

      {/* Section Vision + Valeurs */}
      <section className="about-section horizontal-cards">
        <div className="about-card">
          <h2 className="about-subtitle">Our Vision</h2>
          <p className="about-description">
            We envision a world where technology bridges the gap between patients and providers, 
            delivering efficient, empathetic, and error-free care globally.
          </p>
        </div>
        <div className="about-card">
          <h2 className="about-subtitle">Core Values</h2>
          <ul className="about-list">
            <li>Compassion and Patient-Centricity</li>
            <li>Innovation through AI and Big Data</li>
            <li>Data Privacy and Medical Ethics</li>
            <li>Accessibility for All</li>
          </ul>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="about-section">
        <div className="about-full">
          <h2 className="about-subtitle">Why Choose Us?</h2>
          <ul className="about-list">
            <li>AI-driven diagnostics and assistance</li>
            <li>Secure and centralized patient records</li>
            <li>Real-time health monitoring and alerts</li>
            <li>User-friendly interface for doctors and staff</li>
          </ul>
        </div>
      </section>

      {/* Citations */}
      <section className="about-section quotes">
        <blockquote>
          “Wherever the art of medicine is loved, there is also a love of humanity.” – Hippocrates
        </blockquote>
        <blockquote>
          “The best doctor gives the least medicines.” – Benjamin Franklin
        </blockquote>
        <blockquote>
          “Technology will not replace doctors, but doctors who use technology will replace those who don’t.” – Anonymous
        </blockquote>
      </section>

      {/* Derniers liens */}
      <section className="about-section">
        <div className="about-buttons">
          <Link to="/Team" className="about-btn">Meet the Team</Link>
          <Link to="/join" className="about-btn secondary">Join Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
