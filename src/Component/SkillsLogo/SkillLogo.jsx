import React from 'react';
import {LogoContainer,LogoWrapper,LogoRow,LogoColumn,Img} from "./SkillElement"
import HTML from "../../PNGS/HTML.png"
import CSS from "../../PNGS/CSS.png"
import JS from "../../PNGS/Js.png"
import Bootstrap from "../../PNGS/Bootstrap.png"
import MUI from "../../PNGS/MUI.png"
import NODE from "../../PNGS/NODE.png"
import NPM from "../../PNGS/NPM.png"
import Redux from "../../PNGS/Redux.png"
import BABEL from "../../PNGS/BABEL.png"
import TS from "../../PNGS/TS.png"
// import WEB from "../../PNGS/WEB.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const SkillLogo = () => {
    return (
        <div>
            <LogoContainer>
                <LogoWrapper>
                    <LogoRow>
                        <LogoColumn>
                            <Img src={HTML} alt="html" data-aos="fade-right"/>
                            <Img src={CSS} alt="" data-aos="fade-left"/>
                            <Img src={JS} alt=""data-aos="fade-right" />
                            <Img src="logo512.png" alt="html" data-aos="fade-left"/>
                            <Img src={TS} alt="" data-aos="fade-right"/>
                            <Img src={Bootstrap} alt="" data-aos="fade-left"/>
                            <Img src={MUI} alt="" data-aos="fade-right"/>
                            <Img src={NPM} alt=""data-aos="fade-left" />
                            <Img src={Redux} alt="" data-aos="fade-right"/>
                            <Img src={BABEL} alt="" data-aos="fade-left" />
                            <Img src={NODE} alt="" data-aos="fade-right"/>
                          
                        
                          
                        </LogoColumn>
                    </LogoRow>
                </LogoWrapper>
            </LogoContainer>
        </div>
    );
};

export default SkillLogo;