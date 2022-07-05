import React from 'react';
import { Button } from '../ButtonElement';
import { IntroContainer,IntroWrapper,IntroRow,Column1,TextWrapper,TopLine,Heading,SubTitle,ButtonWrapper,Column2,Imgwrap,Img } from './IntroElement';
const Intro = ({imgStart}) => {
    return (
        <>
        <IntroContainer >
        <IntroWrapper>
            <IntroRow >
                <Column1>
                <TextWrapper>
                    <TopLine>About Me</TopLine>
                    <Heading >I have lots of things to prove to myself.<br/> One is I can live my life fearlessly</Heading>
                    <SubTitle>Web Developer, Problem Solver, and a Hiker</SubTitle>
                    <ButtonWrapper>
                       <Button to="home"
                      

                       >github</Button> 
                    </ButtonWrapper>

                </TextWrapper>
                </Column1>
                <Column2>
                <Imgwrap>
                <Img src="undraw_feeling_proud_qne1__1_-removebg-preview.png"alt="" imgStart={imgStart}/>
                </Imgwrap>
                </Column2>
            </IntroRow>
        </IntroWrapper>
    </IntroContainer>
    </>
    
      
    );
};

export default Intro;