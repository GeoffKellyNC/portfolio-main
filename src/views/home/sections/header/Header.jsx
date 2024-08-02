import React from 'react'
import Typewriter from './components/TypeWriter'
import styled from 'styled-components'
import { Button } from 'antd'
import SocialIcons from './components/SocialIcons'
import ScrollBounce from './components/ScrollBounce'
import resume from '../../../../resume/Geoffrey-Kelly-Resume.pdf'

const Header = () => {
  return (
    <HeaderStyled>
      <SocialIcons />
      <ScrollBounce />
      <span className='header-title'>Hi, my name is...</span>
      <h1 className='header-name'>GEOFF KELLY</h1>
      <div className='header-tag'>
        <span className='tag-text'>What am I...</span>
        <Typewriter />
      </div>
      <p className='header-desc'>
        I am a software engineer specializing in building (and occasionally designing) 
        full stack applications. I bring new ideas in constructing top-notch full stack applications. 
        Driven by a passion for problem solving, a love for innovation, and wanting to help others.
        I am always seeking new challenges to enhance my abilities and bring your ideas to life.
        Let's work together and make a lasting impact on the world.
      </p>
      <Button 
        type='primary' 
        ghost
        size='large'
        className='resume-button'
      >
        <a 
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </Button>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
  color: white;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 0;

  .header-title {
    font-family: ${pr => pr.theme.fonts.secondary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    color: ${pr => pr.theme.colors.accent};
  }

  .header-name {
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.xl};
    color: ${pr => pr.theme.colors.accent};
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .header-tag {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;

    .tag-text {
      font-size: ${pr => pr.theme.fontSizes.large};
      font-family: ${pr => pr.theme.fonts.primary};
    }
  }

  .header-desc {
    font-family: ${pr => pr.theme.fonts.primary};
    line-height: 1.6;
    max-width: 600px;
    margin-bottom: 1.5rem;
  }

  .resume-button {
    width: auto;
    padding: 0 2rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  @media ${pr => pr.theme.devices.tablet} {
    width: 90%;
    align-items: center;
    text-align: center;

    .header-desc {
      text-align: left;
    }
  }
`