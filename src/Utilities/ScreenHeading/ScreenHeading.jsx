import React from 'react';
import './ScreenHeading.css';

const ScreenHeading = ({title, subHeading}) => {
  return (
  <div className='heading-container'>
      <div className='screen-heading'>
        <span>{title}</span>
      </div>

      <div className='screen-sub-heading'>
        <span>
            {subHeading}
        </span>
      </div>
  </div>
);
};

export default ScreenHeading;
