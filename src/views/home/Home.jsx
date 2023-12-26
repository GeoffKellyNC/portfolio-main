import React, { useRef, useEffect, useCallback, useState } from 'react'

// Styled Imports
import styled from 'styled-components'

//Redux Imports
import * as notifyTypes from '../../store/notifyState/notify.types'
import { useDispatch } from 'react-redux'

//Components
import AppNotification from '../../components/AppNotification'
import Header from './sections/header/Header'
import Nav from '../../nav/Nav'
import Projects from './sections/projects/Projects'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'

import { RxHamburgerMenu } from 'react-icons/rx'

// Animations
import SpaceMusic from '../../components/animations/SpaceMusic'

const Home = () => {

  // eslint-disable-next-line no-unused-vars
  const [mobileNavActive, setMobileNavActive] = useState(false)

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
      payload: "Site Under Construction - Please Excuse the Mess! Some links may not work."
    })
  }, [dispatch])

  useEffect(() => {
    setUp()
  },[setUp])

  return (
    <HomeStyled>
      {
        !mobileNavActive ? <Nav handleRefClick={handleRefClick} /> : null
      }
      <RxHamburgerMenu className = 'mobile-nav-icon' />
      <AppNotification />
      <HeaderSection>
        <Header /> 
      </HeaderSection>
      <Projects projectsRef = { projectsRef } />
      <About aboutRef = { aboutRef } />
      <SpaceMusic />
      <Contact contactRef = { contactRef } />
      
    </HomeStyled>
  )
}

export default Home 

const HomeStyled = styled.div`
  background: ${pr => pr.theme.colors.black};
  height: 100vh;


  .mobile-nav-icon {

    display: none;
  }


  @media ${pr => pr.theme.devices.tablet} {

    width: 100%;


    .mobile-nav-icon {
      display: block;
      position: fixed;
      top: 1rem;
      left: 1rem;
      font-size: 2rem;
      color: ${pr => pr.theme.colors.primary};
      z-index: 1000;
    }

`

const HeaderSection = styled.div`
  background: ${pr => pr.theme.colors.black};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

