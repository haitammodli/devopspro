// src/components/Team/Team.jsx
import './Team.css';
import { FaStethoscope, FaLaptopMedical, FaBrain, FaUserNurse } from 'react-icons/fa';

const teamMembers = [
   {
    name: "Dr. Yasmine Laanaya",
    role: "Cardiologist",
    icon: <FaStethoscope />,
    bio: "Specialist in cardiovascular diseases, Dr. Laanaya focuses on early diagnosis, prevention, and tech-assisted treatments to improve patient heart health.",
  },
  {
    name: "Dr. Haitam Modli",
    role: "Neurologist",
    icon: <FaBrain />,
    bio: "Dedicated to understanding the human brain, Dr. Modli combines clinical expertise with digital tools to advance neurological care and patient recovery.",
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <header className="team-header">
        <h1>Meet Our Dedicated Team</h1>
        <p>
          Behind every line of code and feature, there’s a team of passionate individuals committed to improving healthcare.
        </p>
      </header>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-icon">{member.icon}</div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </section>

      <section className="team-quote">
        <blockquote>
          “Great teams do not hold back with one another. They are unafraid to air their ideas, challenge each other, and support the mission.” – Patrick Lencioni
        </blockquote>
      </section>
    </div>
  );
};

export default Team;
