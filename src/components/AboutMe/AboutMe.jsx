import React, { useEffect } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './AboutMe.css';
import { Fade } from 'react-reveal';
const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if(!screen.fadeScreen !== props.id)
        return;

        Animations.animations.fadeInScreen(props.id)
    }

    // Subscribe to the observables
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: 'Front-End web developer with background knowledge of MERN stacks with redux, along with a strong knowledge of building efficient, well designed applications with Next Js . Strong professional with a BSC willing to be an asset for an organization.',
        highlights: {
            bullets: [
                "Front-End web developer",
                "Interactive UI as per the design",
                "React Js and Next Js",
                "Redux for State Management",
                "Building REST API",
                "Managing database"
            ],
            heading: "Here are a few highlights:"
        }
    };

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        );
    }
  return (
  <div className='about-me-container screen-container' id={props.id}>
      <div className='about-me-parent'>
        <ScreenHeading
        title='About Me'
        subHeading='Why Choose Me ?'
        />
        <Fade left>
        <div className='about-me-card'>
            <div className='about-me-profile'>

            </div>

            <div className='about-me-details'>
                <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>

                <div className='about-me-highlights'>
                    <div className='highlight-heading'>
                        <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                    </div>
                    
                    {renderHighlight()}
                </div>

                <div className='about-me-options'>
                    <a href='#Contact Me'>
                        <button className='btn primary-btn' href='#ContactMe' >
                        Hire Me
                        </button>
                    </a>
                
                    <a className='' href='./Amine-Elkhalidy.pdf' download='Amine-Elkhalidy.pdf'>
                        <button className='btn highlighted-btn'>
                            Get Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </Fade>
      </div>
  </div>
  );
};

export default AboutMe;
