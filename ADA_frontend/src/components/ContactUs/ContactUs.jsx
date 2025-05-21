// src/components/ContactUs/ContactUs.jsx
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-header">
        <h1>Welcome to MediCare</h1>
        <p>Your health, our priority. Feel free to reach out to us anytime!</p>
      </div>

      <div className="contactus-content">
        <div className="contactus-box">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>
            <a href="tel:+212694373712">+212 6 94 37 37 12</a>
          </p>
        </div>

        <div className="contactus-box">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:support@MediCareclinic.com">support@MediCareclinic.com</a>
          </p>
        </div>

        <div className="contactus-box">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>123 Rue Roudani, Casablanca, Maroc</p>
        </div>
      </div>

      {/* Optional: Map */}
      <div className="map-container">
        <iframe
          title="EMSI Casablanca Roudani Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8594701731345!2d-7.621669484804629!3d33.58247478074781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdbda5b033bb%3A0x18ee5fd4d7db08a2!2sEMSI%20Casablanca%20Roudani!5e0!3m2!1sfr!2sma!4v1685184463870"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
