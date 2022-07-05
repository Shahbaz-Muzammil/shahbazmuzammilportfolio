import React from 'react';
import { AboutContainer,AboutWrapper,AboutRow,AboutColumn1,AboutColumn2,AboutTextWrapper,AboutTopLine,AboutHeading,AboutSubTitle,Imgwrap,Img,Heading,AboutButton} from './AboutElement';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShahbazMuzamnil from "../ShahbazMuzamnil.pdf"
AOS.init();
const About = () => {
    return (
        <div>
            <AboutContainer>
                <AboutWrapper>
                    <AboutRow>
                        <AboutColumn1>
                            <AboutTextWrapper>
                                <AboutTopLine data-aos="fade-left" data-aos-duration="200">WHO AM I</AboutTopLine>
                                    <AboutHeading data-aos="fade-right">  Web Developer</AboutHeading>
                                        <AboutSubTitle data-aos="fade-left" data-aos-duration="200">
                                        Hi, my name is <span style={{color:"#00e472"}}>Shahbaz Muzammil</span>, i am a Front-End web developer, UI designer. I have my skills in Web Development and advance i have core understanding of advance UI design principles. 

                                        </AboutSubTitle>
                                        <Heading data-aos="fade-right" data-aos-duration="200"> <span style={{fontSize:"48px",color:"#00e472"}}>2+</span> Years of experience. Specialised in building apps, while ensuring a seamless
web experience for end users.</Heading>
<a href={ ShahbazMuzamnil} download style={{ textDecoration:"none"}}>

<AboutButton data-aos="fade-left">Download CV</AboutButton>
</a>
                            </AboutTextWrapper>


                        </AboutColumn1>
                        <AboutColumn2>
                        <Imgwrap data-aos="zoom-in-right" data-aos-easing="linear"> 
                 <Img src="profile-pic (4).png"alt=""/> 
             </Imgwrap>
                        </AboutColumn2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </div>
    );
};

export default About;