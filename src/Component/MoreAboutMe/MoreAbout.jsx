import React from 'react';
// import undraw_online_test_re_kyfx from"../../undraw_online_test_re_kyfx.svg"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import {MoreAboutContainer,MoreAboutWrapper,MoreAboutRow,MoreAboutTopLine,MoreAboutHeading,MoreAboutTextWrapper,MoreAboutSubTitle,MoreAboutColumn1,MoreAboutColumn2 } from './MoreAoutElement';
import AOS from 'aos';
  import 'aos/dist/aos.css';
  AOS.init();
const MoreAbout = () => {
    return (
        <div>
            <MoreAboutContainer>
                <MoreAboutWrapper>
                    <MoreAboutRow>
                        <MoreAboutColumn1>
                        <MoreAboutTextWrapper>
                                <MoreAboutTopLine data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                                    More About Me 

                                </MoreAboutTopLine>
                                <MoreAboutHeading data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Education</MoreAboutHeading>
                                <MoreAboutSubTitle></MoreAboutSubTitle>
                            </MoreAboutTextWrapper>
                            <Timeline>
                            <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body1"
          color="#FFFFFF"
          style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)",  fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}} data-aos="fade-right"    data-aos-easing="linear"
          data-aos-duration="400">
          Primary To High School
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector style={{backgroundColor:"rgba(0, 228, 114, 0.5)"}} />
          <TimelineDot sx={{bgcolor:"rgba(0, 228, 114, 1)",color:"black"}}>
            <AutoStoriesIcon/>
          </TimelineDot>
          <TimelineConnector  style={{backgroundColor:"rgba(0, 228, 114, 0.5)"}} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}  data-aos="fade-left"    data-aos-easing="linear"
          data-aos-duration="400" >
          <Typography variant="h6" component="span" style={{color:"#00e472",fontWeight:'800px',fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}} >
            School
          </Typography>
          <Typography style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}} >Medina-Tul-Uloom High School  (2005-2012)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body1"
          style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}  data-aos="fade-right"    data-aos-easing="linear"
          data-aos-duration="400">
        Completed Intermediate!
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  style={{backgroundColor:"rgba(0,228,114,0.5)"}} />
          <TimelineDot  style={{backgroundColor:" rgba(0,228,114)",color:"black"}} >
            < AccountBalanceIcon />
          </TimelineDot>
          <TimelineConnector  style={{backgroundColor:"rgba(0,228,114,0.5)"}} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}  data-aos="fade-left"    data-aos-easing="linear"
          data-aos-duration="400" >
          <Typography variant="h6" component="span" style={{color:"rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}} >
            Junior College
          </Typography>
          <Typography style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}} >Medina-Tul-Uloom Junior College (2012-2014)
             </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body1"
          color="#ffff"
          style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)"}}>
           <Typography  data-aos="fade-right"    data-aos-easing="linear"
          data-aos-duration="400" style={{fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}>Bechlors Of Science  </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  style={{backgroundColor: "rgba(0,228,114,0.5)"}} />
          <TimelineDot  style={{backgroundColor: "rgba(0,228,114)",color:"black"}} >
            <SchoolIcon  />
          </TimelineDot>
          <TimelineConnector style={{backgroundColor:"rgba(0,228,114,0.5)"}} />
        </TimelineSeparator>
        <TimelineContent  data-aos="fade-left"    data-aos-easing="linear"
          data-aos-duration="400" >
          <Typography variant="h6" component="span"  style={{color:"rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}>
            Graduation
          </Typography>
          <Typography style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}>Swami Ramanand Teerth Marathwada University (2014-2018)</Typography>
  
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body1"
          style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)"}}>
           <Typography data-aos="fade-right"    data-aos-easing="linear"
          data-aos-duration="400"  style={{fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}>Master's Of Science  </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  style={{backgroundColor:"rgba(0,228,114,0.5)"}} />
          <TimelineDot  style={{backgroundColor:"#00e472",color:"black"}}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector  style={{backgroundColor:"rgba(0,228,114,0.5)"}} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}  data-aos="fade-left"    data-aos-easing="linear"
          data-aos-duration="400" >
          <Typography variant="h6" component="span"  style={{color:"#00E472",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}>
            Post Graduation
          </Typography>
          <Typography style={{textShadow:"0 0 3px rgba(0,228,114),0 0 5px  rgba(0,228,114)",fontFamily: "'Bangers','cursive'",
          wordSpacing: "7px" ,fontSize:"23px"}}>N.E.S Science College (2018-2020)</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
                            
                        </MoreAboutColumn1>
                        <MoreAboutColumn2>
                    
                        </MoreAboutColumn2>
                    </MoreAboutRow>
                </MoreAboutWrapper>
            </MoreAboutContainer>
        </div>
    );
};

export default MoreAbout;