import styled from "styled-components"


export const LogoContainer=styled.div`
color:black;
background:  rgba(37, 40, 41, 1);
background: linear-gradient(90deg, rgba(49,53,54,1) 30%,  rgba(37, 40, 41, 1) 70%);
height:150px;

@media screen and (max-width:768px){
    padding:100px 0;
    height: fit-content;
}
@media screen and (max-width:768px) {

    height:100px;
    
    
}
@media screen and (max-width:900px) {

    height:100px;

    
}
@media screen and (max-width:1100px) {

    height:70px;
}
@media screen and (max-width:1200px) {
   
    height:60px;
}
@media screen and (max-width:1300px) {

    height:200px;
}
@media screen and (max-width:800px) {

    height:40px;
}
@media screen and (max-width:700px) {

    height:30px;
}
@media screen and (max-width:600px) {
  
    height:30px;
}
@media screen and (max-width:500px) {
  
    height:100px;
}
@media screen and (max-width:400px) {
   
    height:30px;
}
@media screen and (max-width:300px) {
 
    height:30px;
}
@media screen and (max-width:200px) {
   
    height:130px;
}

`

export const LogoWrapper=styled.div`
display:grid;
z-index:1;
height:100%;
width:100%;

justify-content:center;
align-items: center;
`
export const LogoRow=styled.div`


    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }

`

export const LogoColumn=styled.div`
margin-bottom:15px;
/* padding:0 15px; */
grid-area:col1;
@media screen and  (max-width:370px) {
    position: relative;
    right:10px;
}
`
export const Img=styled.img`
width:70px;
margin:0 0 0 0;
left:0;
height: 70px;
justify-content:space-around;
padding-left: 30px;
padding-right:0px;
/* border: 2px solid #00E472; */
justify-items:center ;
@media screen and (max-width:768px) {
    width:100px;
    height:100px;
    
    
}
@media screen and (max-width:900px) {
    width:100px;
    height:100px;

    
}
@media screen and (max-width:1100px) {
    width:70px;
    height:70px;
}
@media screen and (max-width:1200px) {
    width:60px;
    height:60px;
}
@media screen and (max-width:1300px) {
    width:40px;
    height:40px;
}
@media screen and (max-width:800px) {
    width:40px;
    height:40px;
}
@media screen and (max-width:700px) {
    width:30px;
    height:30px;
}
@media screen and (max-width:600px) {
    width:20px;
    height:20px;
}
@media screen and (max-width:500px) {
    position:relative;
    bottom: 60px;
    width:60px;
    height:60px;
}
@media screen and (max-width:400px) {
    position:relative;
    bottom: 80px;
    width:60px;
    height:60px;
}
@media screen and (max-width:300px) {
    width:30px;
    height:30px;
}
@media screen and (max-width:200px) {
    width:30px;
    height:30px;
}


`
