import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import WebDesign from './WebDesign';
import GraphicDesign from './GraphicDesign';
import Branding from './Branding'
import '../App.css';

function PortfolioNavbar() {
  const [selectedOption, setSelectedOption] = useState('Web Design');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Web Design':
        return <WebDesign />;
      case 'Graphic Design':
        return <GraphicDesign />;
      case 'Branding':
        return <Branding />; // Replace with your branding content
      case 'Photography':
        return <div>Photography Content</div>; // Replace with your photography content
      default:
        return null;
    }
  };

  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="d-flex justify-content-space-between align-items-center" id='supported-information'>
          <Nav className="mx-auto">
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Web Design' ? 'active' : ''}`}
              onClick={() => handleOptionClick('Web Design')}
            >
              Web Design
            </Nav.Link>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Graphic Design' ? 'active' : ''}`}
              onClick={() => handleOptionClick('Graphic Design')}
            >
              Graphic Design
            </Nav.Link>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Branding' ? 'active' : ''}`}
              onClick={() => handleOptionClick('Branding')}
            >
              Branding
            </Nav.Link>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Photography' ? 'active' : ''}`}
              onClick={() => handleOptionClick('Photography')}
            >
              Photography
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    <div className="carousel-wrapper">{renderContent()}</div>
    </>
  );
}

export default PortfolioNavbar;
