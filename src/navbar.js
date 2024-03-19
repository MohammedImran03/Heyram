import React, { useState } from 'react';
import './navbar.css';
import { IoMdList } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        {/* <a href="#" className="logo">Logo</a> */}
        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {!isOpen ? <IoMdList  className='Navbaricontoggle'/>
        :<ImCross className='Navbaricontoggle'/>}
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className='titlenavbar'>Z - Saffron</li>
        <li>Home</li>
          <li>About Us</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
