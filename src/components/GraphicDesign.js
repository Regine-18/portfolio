import React from 'react';


function GraphicDesign() { 

  
  const imageIndividual = (require('../assets/image/portfolioPhotos/graphicDesign/regine-individual.png'));
  const imageWedding= (require('../assets/image/portfolioPhotos/graphicDesign/WeddingInvitation.jpg'));
  const size ='100x100';
  const [width, height] = size.split('x');

  return (
       <>
          <div className="container p-2">
            <div className="row" id='row'>
              <div className="col-lg d-flex align-items-center">
                <img src={imageIndividual} className='img-radius' alt='billing' width={width} height={height}/>
              </div>
                <div className='col-lg mt-3'>
                  <img src={imageWedding} className='img-radius' alt='billing' width={width} height={width}/>
                </div>
            </div>
          </div>
        </>
  );
}

export default GraphicDesign;
