import React from 'react'

// Styled Imports
import styled from 'styled-components'

// Redux Imports
import { connect } from 'react-redux'

// Components
import Project from './components/Project'




const Projects = ({
    projectsData,
    projectsRef
}) => {
  return (
    <ProjectsSection>
        <div className = 'ref-top' ref={projectsRef}></div>
        <div className = 'project-title-main'>
            <span className = 'project-title-text'> 01 PROJECTS</span>
        </div>
        <div className = 'projects-container'>
            {
                !projectsData ? <div> Getting Projects ... </div> :
                
                projectsData.map((proj, idx) => <Project data = {proj} key = {idx} />)
            }
        </div>
    </ProjectsSection>
  )
}

export default connect(st => ({
    projectsData: st.projectsData
}),{

}) (Projects)


const ProjectsSection = styled.div`
    color: white;
    width: 100%;
    background: ${pr => pr.theme.colors.black};


    .project-title-main{
        text-align: center;
        width: 100%;
        font-family: ${pr => pr.theme.fonts.secondary};
        font-size: ${pr => pr.theme.fontSizes.xl};
        margin: 3rem 0;
        color: ${pr => pr.theme.colors.purple};
    }

    @media ${pr => pr.theme.devices.tablet} {
        .projects-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            
    }




`



