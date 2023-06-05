import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link as ScrollLink } from 'react-scroll';

import resumePDF from '../assets/file/Galanaga-Regine-A-Resume.pdf';

const Profile = () => {

  const imageHome= (require('../assets/image/regine1.png'));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Galanaga-Regine-A-Resume.pdf';
    link.click();
  };

  return (
    <>
      <div className='container-fluid position-relative' id=''>
        <div className='curve-line'></div>
        <div className='overlay'></div>
        <div className='container mt-5'>
          <div className='row '>
            <div className='col-md-6'>
              <div className='form-group' id='form-group'>
                <h3 className='name-content'>
                  <span className='greeting'>Hi,</span>
                  <span> I’m Regine Galanaga, <span className='greeting'>your</span></span>
                </h3>
                <div className='animated-job-title'>
                  <Typewriter
                    words={['Front-End Developer', 'UI/UX Designer', 'Freelancer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
                <p className='home-p'>
                  Versatile Professional for almost 5 years. Committed to quality, innovation, and client satisfaction.
                  Ensures the delivery of impactful digital experiences that leave a lasting impression.
                </p>
             
                 <div className='button-container d-flex'>
                  <ScrollLink to='contact-section' smooth={true} duration={500}>
                    <button className='btn btn-primary'>Let's Talk</button>
                  </ScrollLink>
                  
                  <button className='btn btn-secondary' onClick={handleDownload}>
                    Get Workfolio
                  </button>
              
              </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <img src={imageHome} alt='regine' className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
