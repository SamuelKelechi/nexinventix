import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../App.css'
import "./MobileMenu.css";
import Logo from '../assets/nex-logo.png'
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

    return (
      <>
        <nav className="navbar">
          <div className='Logo-Holder'>
          <Link to='/' className='Nav-link'><img src={Logo} alt='Logo' className="logo" /></Link>
          </div>
          <ul className="nav-links">
            <Link to='/' className='Nav-link'>Home</Link>
            <Link to='/about' className='Nav-link'>About</Link>
            <Link to='/learn' className='Nav-link'>Academy</Link>
            <Link to='/contact' className='Nav-link'><button className='nav-contact-button'>Contact</button></Link>
          </ul>
          {isOpen ? (
            <button className="Nav-Mobile" onClick={() => setIsOpen(false)}>
              <FiX size={20} color="black" />
            </button>
          ):(
            <button className="Nav-Mobile" onClick={() => setIsOpen(true)}>
              <FiMenu size={20} color="black" />
            </button>
          )}

          {/* Sidebar Menu */}
          <div className={`menu-content ${isOpen ? "open" : ""}`}>
            <ul className="Mobile-Navs">
              <Link to='/' className='Nav-link' onClick={closeMenu}><li>Home</li></Link>
              
              <Link to='/about' className='Nav-link' onClick={closeMenu}><li>About</li></Link>
              
              <Link to='/learn' className='Nav-link' onClick={closeMenu}><li>Academy</li></Link>
              
              <Link to='/contact' className='Nav-link' style={{marginTop: '15px'}} onClick={closeMenu}><button className='nav-contact-button' style={{padding: '8px'}}>Contact</button></Link>
            </ul>
          </div>
        </nav>
      </>
    );
  };

  export default Navbar
  