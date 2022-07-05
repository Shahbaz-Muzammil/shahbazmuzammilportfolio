import styled from "styled-components";




export const SkillContainer=styled.div`
box-sizing: border-box;
color:black;
background-color:  rgba(37, 40, 41, 1);
height:500px;
margin:0;
padding:0;
overflow-x:hidden;

@media screen and (max-width:768px){
    padding:100px 0;
    height: fit-content;
}
`
export const SkillWrapper=styled.div`
display:grid;
z-index:1;
height:100%;
width:100%;
max-width:900px;
margin-right:auto;
margin-left:auto;
padding:0px 0px 0px 0px;
justify-content:right;

`
export const SkillTextWrapper=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;



`
export const SkillRow=styled.div`
display:grid;
grid-template-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
}

`


export const SkillColumn1=styled.div`
max-width: 600px;
margin-bottom:15px;
grid-area:col1;
position: relative;
right:150px;
@media screen and (max-width:500px) {
    width: 400px;
    position:relative;
    left: -20px;
    bottom: 50px;
}
@media screen and (max-width:400px) {
    width: 500px;
    position:relative;
    left: -10px;
    
}
@media screen and (max-width:900px) {
    width: 300px;
   position: relative;
   right:125px;
}
/* @media screen and (max-width:800px) {
    width: 0px;
   position: relative;
   right:30px;
} */

`


export const SkillTopLine=styled.div`
color:#01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
`
export const SkillHeading=styled.h1`
background: rgba(0,228,114);
box-shadow: 0 1px 32px 0 rgba(0,228,114);
backdrop-filter: blur( 9.5px );
-webkit-backdrop-filter: blur( 9.5px );
border-radius: 10px;
text-align:left;
width: 550px;
margin-bottom:24px;
font-size:44px;
width:500px;
padding-left:20px;
text-align:left;
line-height:1.1;
font-weight:600;
text-transform: uppercase;
color:${({lightText})=>(lightText?'#f78fa':'#2D493B')};





`
export const Imgwrap=styled.div`
max-width:555px;

`
export const Img=styled.img`
width:100%;
/* margin:-25px 0 10px 470px; */
margin:0 0 5px 0;
left:0;
height: 100%;
padding-right:0px;
border-bottom-left-radius: 100%;
border-top-left-radius: 100%;
`
export const SkillSubTitle =styled.div`

max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color: rgba(171, 174, 176, 1);
text-align: justify;
`
export const SkillColumn2=styled.div`
max-width: 600px;
margin-bottom:15px;
padding:0 15px;
grid-area: col2;
display: grid;
justify-content:center; 
position: relative;
left:150px;

@media screen and (max-width:500px) {
    width: 500px;
    position:relative;
    left:160px;
    top: 25px;
}
@media screen and (max-width:400px) {
    width: 500px;
    position:relative;
    left: 190px;
    top: 25px;
}
@media screen and (max-width:900px) {
    width: 300px;
   position: relative;
   left: 15px;
}
`
export const SkillProgress=styled.div`
/* display: grid; */
/* justify-content:space-around; */

`
// #313536
export const SkillWrapDiv=styled.div`

/* border:2px solid  rgba(37, 40, 41, 1); */
 
width:400px;
height:400px;
position: relative;
right:50px; 
@media screen and (max-width:500) {
    position: relative;
left:50px; 
}
@media screen and (max-width:400) {
    position: relative;
left:50px; 
}
/* @media screen and (max-width:800px) {
    width: 400px;
   position: relative;
   right: 120px;
} */





`

export const SkillWrapper1=styled.div`
position: absolute;
left:-5px;

height:175px;
width:175px;
display: flex;  
justify-content:right;
@media screen and (max-width:400px){
    height:140px;
    width:140px;
    position: absolute;
left:50px;

}

`
export const SkillWrapper2=styled.div`
position: absolute;
right:5px;

/* padding-top:10px;
padding-left: 50px;
padding-right: 15px; */
height:175px;
width:175px;

/* display:inline-block; */
justify-content:left;
@media screen and (max-width:400px){
    height:140px;
    width:140px;
    position: absolute;
right:50px;

}

`
export const SkillWrapper3=styled.div`
position: absolute;
left:5px;
bottom:5px;

/* padding-top:10px;
padding-left: 10px;
padding-right: 15px; */
height:175px;
width:175px;
display: flex;
justify-content:right;
/* width:510px */
@media screen and (max-width:400px){
    height:140px;
    width:140px;
    position: absolute;
left:50px;

}

`
export const SkillWrapper4=styled.div`
position: absolute;
right:5px;
bottom:5px;
/* padding-top:10px;
padding-left: 10px;
padding-right: 15px; */
height:175px;
width:175px;
/* display: flex;
justify-content:right; */
@media screen and (max-width:400px){
    height:140px;
    width:140px;
    position: absolute;
right:50px;

}


`
