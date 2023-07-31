import React from 'react'

// Styled Imports
import styled from 'styled-components'
import projectTitle from '../../../../assets/titles/projects.png'

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
            <img src = {projectTitle} alt = 'projects' />
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
    }

`



