import React from 'react';
import { TOTAL_SCREENS } from '../Utilities/commonUtils';

const Container = () => {
    // Here we are maping over all of the total screens then we return the matched one with an id, name and a key
    const mapAllScreens = () => {
        return (
            TOTAL_SCREENS.map(screen => (
                (screen.component) ? <screen.component screenName={screen.screen_name} key={screen.screen_name} id={screen.screen_name} /> : <div key={screen.screen_name}></div>
            ))
        );
    }

    
  return (
      <div className='portfolio-container'>
      {
          mapAllScreens()
      }
      </div>
  
  );
};

export default Container;
