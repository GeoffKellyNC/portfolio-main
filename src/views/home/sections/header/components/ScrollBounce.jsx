import React from 'react'
import styled from 'styled-components'

import { AiOutlineArrowDown } from 'react-icons/ai'

const ScrollBounce = () => {
  return (
    <ScrollBody>
        <div className="scroll-down">
            <span className="scroll-text">scroll down</span>
            <AiOutlineArrowDown className="scroll-arrow" />
        </div>
        <div className="scroll-down scroll-down--left">
            <span className="scroll-text">scroll down</span>
            <AiOutlineArrowDown className="scroll-arrow" />
        </div>
    </ScrollBody>
  )
}

export default ScrollBounce


const ScrollBody = styled.div`
    width: 80%;
    position: absolute;
    font-size: ${(pr) => pr.theme.fontSizes.medium};
    color: ${pr => pr.theme.colors.accent};
    font-family: ${(pr) => pr.theme.fonts.primary};
    display: flex;
    gap: 103%;
    left: 9%;
    bottom: 2%;

    .scroll-down {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .scroll-down--left {
        
        font-family: ${(pr) => pr.theme.fonts.primary};
    }

    .scroll-down span {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        animation-name: bounce-1;
        animation-timing-function: linear;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes bounce-1 {
        0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        }

        50% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
        }
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        }
    }

    @media ${pr => pr.theme.devices.tablet} {
        display: none;
    }


`