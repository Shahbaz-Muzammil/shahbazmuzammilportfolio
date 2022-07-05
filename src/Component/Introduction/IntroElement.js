import styled from "styled-components"


export const IntroContainer=styled.div`
/* color:yellow; */
box-sizing: border-box;
background-color: rgba(37, 40, 41, 1);
height: 700px;
margin:0;
padding:0;
overflow-x:hidden;
@media screen and (max-width:768px){
    padding:100px 0;
}

`
export const IntroWrapper=styled.div`
display:grid;
z-index:1;
height:700px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
/* padding:0px 0px; */
justify-content:left;
box-sizing: border-box;
`
export const IntroRow=styled.div`
display:grid;
grid-template-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
}
`
export const Column1=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const TextWrapper=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;

`
export const TopLine=styled.div`
font-style: normal;
font-weight: 700;
line-height: 26px;
font-size: 20px;
letter-spacing: 0.13em;
text-transform: uppercase;
color: #00E472;

`
export const Heading=styled.h1`
background: rgba(0,228,114);
box-shadow: 0 1px 32px 0 rgba(0,228,114);
backdrop-filter: blur( 9.5px );
-webkit-backdrop-filter: blur( 9.5px );
border-radius: 10px;
text-align:left;
width: 550px;
letter-spacing: 0.01em;
margin-bottom:24px;
padding:10px;
font-size:40px;
word-spacing: normal;
line-height:1.1;
font-weight:600;
text-transform: uppercase;
color:${({lightText})=>(lightText?'#ff9900':'#2D493B')};

@media screen and (max-width:480px) {
    font-size:32px;
    width: 350px;
}
@media screen and (max-width:320px) {
    font-size:32px;
    width: 250px;
}
@media screen and (max-width:380px) {
    font-size:20px;
    width:300px;
    position:relative;
    right:18px;
}
@media screen and (max-width:364px) {
    font-size:20px;
    width:150px;
 
}

@media screen and (max-width:600px) {
    font-size:25px;
    width:275px;
    position:relative;
    left:12px;
}
@media screen and (max-width:280px) {
    font-size:25px;
    width:250px;
    position:relative;
    left:-0.7rem;
}
`
export const SubTitle=styled.p`
text-align:justify;
color: rgba(171, 174, 176, 1);
`
export const ButtonWrapper=styled.div`
display:flex;
justify-content:flex-start;
align-items: flex-end;

`
export const Column2=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area: col2;
`
export const Imgwrap=styled.div`
max-width:555px;
position: relative;


@media screen and (max-width:768px) {
    position: relative;

    bottom: 6rem;
    height:35px;

    
}
@media screen and (max-width:412px) {
    position: relative;
    bottom: 6rem;
    height: fit-content;

    
}
`
export const Img=styled.img`

width:auto;


margin:0 0 5px 0;
right:0;
padding-right:50px;
position: relative;
bottom:30px;
@media screen and (max-width:854px) {
    height:200px;
    position: relative;
    bottom: 12rem;
}
@media screen and (max-width:800px) {
    height:300px;
    position: relative;
  
    bottom: 12rem;
}
@media screen and (max-width:768px) {
    height:250px;
    position: relative;
    left: 400px; 
    bottom: 9rem;

}
@media screen and (max-width:450px) {
    height:200px;
    position: relative;
    left:55px;

    top: -6rem;
    bottom: 12rem;
}
@media screen and (max-width:400px) {
    height:200px;
    position: relative;
    left:55px;

    top: 1rem;
    bottom: 12rem;
}
@media screen and (max-width:412px) {
    height:200px;
    position: relative;
    left:55px;

    top: 1rem;
    bottom: 12rem;
}

`