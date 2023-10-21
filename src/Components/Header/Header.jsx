// Header.js
import React, { useEffect, useState } from 'react';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

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
            <li className={activeLink === 0 ? 'active-link' : ''}>
              <a href="#home" onClick={() => handleLinkClick(0)}>Home</a>
            </li>
            <li className={activeLink === 1 ? 'active-link' : ''}>
              <a href="#products" onClick={() => handleLinkClick(1)}>Products</a>
            </li>
            <li className={activeLink === 2 ? 'active-link' : ''}>
              <a href="#about" onClick={() => handleLinkClick(2)}>About Us</a>
            </li>
            <li className={activeLink === 3 ? 'active-link' : ''}>
              <a href="#contact" onClick={() => handleLinkClick(3)}>Contact</a>
            </li>
          </ul>) : (
          <div className="menu_icon" onClick={() => {
            setIsOpen(!isOpen);
            setShowMenu(!showMenu)
          }}>
            {isOpen ? <CloseIcon /> :
              <DehazeIcon />}
          </div>)}
      </nav>
      {showMenu && (
        <ul className='small_manu manu_links'>
          <li className={activeLink === 0 ? 'active-link' : ''}>
            <a href="#home" onClick={() => handleLinkClick(0)}>Home</a>
          </li>
          <li className={activeLink === 1 ? 'active-link' : ''}>
            <a href="#products" onClick={() => handleLinkClick(1)}>Products</a>
          </li>
          <li className={activeLink === 2 ? 'active-link' : ''}>
            <a href="#about" onClick={() => handleLinkClick(2)}>About Us</a>
          </li>
          <li className={activeLink === 3 ? 'active-link' : ''}>
            <a href="#contact" onClick={() => handleLinkClick(3)}>Contact</a>
          </li>
        </ul>)}
    </header>
  );
};

export default Header;
