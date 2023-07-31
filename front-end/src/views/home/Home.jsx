import React, { useRef, useEffect, useCallback } from 'react'

// Styled Imports
import styled from 'styled-components'

//Redux Imports
import { connect } from 'react-redux'
import * as notifyTypes from '../../store/notifyState/notify.types'
import { useDispatch } from 'react-redux'

//Components
import AppNotification from '../../components/AppNotification'
import Header from './sections/header/Header'
import Nav from '../../nav/Nav'
import Projects from './sections/projects/Projects'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'

const Home = () => {

  const projectsRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  const dispatch = useDispatch()




  const handleRefClick = (e) => {
    switch(e.target.textContent){
      case 'PROJECTS' || '01':
        projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 'ABOUT' || '02':
        aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"})
        break
      case 'CONTACT' || '03':
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "start"})
        break
      default:
        console.log("Didn't work...")
        return
    }
  }

  const setUp = useCallback(async () => {
    // Welcome User Notification
    dispatch({
      type: notifyTypes.SET_APP_NOTIFICATION,
      payload: "Thank you for visiting my site!"
    })
  }, [dispatch])

  useEffect(() => {
    setUp()
  },[setUp])

  return (
    <HomeStyled>
      <Nav handleRefClick={handleRefClick} />
      <AppNotification />
      <HeaderSection>
        <Header /> 
      </HeaderSection>
      <Projects projectsRef = { projectsRef } />
      <About aboutRef = { aboutRef } />
      <Contact contactRef = { contactRef } />
      
    </HomeStyled>
  )
}

export default Home 

const HomeStyled = styled.div`
  background: ${pr => pr.theme.colors.black};
  height: 100vh;

`

const HeaderSection = styled.div`
  background: ${pr => pr.theme.colors.black};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

