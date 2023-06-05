import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import { LightMode, DarkMode, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode'); // Add/remove the 'dark-mode' class to the HTML element
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Clicked outside the navbar
        document.getElementById('navbar-toggle').click(); // Close the navbar toggle
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleNavItemClick = () => {
    document.getElementById('navbar-toggle').click(); // Close the navbar toggle
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant={darkMode ? 'dark-mode' : 'light'}
        fixed="top"
        className={scrolled ? 'scrolled' : ''}
        style={{ backgroundColor: scrolled ? '#0F584B' : 'white' }}
        ref={navbarRef}
      >
        <Container className="d-flex justify-content-space-between align-items-center">
          <Navbar.Brand
            href="#home"
            className={`brand-name ${scrolled ? 'brand-name-scroll' : ''}`}
            style={{ color: scrolled ? 'white' : '#0F584B' }}
          >
            Regine
          </Navbar.Brand>
          <Navbar.Toggle
          id="navbar-toggle"
          aria-controls="responsive-navbar-nav"
          className={`navbar-toggle ${scrolled ? 'navbar-toggle-scroll' : ''}`}
          style={{ backgroundColor: scrolled ? '' : '' }}
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                className={`nav-title ${scrolled ? 'navlink-scroll' : 'navlink'}`}
                style={{ color: scrolled ? 'white' : '#093224' }}
                onClick={handleNavItemClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="about-me-container"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-title ${scrolled ? 'navlink-scroll' : 'navlink'}`}
                style={{ color: scrolled ? 'white' : '#093224' }}
                onClick={handleNavItemClick}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="portfolio-section"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-title ${scrolled ? 'navlink-scroll' : 'navlink'}`}
                style={{ color: scrolled ? 'white' : '#093224' }}
                onClick={handleNavItemClick}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-title ${scrolled ? 'navlink-scroll' : 'navlink'}`}
                style={{ color: scrolled ? 'white' : '#093224' }}
                onClick={handleNavItemClick}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="gap-2">
              <Nav.Link
                className={`nav-title ${scrolled ? 'navlink-scroll' : 'navlink'}`}
                style={{ color: scrolled ? 'white' : '#093224' }}
              >
                Follow Me
              </Nav.Link>
            </Nav>
            <div className="social-icons">
              <Facebook className={`facebook-icon ${scrolled ? 'scrolled' : ''}`} />
              <Instagram className={`instagram-icon ${scrolled ? 'scrolled' : ''}`} />
              <Twitter className={`twitter-icon ${scrolled ? 'scrolled' : ''}`} />
              <LinkedIn className={`linkedIn-icon ${scrolled ? 'scrolled' : ''}`} />
            </div>
            <div className="custom-icon">
              {darkMode ? (
                <LightMode
                  onClick={toggleDarkMode}
                  className={`light-mode-icon ${scrolled ? 'scrolled' : ''} yellow-icon`}
                />
              ) : (
                <DarkMode onClick={toggleDarkMode} className={`dark-mode-icon ${scrolled ? 'scrolled' : ''}`} />
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
