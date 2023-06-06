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

  const handleOptionClick = (option, e) => {
    e.stopPropagation();
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Web Design':
        return <WebDesign />;
      case 'Graphic Design':
        return <GraphicDesign />;
      case 'Branding':
        return <Branding />;
      case 'Photography':
        return <Photography />;
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
      <Navbar collapseOnSelect expand='lg' variant='light'>
        <Container fluid='' id='supported-information' className='text-center'>
          <Nav className='mx-auto ' id='portfolio-navbar'>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Web Design' ? 'active' : ''}`}
              onClick={(e) => handleOptionClick('Web Design', e)}
            >
              Web Design
            </Nav.Link>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Graphic Design' ? 'active' : ''}`}
              onClick={(e) => handleOptionClick('Graphic Design', e)}
            >
              Graphic Design
            </Nav.Link>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Branding' ? 'active' : ''}`}
              onClick={(e) => handleOptionClick('Branding', e)}
            >
              Branding
            </Nav.Link>
            <Nav.Link
              className={`portfolio-nav-items ${selectedOption === 'Photography' ? 'active' : ''}`}
              onClick={(e) => handleOptionClick('Photography', e)}
            >
              Photography
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='carousel-wrapper'>{renderContent()}</div>
    </>
  );
}

export default PortfolioNavbar;
