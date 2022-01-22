import React, { useState } from 'react';
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from '../../../Utilities/commonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = () => {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if(!currentScreen || !currentScreen.screenInView)
        return ;

        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screenIndex < 0)
        {

        }
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";

        // Make a space between the header options
        if(index < TOTAL_SCREENS.length - 1)
        classes += ' header-option-separator';

        // Style the selected option
        if(selectedScreen === index)
        classes += ' selected-header-option';

        return classes;
    }

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        );
    }

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if(!screenComponent)
        return;

        screenComponent.scrollIntoView({behavior: 'smooth'});
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }
  return (
  <div className='header-container' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
      <div className='header-parent'>
        <div className='header-logo'>
            <span>Amine Elkhalidy</span>
        </div>
        <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
        </div>
        
        <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
            {getHeaderOptions()}
        </div>
      </div>
  </div>
  );
};

export default Header;
