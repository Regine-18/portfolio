import React from 'react'
import PortfolioNavbar from './PortfolioNavbar';




const Portfolio = () => {

  
  return(
    <>
    <div className='container p-5' id='portfolio-section'>
    <div className='portfolio-title'>
      <h3 className='section-title'>Portfolio</h3>
      <h1 className='description-page'>My Projects</h1>
   </div>
  </div>
  <div className='mt-4'>
  <PortfolioNavbar />
  </div>

    </>
  )
}

export default Portfolio