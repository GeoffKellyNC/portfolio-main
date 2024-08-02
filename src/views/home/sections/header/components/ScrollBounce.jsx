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
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  justify-content: space-between;
  color: ${pr => pr.theme.colors.accent};
  font-family: ${pr => pr.theme.fonts.primary};

  .scroll-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .scroll-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    animation: bounce 1s linear infinite;
    font-size: ${pr => pr.theme.fontSizes.small};
  }

  .scroll-arrow {
    margin-top: 0.5rem;
    font-size: ${pr => pr.theme.fontSizes.medium};
    animation: bounce 1s linear infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media ${pr => pr.theme.devices.tablet} {
    display: none;
  }
`