import React from 'react';
import Typical from 'react-typical';
import './Profile.css';


const Profile = () => {
  return (
  <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
            <div className='colz'>
                <div className='colz-icon'>
                    <a href='https://www.facebook.com/amine.elkhalidy.73/' target='_blank'>
                        <i className="ri-facebook-fill"></i>
                    </a>

                    <a href='https://twitter.com/AmineElkhalidy' target='_blank'>
                        <i className="ri-twitter-fill"></i>
                    </a>

                    <a href='https://github.com/AmineElkhalidy?tab=repositories' target='_blank'>
                        <i className="ri-github-fill"></i>
                    </a>

                    <a href='https://www.linkedin.com/in/amine-elkhalidy-1a2a15209/' target='_blank'>
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </div>
            </div>

            <div className='profile-details-name'>
                <span className='primary-text'>
                    Hello, I am <span className='highlighted-text'>Amine Elkhalidy</span>
                </span>
            </div>

            <div className='profile-details-role'>
                <span className='primary-text'>
                    <h2>
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Enthusiastic Dev",
                            1200,
                            "FrontEnd Web Dev",
                            1200,
                            "React Js Dev",
                            1200,
                            "Next Js Dev",
                            1200
                        ]}
                        
                        />
                    </h2>
                    <span className='profile-role-tagline'>Knock of building web applications with front and back end technologies.</span>
                </span>
            </div>

            <div className='profile-options'>
               <button className='btn primary-btn'>
                   Projects
               </button>
                
              <a className='' href='./Amine-Elkhalidy.pdf' download='Amine-Elkhalidy.pdf'>
                <button className='btn highlighted-btn'>
                    Get Resume
                </button>
              </a>
            </div>
        </div>

        <div className='profile-picture'>
            <div className='profile-picture-background'>
                Amine Elkhalidy
            </div>
        </div>
      </div>
  </div>
  );
};

export default Profile;
