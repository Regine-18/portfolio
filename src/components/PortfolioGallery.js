import React from 'react'

const PortfolioGallery = () => {

  const images = [
    require('../assets/image/portfolioPhotos/brgy.png'),
    require('../assets/image/portfolioPhotos/Billing.png'),
  ];
  return (
    <>{images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Images ${index + 1}`}
        width={200}
        height={200}
      />
    ))}
    </>
  )
}

export default PortfolioGallery