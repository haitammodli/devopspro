// src/components/Explore/Explore.jsx
import './explore.css';
import { FaHeartbeat, FaRobot, FaUserMd, FaShieldAlt, FaSmileBeam } from 'react-icons/fa';

const Explore = () => {
  return (
    <div className="explore-container">
      {/* Section 1 - Welcome */}
      <section className="section welcome-section">
        <div className="left">
          <h1>Welcome to MediCare</h1>
          <p>
            Your intelligent healthcare companion. Explore our services that merge compassion and technology.
          </p>
        </div>
        <div className="right">
          <FaUserMd className="icon-large" />
        </div>
      </section>

      {/* Section 2 - Services Horizontally */}
      <section className="section services-section">
        <div className="card">
          <FaHeartbeat className="icon" />
          <h3>Real-Time Monitoring</h3>
          <p>Stay updated with live vitals and alerts.</p>
        </div>
        <div className="card center-card">
          <FaRobot className="icon" />
          <h3>AI Assistant</h3>
          <p>Smart recommendations powered by AI for faster decisions.</p>
        </div>
        <div className="card">
          <FaShieldAlt className="icon" />
          <h3>Data Security</h3>
          <p>All your medical information encrypted and safe.</p>
        </div>
      </section>

      {/* Section 3 - Quote Section */}
      <section className="section quote-section">
        <div className="center-quote">
          <blockquote>
            "Technology won’t replace doctors, but doctors who use technology will replace those who don’t."
          </blockquote>
        </div>
      </section>

      {/* Section 4 - Testimonials or Feedback */}
      <section className="section feedback-section">
        <div className="left">
          <FaSmileBeam className="icon-large" />
        </div>
        <div className="right">
          <h2>What Our Users Say</h2>
          <p>
            “Using MediCare has transformed the way I monitor my patients remotely.”
          </p>
          <p><em>— Dr. Yasmine, Cardiologist</em></p>
        </div>
      </section>
    </div>
  );
};

export default Explore;
