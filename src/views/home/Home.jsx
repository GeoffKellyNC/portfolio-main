import React, { useRef, useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import * as notifyTypes from '../../store/notifyState/notify.types'
import { useDispatch } from 'react-redux'
import AppNotification from '../../components/AppNotification'
import Header from './sections/header/Header'
import Nav from '../../nav/Nav'
import Projects from './sections/projects/Projects'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import { RxHamburgerMenu } from 'react-icons/rx'
import SpaceMusic from '../../components/animations/SpaceMusic'

const Home = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const projectsRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()
  const dispatch = useDispatch()

  const handleRefClick = (e) => {
    const section = e.target.textContent.split(' ')[1]?.toLowerCase()
    if (section && ['projects', 'about', 'contact'].includes(section)) {
      const ref = { projects: projectsRef, about: aboutRef, contact: contactRef }[section]
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleMobileNav = () => setMobileNavActive(!mobileNavActive)

  const setUp = useCallback(() => {
    dispatch({
      type: notifyTypes.SET_APP_NOTIFICATION,
      payload: "Site Under Construction - Please Excuse the Mess! Some links may not work."
    })
  }, [dispatch])

  useEffect(() => {
    setUp()
  }, [setUp])

  return (
    <HomeStyled>
      <Nav handleRefClick={handleRefClick} isActive={mobileNavActive} />
      <RxHamburgerMenu className='mobile-nav-icon' onClick={toggleMobileNav} />
      <AppNotification />
      <HeaderSection>
        <Header />
      </HeaderSection>
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <SpaceMusic />
      <Contact contactRef={contactRef} />
    </HomeStyled>
  )
}

export default Home 

const HomeStyled = styled.div`
  background: ${pr => pr.theme.colors.black};
  min-height: 100vh;

  .mobile-nav-icon {
    display: none;
  }

  @media ${pr => pr.theme.devices.tablet} {
    .mobile-nav-icon {
      display: block;
      position: fixed;
      top: 1rem;
      left: 1rem;
      font-size: 2rem;
      color: ${pr => pr.theme.colors.primary};
      z-index: 1000;
      cursor: pointer;
    }
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