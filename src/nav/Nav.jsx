import React from 'react'
import styled from 'styled-components'

const Nav = ({ handleRefClick }) => {
  const navItems = [
    { num: '01', text: 'PROJECTS' },
    { num: '02', text: 'ABOUT' },
    { num: '03', text: 'CONTACT' },
    { num: '04', text: 'COMING SOON' }
  ]

  return (
    <NavStyled>
      <div className='links-container'>
        {navItems.map((item, index) => (
          <NavButton 
            key={index}
            onClick={(e) => handleRefClick(e)}
            className={`nav-${item.text.toLowerCase()}-button`}
          >
            <span className='nav-num'>{item.num}</span>
            <span className='nav-text'>{item.text}</span>
          </NavButton>
        ))}
      </div>
    </NavStyled>
  )
}

export default Nav

const NavStyled = styled.nav`
  box-shadow: 0 10px 20px -10px black;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  width: 100%; 
  background: ${pr => pr.theme.colors.black};

  .links-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-right: 2rem;
  }

  @media ${pr => pr.theme.devices.tablet} {
    display: none;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-family: ${pr => pr.theme.fonts.primary};
  font-size: ${pr => pr.theme.fontSizes.tiny};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  display: flex;
  gap: 1rem;
  color: ${pr => pr.theme.colors.primary};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${pr => pr.theme.colors.purple};
    transform: skew(-20deg) translateX(-100%);
    transition: transform 0.5s;
    z-index: -1;
  }

  &:hover:before {
    transform: skew(-20deg) translateX(0);
  }

  &:hover {
    color: ${pr => pr.theme.colors.black};
  }

  .nav-num {
    color: ${pr => pr.theme.colors.accent};
  }

  .nav-text {
    color: ${pr => pr.theme.colors.offWhite};
  }
`;