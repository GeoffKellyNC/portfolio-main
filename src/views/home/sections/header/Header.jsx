import React from 'react'
import Typewriter from './components/TypeWriter'

// Styled Imports
import styled from 'styled-components'
import { Button } from 'antd'

// Components Imports
import SocialIcons from './components/ScrollBounce'
import ScrollBounce from './components/SocialIcons'

import resume from '../../../../resume/geoff_kelly_0823.pdf'

const Header = () => {
  return (
    <HeaderStyled>
        <SocialIcons />
        <ScrollBounce />
        <span className = 'header-title'>Hi, my name is...</span>
        <h1 className = 'header-name'> GEOFF KELLY </h1>
        <div className = 'header-tag'>
            <span className = 'tag-text'>What am I ...</span>
            <Typewriter />
        </div>
        <p className = 'header-desc'>
            I am a software engineer specializing in building (and occasionally designing) 
            full stack applications. I bring new ideas in constructing top-notch full stack applications. 
            Driven by a passion for problem solving, a love for innovation, and wanting to help others.
            I am always seeking new challenges to enhance my abilities and bring your ideas to life.
            Let's work together and make a lasting impact on the world.
        </p>
            <Button 
                type='primary' 
                style={{
                    width: '20%',
                    margin: '1rem 0',
                }}
                ghost
                size='large'> 
                                <a 
                href={resume}
                target="_blank"
                rel="noreferrer"
            > RESUME </a>
            </Button>
    </HeaderStyled>
  )
}

export default Header


const HeaderStyled = styled.div`
    color: white;
    width: 70%;
    margin: 0 auto;
    display: flex;
    padding-left: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    .header-title {
        font-family: ${pr => pr.theme.fonts.secondary};
        font-size: ${pr => pr.theme.fontSizes.medium};
    }

    .header-name {
        font-family: ${pr => pr.theme.fonts.primary};
        font-size: ${pr => pr.theme.fontSizes.xl};
        color: ${pr => pr.theme.colors.accent};
        font-weight: bold;
    }


    .header-tag {
        display: flex;
        align-items: center;
        gap: 10px;

        & > span {
            font-size: ${pr => pr.theme.fontSizes.large};
            font-family: ${pr => pr.theme.fonts.primary};

        }
    }

    .header-desc {
        font-family: ${pr => pr.theme.fonts.primary};
        line-height: 28px;
        width: 60%;
    }

`