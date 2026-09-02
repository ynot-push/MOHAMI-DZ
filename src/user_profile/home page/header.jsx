import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Heder.css';
import logo from "../../assets/images/Screenshot_2023-12-13_133009-removebg-preview.png"
function Header() {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".main_nav");
    menu.onclick = function () {
      menu.classList.toggle("openmenu");
      nav.classList.toggle("open");
    };
  }, []);

  return (
    <header className="page_header">
    <a>  <Link to="/Home" className="slogan">
        <img src={logo} alt="Your Image" />
        <div className="logo">
          <span> MOHAMI DZ</span>
        </div>
      </Link></a>
      <nav className="main_nav">
        <ul>
          <li><a><Link to="/Home">Home</Link></a></li>
          <li><a><Link to="/Lawyer_directory">Lawyer directory</Link></a></li>
          <li><a><Link to="/About_us">About Us</Link></a></li>
          <div className="button_container">
           <Link to="/login"> <button className="subs_button">
              Sign in
            </button></Link>
          </div>
        </ul>
      </nav>
      <div className="menu">
        <div>
          <span className="line_1"></span>
          <span className="line_2"></span>
          <span className="line_3"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
