import React from 'react';
import { ContactContainer, ContactRow, ContactWrapper,ContactColumn, ContactTextWrapper, ContactHeading,ContactInput,ContactInputWrapper1,ContactButton,ContactInput4,ContactTopline, ContactInputWrapper2, ContactInputWrapper3} from './ContactMeElement';

import AOS from 'aos';
  import 'aos/dist/aos.css';
  AOS.init();

const ContactMe = () => {
 
  
    return (
      <ContactContainer>
        <ContactWrapper>
            <ContactRow>
                <ContactColumn>
                <ContactTextWrapper>
                <ContactTopline data-aos="zoom-in-up">
                    Just a Ping Away
                </ContactTopline>
                    <ContactHeading  data-aos="zoom-in-up">
                        Contact Me
                    </ContactHeading>
                </ContactTextWrapper>
                <form action="https://formspree.io/f/xqknowoz" method="POST">


                <ContactInputWrapper1  data-aos="flip-left">
                <ContactInput placeholder="Enter Your Name" name="name"/>
                </ContactInputWrapper1>
                <ContactInputWrapper2  data-aos="flip-left">

                <ContactInput placeholder="Enter Your Mail Id" name="email"/>
                </ContactInputWrapper2>
                <ContactInputWrapper3  data-aos="flip-left">
                    
                <ContactInput4 placeholder="Enter Your Message" name="message"/>
                </ContactInputWrapper3>
               
                <ContactButton data-aos="zoom-out-down">SEND</ContactButton>
                </form>
                </ContactColumn>
            </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    );
};

export default ContactMe;