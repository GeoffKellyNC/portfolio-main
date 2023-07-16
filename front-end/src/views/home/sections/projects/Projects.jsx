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
        <div ref={projectsRef}></div>
        <div className = 'project-title'>
            <span className = 'title-num'> 01 </span>
            <span classname = 'title-text'> PROJECTS </span>
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
    padding-top: 5rem;

`



