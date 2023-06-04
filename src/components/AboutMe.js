import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const AboutMe = () => {
  return (
    <>
    <div className='container-fluid' id='about-me-container'>
    <div className="container">
      <div className="row pt-4">
        <div className="col-sm d-flex align-items-center">
          <div className="container">
          <div className="box">
            <div className="spin-container">
              <div className="shape">
                <div className="bd"></div>
              </div>
             </div>
          </div>
        </div>
        </div>
      <div className="col-md-6">
        <div className="form-group p-2">
        <div className='about-content'>
        <h3 className='section-title'>About Me</h3>
        <h1 className='description-page '>Who am I</h1>
          <h3 className="awards mt-3">
          <span className="bullet"></span>
          <span className="award-text">NCIII Holder of Bookkeeping</span>
          </h3>
          <h3 className='awards'>
          <span className="bullet"></span>
          <span className="award-text">Senior High with Honor</span>
          </h3>
          <p className='about-p mt-4'>The youngest of three siblings. I was born and raised in Masbate City, Philippines,
          but I moved to Manila to pursue my dream from my
          three preferred choices. I'm a hardworking,courageous, and receptive person who always welcomes new learning at all times, 
          particularly at work. I admire the arts, beaches, and adventure as well.</p>
          <p className="link">
            <ScrollLink to="supported-information" smooth={true} duration={500}>
              Visit this link for supported information
            </ScrollLink>
          </p>
          <ScrollLink to="contact-section" smooth={true} duration={500}>
                    <button className='btn btn-primary'>
                      Contact Me
                    </button>
                  </ScrollLink>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe