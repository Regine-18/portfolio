import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../App.css';
import WebDesign from './WebDesign';
import GraphicDesign from './GraphicDesign';
import Branding from './Branding';
import Photography from './Photography';

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
        return <Photography />; // Replace with your photography content
      default:
        return null;
    }
  };

  return (
    <>
    <div className='container p-3' id='portfolio-section'>
    <div className='portfolio-title '>
      <h3 className='section-title'>Portfolio</h3>
      <h1 className='description-page'>My Projects</h1>
   </div>
  </div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container fluid="" id='supported-information' className="text-center">
          <Nav className="mx-auto" id="portfolio-navbar">
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
