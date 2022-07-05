import styled from "styled-components"

export const ProjectContainer=styled.div`
color:black;
background-color: rgba(37, 40, 41, 1);
height:800px;

@media screen and (max-width:768px){
    padding:100px 0;
    height: fit-content;
}
`
export const ProjectWrapper=styled.div`
display:grid;
z-index:1;
height:100%;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0px 0px 0px 0px;
justify-content:center;
`
export const ProjectRow=styled.div`
display:grid;
grid-template-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
}
`
export const ProjectColumn=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;

`
export const ProjectTextWrapper=styled.div`
@media screen and (max-width:900px) {
    position: relative;
    left:200px;
}
@media screen and (max-width:800px) {
    position: relative;
    left:0px;
}
`
export const ProjectHeading=styled.h1`
font-family:'Bangers','cursive';
word-spacing: 10px ;
font-size:48px;
color:#00e472;
letter-spacing:2px;
font-weight: 700;
padding-left: 1em;
position: relative;
left: 30px;


`