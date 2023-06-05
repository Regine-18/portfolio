import React, { useEffect, useRef, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import WebIcon from '@mui/icons-material/Web';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

const Services = () => {
  const servicesRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = servicesRef.current;
      const sectionPosition = servicesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (sectionPosition.top < windowHeight && sectionPosition.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
  
      <div className='container-fluid' id='services-container' ref={servicesRef}>
        <div className='container p-3'>
          <h3 className='section-title'>Services</h3>
          <h1 className='description-page'>What Can I Do</h1>
          <div className='row mt-4' id='row'>
            <div className='col-sm mt-3'>
              <div className={`card ${isInView ? 'animate' : ''}`}>
              <div className='card-body'>
                  <CodeIcon className='services-icon' />
                  <h5 className='card-title'>Clean Code</h5>
                  <p className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm mt-3'>
            <div className={`card ${isInView ? 'animate' : ''}`}>
                <div className='card-body'>
                  <GraphicEqIcon className='services-icon' />
                  <h5 className='card-title'>Graphic Design</h5>
                  <p className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm mt-3'>
            <div className={`card ${isInView ? 'animate' : ''}`}>
                <div className='card-body'>
                  <WebIcon className='services-icon' />
                  <h5 className='card-title'>Web Design</h5>
                  <p className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row' id='row'>
            <div className='col-sm mt-3'>
            <div className={`card ${isInView ? 'animate' : ''}`}>
                <div className='card-body'>
                  <WebIcon className='services-icon' />
                  <h5 className='card-title'>Freelancer</h5>
                  <p className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm mt-3'>
            <div className={`card ${isInView ? 'animate' : ''}`}>
                <div className='card-body'>
                  <BrandingWatermarkIcon className='services-icon' />
                  <h5 className='card-title'>Branding</h5>
                  <p className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm mt-3'>
            <div className={`card ${isInView ? 'animate' : ''}`}>
                <div className='card-body'>
                  <AddAPhotoIcon className='services-icon' />
                  <h5 className='card-title'>Photography</h5>
                  <p className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
    
  );
};

export default Services;
