import './Navbar.css'
import logo_light from '../../assets/logo.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
const Navbar1 = ({theme , setTheme}) => {

  const toogle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>
      <img src={logo_light} alt="" className='logo'/>
       <ul>
       <li>
        <Link to="/"  className='nav-link'>Home</Link>
        </li>
        <li>
        <Link to="/espacepatient"  className='nav-link'>PatientSpace</Link>
        </li>
        <li>
        <Link to="/espacedoctor"  className='nav-link'>DoctorSpace</Link>
        </li>
       </ul>
      
      
      <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>
      <div className="navbar-right">
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Register</Link>
        </div>

      <img onClick={()=>{toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
      </div>
      </div>
  )
}

export default Navbar1