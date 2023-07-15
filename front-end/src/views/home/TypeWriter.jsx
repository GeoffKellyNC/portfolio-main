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
            options = {{
                cursor: '|',
                wrapperClassName: 'statement-text-type',
                cursorClassName: 'statement-cursor',
                delay: 50,
                strings: messagesToDisplay,
                loop: true,
                autoStart: true,
                loopWait: 1000
            }}
        />
    </StyledTyping>
  )
}

export default TypeWriterEffect


const StyledTyping = styled.div`

    .statement-text-type {
        font-size: ${(pr) => pr.theme.fontSizes.large};
        color: ${(pr) => pr.theme.colors.secondary};
        font-family: ${(pr) => pr.theme.fonts.primary};
        font-weight: 300;
        width: 100%;
    }

    .statement-cursor {
        font-size: ${(pr) => pr.theme.fontSizes.large};
        color: ${(pr) => pr.theme.colors.secondary};
        font-family: ${(pr) => pr.theme.fonts.primary};
        font-weight: 300;
        animation: blink 1s step-end infinite;

        @keyframes blink {
        50% {
            opacity: 0;
        }
        }

    }


`