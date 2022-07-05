import styled from "styled-components"

export const MoreAboutContainer=styled.div`
background-color: 
#313536;
color: white;
margin:0;
padding:0;
overflow-x:hidden;
height:100%;
@media screen and (max-width:768){
    padding:100px 0;
}
`

export const MoreAboutWrapper=styled.div`
display:grid;
z-index:1;
height: 700px;
width: 100%;
max-width:1100px;
margin-left: auto;
margin-right:auto;
padding:100px 0px ;
justify-content:center;
`
export const MoreAboutRow=styled.div`
display: grid;
grid-template-columns: minmax(auto,1fr);
align-items:center;
grid-template-areas:'col1 col2';
@media screen and (max-width:768){
    grid-template-areas: 'col1' 'col2';
}
`
export const MoreAboutColumn1=styled.div`
margin-bottom:15px;
padding:0px 0px;
grid-area:col1;
padding-right: 0px;
@media screen and (max-width:280px) {
    font-size:22px;
    position: relative;
    width:200px;
}
`
export const MoreAboutTextWrapper=styled.div`
max-width:540px;
padding-top:0;
/* padding-bottom:60px; */
`
export const MoreAboutTopLine=styled.div`
width:275px;
/* background: rgba(0,228,114); */
/* box-shadow: 0 1px 32px 0 rgba(0,228,114);
backdrop-filter: blur( 9.5px );
-webkit-backdrop-filter: blur( 9.5px );
border-radius: 10px; */
text-align:left;
font-weight:600;
box-sizing: border-box;
/* max-width:540px; */
padding-left: 15px;
/* padding-right:5px; */
padding-top:0;
text-transform: uppercase;
/* padding-bottom:60px; */
font-size:43px;
color:#00e472;
font-family: 'Bangers', cursive;
    word-spacing: 7px;
@media screen and (max-width:768px) {
    font-size:32px;
    position: relative;
    left:60px;
}
@media screen and (max-width:360px) {
    font-size:30px;
    position:relative;
    bottom:50px;

    /* margin-bottom:-50px; */
}
@media screen and (max-width:300px) {
    font-size:32px;
    position: relative;
    left:30px;
}
@media screen and (max-width:360px) {
    font-size:32px;
    display: flex;
    justify-content: center;
    align-items: center;
 
}
@media screen and (max-width:200px) {
    font-size:32px;
    position: relative;
    left:60px;
}
@media screen and (max-width:280px) {
    font-size:22px;
    position: relative;
    width:200px;
    left:40px;
}
`
export const MoreAboutHeading=styled.h1`
  font-family: 'Bangers', cursive;
    word-spacing: 7px;
font-style: normal;
font-weight: 400;
font-size: 45px;
line-height: 56px;
display: flex;
justify-content: center;
align-items: center;

margin-bottom:-10px;
color: #FFFFFF;
text-shadow: 0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114) ;

/* font-size:48px;
line-height:1.1;
font-weight:600;
color:'#010606'; */
@media screen and (max-width:480px) {
    font-size:30px;
    position:relative;
    right:"15px";
    margin-bottom:-30px;
}
@media screen and (max-width:360px) {
    font-size:30px;
    position:relative;
    bottom:45px;
    right:"15px";
    margin-bottom:-50px;
}

`
export const MoreAboutColumn2=styled.div`
margin-bottom:15px;
padding:0px 0px;
grid-area: col2;
`
export const ImgWrap=styled.div`
max-width:555px;
height:100%;
`
export const Img=styled.img`
width:100%;
/* margin:-25px 0 10px 470px; */
margin:0 0 5px 0;
left:0;
padding-right:0;
`
export const MoreAboutSubTitle=styled.p`
`
// export const TimelineEncapsulation=styled.div`
// padding-left: 50px;

