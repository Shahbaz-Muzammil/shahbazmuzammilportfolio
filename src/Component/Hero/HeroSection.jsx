
import { HeroContainer,HeroBg,VideoBg,
    HeroH1,Herep,HeroContent ,Herop
    } from './HeroSectionElement'
// import "./HoreAnimate.css"
import 'animate.css';
    const HeroSection = () => {
  
      return (
        
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src="video1.mp4" type='video1.mp4'/>
            </HeroBg>
            <HeroContent>
                <Herep >Hey I am</Herep>
                
                <HeroH1>SHAHBAZ MUZAMMIL</HeroH1>
                <Herop>I am a Front-End web developer, UI designer.I build the things for a web</Herop>
               
            </HeroContent>
        </HeroContainer>
      )
    }
    
    export default HeroSection