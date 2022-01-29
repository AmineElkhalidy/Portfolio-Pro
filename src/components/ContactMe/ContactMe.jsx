import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { useForm, ValidationError } from "@formspree/react";
import './ContactMe.css';
import { Zoom } from "react-reveal";


const ContactMe = (props) => {
  const [state, handleSubmit] = useForm("mdobayly");
  let fadeInScreenHandler = (screen) => {
    if(!screen.fadeScreen !== props.id)
    return;

    Animations.animations.fadeInScreen(props.id)
}

// Subscribe to the observables
const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
  <div className="contact-me-container" id={props.id}>
      <div className="contact-me-parent">
        <ScreenHeading
        title='Contact Me'
        subHeading='Keep In Touch'
        />

        <Zoom right>
        <div className="contact-me-card">
          <div className="contact-me-details">
            <h2 className="title">
              Get in touch with me using :
            </h2>

            <div className="contact-details">

              <span className="contact-me-item"><i className="ri-phone-line contact-me-icon"> +212708033586</i></span>
              <span className="contact-me-item"><i class="ri-mail-line contact-me-icon"></i> elkhalidyamine.a@gmail.com</span>

            </div>

            <h2 className="title">
              Or using :
            </h2>

            <div className="social-media-accounts">
              <a href='https://www.facebook.com/amine.elkhalidy.73/' target='_blank'>
                <i className="ri-facebook-fill contact-me-icon"></i>
              </a>

              <a href='https://twitter.com/AmineElkhalidy' target='_blank'>
                <i className="ri-twitter-fill contact-me-icon"></i>
              </a>

              <a href='https://github.com/AmineElkhalidy?tab=repositories' target='_blank'>
                <i className="ri-github-fill contact-me-icon"></i>
              </a>

              <a href='https://www.linkedin.com/in/amine-elkhalidy-1a2a15209/' target='_blank'>
                <i className="ri-linkedin-fill contact-me-icon"></i>
              </a>
          </div>
          </div>

          <form action="https://formspree.io/f/mdobayly" method="POST" className="contact-me-form">
            <div className="input-field">
              <input type="text" name="name" placeholder="Insert your name" />
              <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              />
            </div>

            <div className="input-field">
              <input type="email" name="email" placeholder="Insert your email" />
              <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              />
            </div>

            <div className="input-field-textarea">
              <textarea type="text" name="message" placeholder="Insert your message" />
              <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              />
            </div>

            <div className="contact-me-actions">
              <button className="button" type="submit" disabled={state.submitting}>Send <i class="ri-send-plane-line contact-me-icon"></i></button>
            </div>
          </form>
        </div>
        </Zoom>
      </div>
  </div>
  );
};

export default ContactMe;
