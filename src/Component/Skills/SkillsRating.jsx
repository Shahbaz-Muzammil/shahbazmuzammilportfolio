import React from 'react';
import {SkillWrapDiv,SkillWrapper1,SkillWrapper2,SkillWrapper3,SkillWrapper4,SkillProgress,SkillContainer,SkillWrapper,SkillRow,SkillColumn1,SkillColumn2} from './SkillElement';
import {
    CircularProgressbar,
    // CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  AOS.init();
const SkillsRating = () => {

    const jscript="90"
    const HTML ="99"
   const css="99"
   const redux="85"
   const react="95"
   const mui="75"
   const Bootstrap="85"
   const node="75"
    return (
        <div>
            <SkillContainer>
                <SkillWrapper>
                    <SkillRow>
                        <SkillColumn1>
                  
                               <SkillProgress>
 
 <SkillWrapDiv>
 <SkillWrapper1 data-aos="zoom-out">



   <CircularProgressbar
   
        value={HTML}
        text={`HTML`}
        styles={buildStyles({
            textColor: "rgba(0,228,114)",
            pathColor: "rgba(0,228,114)",
            trailColor: "#DDDDDD",
            
        })}
        /> 
      
      
    </SkillWrapper1> 
     <SkillWrapper2 data-aos="zoom-out-right">
  
            <CircularProgressbar
        value={css}
        text={`CSS`}
        styles={buildStyles({
            textColor: "rgba(0,228,114)",
            pathColor: "rgba(0,228,114)",
            trailColor: "#DDDDDD",
            
        })}
        />
    </SkillWrapper2>
        <SkillWrapper3 data-aos="zoom-out">
     
                    <CircularProgressbar
               value={jscript}
               text={`JScript`}
               styles={buildStyles({
                   textColor: "rgba(0,228,114)",
                   pathColor: "rgba(0,228,114)",
                   trailColor: "#DDDDDD",
             
                })}
                />
        
                </SkillWrapper3>
                <SkillWrapper4  data-aos="zoom-out-right">
               



        <CircularProgressbar
        value={node}
        text={"Node.Js"}
        styles={buildStyles({
            textColor: "rgba(0,228,114)",
            pathColor: "rgba(0,228,114)",
            trailColor: "#DDDDDD",
            
            
        })}/>  
      
        </SkillWrapper4>
    </SkillWrapDiv>
       
 
        </SkillProgress>
                        </SkillColumn1>
                        <SkillColumn2>
                       <SkillProgress>
 
 <SkillWrapDiv>
 <SkillWrapper1  data-aos="zoom-out-left">


   <CircularProgressbar
        value={react}
        text={`React.Js`}
        styles={buildStyles({
            textColor: "rgba(0,228,114)",
            pathColor: "rgba(0,228,114)",
            trailColor: "#DDDDDD",
        })}
        /> 
      
    </SkillWrapper1 > 
     <SkillWrapper2  data-aos="zoom-out-right">
    
            <CircularProgressbar
        value={redux}
        text={`Redux`}
        styles={buildStyles({
            textColor: "rgba(0,228,114)",
            pathColor: "rgba(0,228,114)",
            trailColor: "#DDDDDD",
            
        })}
        />
    </SkillWrapper2>
        <SkillWrapper3 data-aos="zoom-out-left">
        
                    <CircularProgressbar
               value={Bootstrap}
               text={`Bootstrap`}
               styles={buildStyles({
                   textColor: "rgba(0,228,114)",
                   pathColor: "rgba(0,228,114)",
                   trailColor: "#DDDDDD",
                })}
                />
        
                </SkillWrapper3>
                <SkillWrapper4  data-aos="zoom-out-right" >
               



        <CircularProgressbar
        value={mui}
        text={"MUI"}
        styles={buildStyles({
            textColor: "rgba(0,228,114)",
            pathColor: "rgba(0,228,114)",
            trailColor: "#DDDDDD",
            
            
        })}/>  
      
        </SkillWrapper4>
    </SkillWrapDiv>
       
 
        </SkillProgress>
       
                        </SkillColumn2>
                    </SkillRow>
                </SkillWrapper>
            </SkillContainer>
        </div>
    );
};

export default SkillsRating;