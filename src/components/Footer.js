import React from 'react'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
  return (
    <>

    
     <footer className="footer">
       <div className='container d-flex align-items-center '>
              <h2 className='footer-m'>Message Me</h2>
              <SocialMedia />
        </div>
       <div className="footer-border"></div>
        <div className="text-center py-3 pt-4">
          &copy; Regine, Portfolio. 2023. I love my work !.
        </div>
      </footer>
    </>
  )
}

export default Footer