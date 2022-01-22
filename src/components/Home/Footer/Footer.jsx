import React from 'react';
import footerImage from '../../../assets/Home/shape-bg.png';
import './Footer.css';

const Footer = () => {
  return (
  <div className='footer-container'>
      <div className='footer-parent'>
        <img src={footerImage} alt='Footer' />
      </div>
  </div>
  );
};

export default Footer;
