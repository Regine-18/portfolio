import React from 'react';




function WebDesign() { 

  const imageBrgy = (require('../assets/image/portfolioPhotos/brgy.png'));
  const imageBilling = (require('../assets/image/portfolioPhotos/Billing.png'));
  const imageHotel = (require('../assets/image/portfolioPhotos/Screenshot 2023-06-06 104917.png'));
  
  return (
 <>
          <div className="container">
            <div className="row mt-4">
              <div className="col-sm d-flex align-items-center">
                <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <a href="https://www.figma.com/file/61sQBSIfmFqoKPTsN7HOxu/BARANGAY-MANAGEMENT-SYSTEM?type=design&node-id=0-1&t=CqkfUUr53MqGKwex-0" target="_blank" rel="noopener noreferrer">
                Visit Figma
              </a>
                </p>
                
              </div>
                <div className='col-md-5'>
                  <img src={imageBrgy} className='img-design' alt='billing' />
                </div>
              </div>
            <div className="row mt-5">
              <div className='col-md-5 '>
                 <img src={imageBilling} className='img-design'  alt='billing'/>
              </div>
              <div className="col-sm d-flex align-items-center mt-2">
                <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <a href="https://www.figma.com/file/6ZP5xlx9J1MuqjgAj7VzAY/UI.UX-E-BILLING-SYSTEM--IM?type=design&node-id=0-1&t=MFwyqdz2LwUlz8Yu-0" target="_blank" rel="noopener noreferrer">
                Visit Figma
              </a>
                </p>
              </div>
            </div>
            <div className="row mt-4">
            <div className="col-sm d-flex align-items-center">
              <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              <a href="https://booking.hms-elysiansuites.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
              </p>
              
            </div>
              <div className='col-md-5'>
                <img src={imageHotel} className='img-design' height={220} alt='billing' />
              </div>
            </div>
          </div>
        </>
  );
}

export default WebDesign;
