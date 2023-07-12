import React, { useRef } from 'react'
import styled from 'styled-components'

//Components
import Nav from '../../nav/Nav'

const Home = () => {

  const projectsRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()


  const handleRefClick = (e) => {
    switch(e.target.textContent){
      case 'PROJECTS' || '01':
        console.log('Projects') //!REMOVE
        projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 'ABOUT' || '02':
        aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"})
        console.log('About') //!REMOVE
        break
      case 'CONTACT' || '03':
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "start"})
        console.log('Contact') //!REMOVE
        break
      default:
        console.log("Didn't work...")
        return
    }
  }

  return (
    <div>
      <Nav handleRefClick={handleRefClick} />
      <HomeBody>

      </HomeBody>
    </div>
  )
}

export default Home 


const HomeBody = styled.div`
  background: ${pr => pr.theme.colors.black};
  height: 100vh;




`