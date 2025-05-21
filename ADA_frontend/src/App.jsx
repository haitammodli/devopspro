import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import Chatbot from "./components/Chatbot/Chatbot";
import About from "./components/About/About";
import Home from "./components/Home/home";
import PatientForm from "./components/Patient/PatientForm";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import PatientPortal from "./components/EspacePatient/PatientPortal";
import Profil from "./components/Profile/Profile";
import Appointments from "./components/Appointments/Appointments";
import Doctors from "./components/Doctors/Doctors";
import DoctorPortal from "./components/EspaceDoctor/DoctorPortal";
import ContactUs from "./components/ContactUs/ContactUs";
import Explore from "./components/Explore/Explore";
import Team from "./components/Team/Team";
import JoinUs from "./components/JoinUs/JoinUs";

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar1 theme={theme} setTheme={setTheme} />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/patient" element={<PatientForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/espacepatient" element={<PatientPortal />} />
          <Route path="/espacedoctor" element={<DoctorPortal />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/join" element={<JoinUs/>} />
          

         
        </Routes>
      </main>
    </div>
  );
};

export default App;
