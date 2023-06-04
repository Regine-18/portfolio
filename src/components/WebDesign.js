import React from 'react';




function WebDesign() { 

  const imageBrgy = (require('../assets/image/portfolioPhotos/brgy.png'));
  const imageBilling = (require('../assets/image/portfolioPhotos/Billing.png'));

  
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
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

          </div>
        </>
  );
}

export default WebDesign;
