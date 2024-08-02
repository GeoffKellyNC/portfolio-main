import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

const messagesToDisplay = [
  "Problem Solver",
  "Full Stack Developer",
  "Driven To Learn"
]

const TypeWriterEffect = () => {
  return (
    <StyledTyping>
      <Typewriter 
        options={{
          strings: messagesToDisplay,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
          wrapperClassName: 'typewriter-wrapper',
          cursorClassName: 'typewriter-cursor',
        }}
      />
    </StyledTyping>
  )
}

export default TypeWriterEffect

const StyledTyping = styled.div`
  .typewriter-wrapper {
    font-size: ${pr => pr.theme.fontSizes.large};
    color: ${pr => pr.theme.colors.secondary};
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: 300;
  }

  .typewriter-cursor {
    font-size: ${pr => pr.theme.fontSizes.large};
    color: ${pr => pr.theme.colors.secondary};
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`