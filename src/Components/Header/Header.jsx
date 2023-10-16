// Header.js
import React, { useEffect, useState } from 'react';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect to update the state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#home">PakPureHoney</a>
        </div>
        {!isSmallScreen ? (
          <ul className='manu_links'>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>) : (
          <div className="menu_icon" onClick={() => setShowMenu(!showMenu)}>
            <DehazeIcon />
          </div>)}
      </nav>
      {showMenu && (
        <ul className='small_manu manu_links'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>)}
    </header>
  );
};

export default Header;
