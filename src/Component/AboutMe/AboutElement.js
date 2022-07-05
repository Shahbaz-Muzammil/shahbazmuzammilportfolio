import  styled  from "styled-components";


export const AboutContainer=styled.div`

color:black;
background-color:#313536;
height:700px;
margin:0;
    padding:0;
    overflow-x:hidden;
@media screen and (max-width:768px){
    padding:100px 0;
    height: fit-content;
}
`
export const AboutWrapper=styled.div`
display:grid;
z-index:1;
height:100%;
width:100%;
max-width:1000px;
margin-right:auto;
margin-left:auto;
padding:0px 0px 0px 0px;
justify-content:center;

`
export const AboutTextWrapper=styled.div`
max-width:540px;
padding-top:0;
display: grid;
justify-content:left;
position:relative;
right: 135px;
@media screen and (max-width:768px) {
    position: relative;
    left:10px;
}

`
    export const AboutRow=styled.div`
    display:grid;
    grid-template-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }

    `


export const AboutColumn1=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;

`


export const AboutTopLine=styled.div`
/* color:#ffc299;
font-size:20px;
line-height:16px;
font-weight:700;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px; */
font-family: 'Bangers', cursive;
    word-spacing: 7px;
font-style: normal;
font-weight: 700;
line-height: 26px;
font-size: 20px;
letter-spacing: 0.13em;
text-transform: uppercase;
color: #00E472;
@media screen and (max-width:400px) {

    display: flex;
    justify-content: center;
}
@media screen and (max-width:500px){
    display: flex;
    justify-content: center;
    font-family: 'Bangers', cursive;
}

`
export const AboutHeading=styled.h1`

text-align:left;
box-sizing: border-box;

width:350px;
word-spacing: 5px;
padding-left:4px;
margin-bottom:24px;
font-size:42px;
line-height:1.1;
font-family: 'Bangers', cursive;
font-weight:400;
word-spacing: 10px;
text-transform:uppercase;
color:${({lightText})=>(lightText?'#f78fa':'#00e472')};

@media screen and (max-width:500px) {
    font-size:28px;
    width:300px;

    position: relative;
    left:-80px;
    padding-left: 3em;
    font-family: 'Bangers', cursive;
}
@media screen and (max-width:400px) {

margin-left: -18px;
padding-right:0em;

}
@media screen and (max-width:320px) {
    font-size:25px;
    width:300px;
    position:relative;
    right:38px;
}
@media screen and (max-width:280px) {
    font-size:25px;
    width:250px;
    position:relative;
    left:-1rem;
}
@media screen and (max-width:900px) {
    position: relative;
    left:120px;
}
@media screen and (max-width:800px) {
    position: relative;
    left:0px;
}


`
export const Imgwrap=styled.div`
@media screen and (max-width:400px){
   position: relative;
   left: 0em;
    
}
@media screen and (max-width:500px){
    position: relative;
    left: 0em;;
    
}
@media screen and (max-width:300px){
    position: relative;
    right:12px;
    
}



`
export const Img=styled.img`



width:550px;

margin:0 0 5px 0;
left:0;
height: 575px;
padding-right:0px;
/* border: 2px solid #00E472; */

@media screen and (max-width:400px) {
    width:330px;
    height: 380px;
    position:relative;
    top: 75px;
    left: 1px;
}
@media screen and (max-width:500px) {
    width:350px;
    height: 400px;
    position:relative;
    top: 75px;
    left:-10px;
}


`
export const AboutSubTitle =styled.div` 
text-align:justify;
max-width:440px;
margin-bottom:35px;
font-size:24px;
line-height:24px;
word-spacing: 5px;
font-weight:400;
color: rgba(171, 174, 176, 1);
@media screen and (max-width:768px){
    width:350px;
}
@media screen and (max-width:400px){
    position: relative;
    left:15px;
    width:300px;
    height:200px;
}
@media screen and (max-width:300px){
    height: 200px;
}
@media screen and (max-width:280px) {
    font-size:15px;
    width:250px;
    position:relative;
    right:15px;
}
@media screen and (max-width:500px){
        position: relative;
        left:0em;
        font-family: 'Bangers', cursive;
}
`
export const AboutColumn2=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area: col2;
`
export const Heading=styled.h1`
width:400px;
color:white;
font-family: 'Bangers', cursive;
font-weight:400;
word-spacing: 10px;
text-align:justify;
word-spacing:5px;
color: rgba(171, 174, 176, 1);
@media screen and (max-width:768px) {
    width:300px;
    font-family: 'Bangers', cursive;
    word-spacing: 7px;
    
}
`
export const AboutButton=styled.button`

  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: black;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: 'Bangers', cursive;
    word-spacing: 7px;
&::after,
&::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

&::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #00e472;
  border-radius: 10px;
}

&::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

&:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

&:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

&:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}


`