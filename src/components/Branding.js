import React from 'react';
import '../App.css';

function Branding() {

  const image2ndBrand = require('../assets/image/portfolioPhotos/brandingDesign/2ndbranding.jpg');
  const image3rdBrand = require('../assets/image/portfolioPhotos/brandingDesign/3rdbranding.jpg');
  const image4thBrand = require('../assets/image/portfolioPhotos/brandingDesign/4branding.jpg');
  const image5thBrand = require('../assets/image/portfolioPhotos/brandingDesign/5thbranding.jpg');
  const image6thBrand = require('../assets/image/portfolioPhotos/brandingDesign/6thBranding.jpg');
  const size = '400x300';
  const [width, height] = size.split('x');

  return (
    <>
      <div className="container p-2 ">
        <div className="row" id='row'>
          <div className="col-sm mt-4">
            <div className="img-overlay">
            <img src={image6thBrand} className="img-design" alt="billing" width={width} height={height} />
            </div>
          </div>
          <div className="col-sm mt-4">
          <div className="img-overlay">
            <img src={image2ndBrand} className="img-design" alt="billing" width={width} height={height} />
          </div>
          </div>
          <div className="col-sm mt-4">
          <div className="img-overlay">
            <img src={image3rdBrand} className="img-design" alt="billing" width={width} height={height} />
          </div>
          </div>
        </div>
        <div className="row mt-4" id='row' >
          <div className="col-sm mt-4">
          <div className="img-overlay">
            <img src={image4thBrand} className="img-design" alt="billing" width={width} height={height} />
          </div>
          </div>
          <div className="col-sm mt-4">
          <div className="img-overlay">
            <img src={image5thBrand} className="img-design" alt="billing" width={width} height={height} />
          </div>
          </div>
          <div className="col-sm mt-4">
          <div className="img-overlay">
            <img src={image6thBrand} className="img-design" alt="billing" width={width} height={height} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
