import React from 'react';
import {ProjectContainer,ProjectWrapper,ProjectRow,ProjectColumn,ProjectTextWrapper,ProjectHeading} from "./projectElements"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Project.css"
AOS.init();
const Projects = () => {
    return (
      <ProjectContainer>
        <ProjectWrapper>
            <ProjectRow>
                <ProjectColumn>
                <ProjectTextWrapper>
                                
                                    <ProjectHeading data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">My Project</ProjectHeading>
                                    
                                
                               
                            </ProjectTextWrapper>
                            <div class="container">
    <div class="box">
      <div class="imgBx">
        <img src="MYPort.png" alt=""/>
      </div>
      <div class="content">
        <div>
          <h2>My PortFolio</h2>
          <p>i create the portfolio by using the react application in which i am created some reusable component and pure css not use a single css framework
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="LeadMarket.png" alt=''/>
      </div>
      <div class="content">
        <div>
          <h2> Digital Marketing Website</h2>
          <p>this website is for digital marketing company Lead Marketing that lead the to grow your buisness on every platform this application is based on the style component 
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="CrudOps.png" alt=''/>
      </div>
      <div class="content">
        <div>
          <h2>Fully crud Operation website</h2>
          <p>This is application is fully based on the crud opeartion it used all the HTTP Method,It uses the Boosttrap framework for designing
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="OceanFlex.png" alt=''/>

      </div>
      <div class="content">
        <div>
          <h2>Ocean Flex</h2>
          <p> Ocean Flex is packaging company that provide the polymer thin film pacakaging the food and house hold  for Website is build on react and it uses the material ui for the designing
          </p>
        </div>
      </div>
    </div>
  </div>

                </ProjectColumn>
            </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    );
  };
export default Projects;