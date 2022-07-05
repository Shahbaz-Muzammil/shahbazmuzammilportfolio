import styled from "styled-components";


export const ContactContainer=styled.div`

color:black;
background-color:#313536;
height:700px;
border:1px solid #313536;


@media screen and (max-width:768px){
    padding:100px 0;
    height: fit-content;
}
@media screen and (max-width:400px){
    overflow-x:hidden;
}
`
export const ContactWrapper=styled.div`
display:grid;
z-index:1;
height:100%;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0px 0px 0px 0px;
justify-content:center;
/* text-align: center; */

`
export const ContactTextWrapper=styled.div`
max-width:540px;
padding-top:0;
display: grid;
justify-content:left;
position:relative;
right: 135px;
@media screen and (max-width:768px) {
    position: relative;
    /* left:10px; */
}

`

export const ContactRow=styled.div`
display:grid;
grid-template-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
}

`
export const ContactColumn=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;

`
export const ContactHeading=styled.div`
width: 350px;
font-size: 35px;
font-weight: 600;
color:#00e472;
margin-left: 360px;
/* margin-top:50px; */
position:relative;
bottom:20px;
font-family:'Bangers','cursive';
word-spacing: 7px ;
@media screen and (max-width:500px){
    position: relative;
    right:125px;
    width: 350px;
   
}
@media screen and (max-width:400px) {
    position: relative;
    right:135px;
    /* left:10px; */

}
`
export const ContactInputWrapper1=styled.div`

display:flex;

flex-direction:column;
margin-bottom: 60px;
@media screen and (max-width:400px){
    position:relative;
    right:25px;
}


`
export const ContactInputWrapper2=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (max-width:400px){
    position:relative;
    right:25px;
}


`
export const ContactInputWrapper3=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
margin-top:70px;
@media screen and (max-width:400px){
    position:relative;
    right:25px;
}


`
export const ContactInputWrapper4=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (max-width:400px){
    position:relative;
    right:25px;
}


`
export const ContactInput=styled.input.attrs({type:"text"})`
box-sizing: border-box;
padding-left:90px;
background-color:#313536;
width:700px;
height:40px;
border: 3px solid #00e472;
border-radius: 30px;
@media screen and (max-width:500px){
   width:300px;
   position:relative;
   left:40px;

}
@media screen and (max-width:400px){
    position:relative;
   right:120px;

}

`
export const ContactButton=styled.button`
font-family:'Bangers','cursive';

margin-top:20px;
margin-left:250px;
width:200px;
border-radius: 50px;
background-color: #00e472;
white-space: nowrap;
padding: 10px 22px;
color:black;
font-size:18px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
&:hover{
    transition:all 0.2s ease-in-out;
    background-color:black;
    color:white;

}
@media screen and (max-width:500px){
   width:100px;
   position:relative;
   right:110px;

}
@media screen and (max-width:400px){
   width:100px;
   position:relative;
   right:135px;

}
`
export const ContactInput4=styled.input.attrs({type:"textarea"})`
box-sizing:border-box;
width:700px;
height:250px;
border: 3px solid #00e472;
border-radius:25px;
background-color:#313536;
padding-left:50px;
@media screen and (max-width:500px){
   width:300px;
   /* width:150px; */
position:relative;
left:40px;

}
@media screen and (max-width:400px){
   width:300px;
   /* width:150px; */
position:relative;
right:80px;

}
`

export const ContactTopline=styled.h3`
font-family:'Bangers','cursive';
word-spacing: 7px ;
font-size:23px;
color: #00e472;

margin-left: 365px;
/* margin-top:15px; */
position:relative;
bottom:25px;
@media screen and (max-width:500px){
    width:200px;
position:relative;
right:120px;
bottom:65px;
}
@media screen and (max-width:400px) {
    position: relative;
    right:135px;
    bottom:65px;
    /* left:10px; */
}

`
export const ContactForm=styled.div`

`
