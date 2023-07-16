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
import SocialIcons from './SocialIcons'
import ScrollBounce from './ScrollBounce'

const Home = () => {

  const projectsRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  const dispatch = useDispatch()

  const welcomeUser = () => {
    dispatch({
      type: notifyTypes.SET_APP_NOTIFICATION,
      payload: "Thank you for visiting my site!"
    })
  }


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

  const setUp = useCallback(async () => {
    welcomeUser()
  }, [])

  useEffect(() => {
    setUp()
  },[setUp])

  return (
    <div>
      <Nav handleRefClick={handleRefClick} />
      <AppNotification />
      <SocialIcons />
      <ScrollBounce />
      <HomeBody>
        <Header /> 
        <Projects projectsRef = { projectsRef } />

      </HomeBody>
    </div>
  )
}

export default Home 


const HomeBody = styled.div`
  background: ${pr => pr.theme.colors.black};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;






`