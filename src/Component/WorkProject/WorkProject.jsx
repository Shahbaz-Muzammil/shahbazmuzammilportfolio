import React from 'react';
import {ProjectContainer,ProjectWrapper,ProjectRow,ProjectColumn,ProjectTextWrapper,ProjectHeading} from "./WorkProjectElement"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const WorkProject = () => {
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

                </ProjectColumn>
            </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    );
};

export default WorkProject;