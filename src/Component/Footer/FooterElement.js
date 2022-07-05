import styled from "styled-components"


export const FooterContainer=styled.div`
color:black;
background-color: rgba(37, 40, 41, 1);
height:90px;
border-radius:1px solid rgba(37,40,41,1);


@media screen and (max-width:768px){
    padding:100px 0;
    height: fit-content;
}

@media screen and (max-width:500px) {
    padding:5px 0;
    height: fit-content;
}

`

export const FooterWrapper=styled.div`
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

export const FooterRow=styled.div`
display:grid;
grid-template-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:'col1 col2';

`

export const FooterColumn=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const FooterText=styled.h1`
font-size:20px;
font-family:'Courier New', Courier, monospace;
color:#00e472;
padding-top:15px;
@media screen and (max-width:500px) {
    padding-bottom: 12px;
}

`