import React from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import './Projects.css';

import SwiperCore, {
    Navigation
  } from 'swiper';
import { Fade } from 'react-reveal';

  
  // install Swiper modules
  SwiperCore.use([Navigation]);


  const Project = ({name, image, description, technologiesList, linkToCode, linkToProject}) => {
    return (
      <>
          <div className='project-profile'>
              
          </div>

          <div className='project-details'>

              <div className='project-name'>
                  <h3>{name}</h3>
              </div>

              <div className='project-description'>
                  {description}
              </div>
  
              <div className='project-highlights'>
                  <span className='project-highlights-title'>The Technologies used:</span>
                  <ul className='project-highlights-list'>
                      {technologiesList.map(tech => (
                          <li className='highlight-name'>
                              <span className='highlight-blob'></span>
                              {tech}
                          </li>
                      ))}
                  </ul>
              </div>
  
              <div className='project-options'>
                  <a href={linkToCode} target='_blank'>
                      <button className='btn primary-btn'>
                          Source Code
                      </button>
                  </a>
                      
                  <a href={linkToProject} target='_blank'>
                      <button className='btn highlighted-btn'>
                          Live Preview
                      </button>
                  </a>
              </div>
          </div>
      </>
    );
  };


const PROJECTS = [
    {
        id: 'project-02',
        name: 'AI News Reader',
        description: 'a simple web project, powered by Alan which is a voice assistant, that helps you to get the latest news with a simple voice command from you, and can also read it for you, for more info visit the website',
        technologies: ['Alan-AI', 'React.js', 'Material UI'],
        image: "../../assets/Projects/ai-news-reader-min.png",
        linkToCode: "https://github.com/AmineElkhalidy/AI-Reader",
        linkToProject: "https://aireader.netlify.app/"
    },
    {
        id: 'project-01',
        name: 'Shopping Store',
        description: 'a simple web project, which allows you to add products to your cart, update their quantities, remove them..., it also gives you the opportunity to pay online...',
        technologies: ['React.js', 'Commerce.js', 'stripe.js', 'Styled Components'],
        image: '../../assets/Projects/shopping-store-min.png',
        linkToCode: "https://github.com/AmineElkhalidy/Shop-Store",
        linkToProject: "https://shop-store.netlify.app/"
    },
    
    {
        id: 'project-03',
        name: 'Crypto For Transactions',
        description: "it's a web 3.0 app, which allows you to send transactions throughout the blockchain network, after connecting to your wallet.",
        technologies: ['React.js', 'Tailwind Css', 'Solidity', 'hardhat'],
        image: '../../assets/Projects/crypto-min.png',
        linkToCode: "https://github.com/AmineElkhalidy/Krypto",
        linkToProject: "https://krypto-app.netlify.app/"
    },

];

const Projects = (props) => {
    let fadeInScreenHandler = (screen) => {
        if(!screen.fadeScreen !== props.id)
        return;

        Animations.animations.fadeInScreen(props.id)
    }

    // Subscribe to the observables
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
  <div className='projects-container' id={props.id}>
      <div className='projects-parent'>
        <ScreenHeading
        title='Projects'
        subHeading='Some Of My Works'
        />
        <Fade right>
        <div className='projects-card'>
            <Swiper navigation={true}>
                {PROJECTS.map((project) => (
                    <SwiperSlide key={project.name} className='swiper-slide'>
                        <Project id={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        technologiesList={project.technologies}
                        linkToCode={project.linkToCode}
                        linkToProject={project.linkToProject}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </Fade>
      </div>
  </div>
  );
};

export default Projects;
