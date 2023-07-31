import React from 'react'
import styled from 'styled-components'


const Nav = ({
    handleRefClick
}) => {
  return (
    <NavStyled>
        <div className='links-container'>
            <Button 
                className='nav-projects-button'
                onClick={(e) => handleRefClick(e)}>
                <span className='nav-project-num num'>01</span>
                <span className='nav-project-text'>PROJECTS</span>
            </Button>
            <Button 
                className='nav-about-button'
                onClick={(e) => handleRefClick(e)}>
                <span className='nav-about-num num'>02</span>
                <span className='nav-about-text'>ABOUT</span>
            </Button>
            <Button 
                className='nav-contact-button'
                onClick={(e) => handleRefClick(e)}>
                <span className='nav-contact-num num'>03</span>
                <span className='nav-contact-text'>CONTACT</span>
            </Button>
            <Button 
                className='nav-future-button'
                onClick={(e) => handleRefClick(e)}>
                <span className='nav-future-num num'>04</span>
                <span className='nav-future-text'>COMING SOON</span>
            </Button>
        </div>
    </NavStyled>
  )
}

export default Nav

const NavStyled = styled.div`
    box-shadow: 0 10px 20px -10px black;
    height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    z-index: 100;
    width: 100%; 
    background: ${pr => pr.theme.colors.black};

    
    .links-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.tiny};
    font-weight: ${pr => pr.theme.fontWeights.normal};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    display: flex;
    gap: 1rem;
    color: ${pr => pr.theme.colors.primary};
    font-weight: ${pr => pr.theme.fontWeights.normal};
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #9400D3; 
        transform: skew(-20deg) translateX(-100%);
        transition: transform 0.5s;
        z-index: -1;
    }

    &:hover:before {
        transform: skew(-20deg) translateX(0);
    }

    }

    .nav-project-text,
    .nav-about-text,
    .nav-contact-text,
    .nav-future-text {
        color: #fff;
    }
`;
