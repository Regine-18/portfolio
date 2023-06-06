import React from 'react';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const SocialMedia = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/regine.galanaga/" target="_blank" rel="noopener noreferrer">
        <Facebook className="facebook-icon" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram className="instagram-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="twitter-icon" />
      </a>
      <a href="https://www.linkedin.com/in/regine-galanaga-25b193246/" target="_blank" rel="noopener noreferrer">
        <LinkedIn className="linkedIn-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
