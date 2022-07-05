import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md' 


export const HeroContainer=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:950px;
position:relative;
z-index:1;

:before{
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    /* background:linear-gradient(180deg,(rgba(0,0,0,0.2) 0%,rgba(0,0,0.6) 100%), linear-gradient(180deg,rgba(0,0,0,0.2) 0%),transparent 100% ); */
    z-index: 2;
      
}

`

export const HeroBg=styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;  
`

export const VideoBg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34; 

`

export const HeroContent=styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
/* background: rgba(255, 255, 255, 0);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(11.5px);
-webkit-backdrop-filter: blur(11.5px); */
color:rgba(199, 244, 221, 1);
height: 600px;
width: 1200px;
 /* display:flex;  */
/* flex-direction:column; */

/* align-items:center;  */
@media screen and (max-width:500px) {
  width:250px;
  height:800px;
}
`

export const HeroH1=styled.h1`


font-size:84px;
text-align:center;
position: relative;
top: 100px;
font-family: 'Bangers', cursive;
font-size:55px;
line-height: 30%;
word-spacing:normal;
letter-spacing: 2px;
text-shadow: 0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114);


@media  screen and (max-width:768px){
    font-size:40px;
    position:relative;
    left: 20px;
    bottom:40px;
    width:17ch;

}

@media screen and (max-width:500px){
    font-size:32px;
    position:relative;
    top:150px;
    right:0px;
    width:17ch;
}
@media screen and (max-width:400px){
    font-size:32px;
    position:relative;
    top:150px;
    right: 10px;
    left: -0px;
    width:17ch;
}
`
export const Herep=styled.p`
margin-top:0px;
font-size:48px;
color:#fff;
text-align:center;
max-width:600px;
position:relative;
top: 80px;
left:300px;
color: #00e472;
font-family: 'Bangers', cursive;
text-shadow: 0 0 3px black,0 0 5px  black ;
@media  screen and (max-width:768px){
    font-size:24px
}

@media screen and (max-width:480px){
    font-size:38px;
    position: relative;
    top: 150px;
    left: 5px;
    
}
`

export const HeroBtnWrapper=styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`

export const ArrowForward=styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

export const ArrowRight=styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`
export const Herop=styled.p`
font-size:35px;
font-family: 'Bangers', cursive;
position: relative;
left:190px;
top: 125px;
word-spacing: 5px;
/* text-shadow: 0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114) ; */
text-shadow: 0 0 3px black,0 0 5px  black ;
@media screen and (max-width:500px) {
    position: relative;
    left:0px;
    top: 200px;
}
`