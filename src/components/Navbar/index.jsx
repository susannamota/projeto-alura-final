import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h1>SoundFlix</h1>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/nuevo-video"
              className={activeLink === 'nuevo-video' ? 'active' : ''}
              onClick={() => handleClick('nuevo-video')}
            >
             Adicionar Vídeo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;