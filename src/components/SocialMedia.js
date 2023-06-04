import React from 'react'
import {  Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material'

const SocialMedia = () => {
  return (
    <>
      <div className="social-icons">
         <Facebook className='facebook-icon' />
         <Instagram className='instagram-icon'/>
         <Twitter className='twitter-icon' />
         <LinkedIn className='linkedIn-icon' />
      </div>
    </>
  )
}

export default SocialMedia