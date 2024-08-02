import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const MobileNav = ({ handleRefClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { num: '01', text: 'PROJECTS' },
    { num: '02', text: 'ABOUT' },
    { num: '03', text: 'CONTACT' },
    { num: '04', text: 'COMING SOON' }
  ]

  const toggleNav = () => setIsOpen(!isOpen)

  const handleNavClick = (e) => {
    handleRefClick(e)
    setIsOpen(false)
  }

  return (
    <MobileNavStyled>
      <MenuToggle onClick={toggleNav}>
        {isOpen ? <CloseOutlined /> : <MenuOutlined />}
      </MenuToggle>
      <NavMenu isOpen={isOpen}>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={handleNavClick}>
            <span className="nav-num">{item.num}</span>
            <span className="nav-text">{item.text}</span>
          </NavItem>
        ))}
      </NavMenu>
    </MobileNavStyled>
  )
}

export default MobileNav

const MobileNavStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${pr => pr.theme.zIndex.header};
`

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: ${pr => pr.theme.colors.primary};
  font-size: ${pr => pr.theme.fontSizes.large};
  cursor: pointer;
  padding: ${pr => pr.theme.spacing.md};
`

const NavMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${pr => pr.theme.colors.black};
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  display: ${pr => pr.isOpen ? 'block' : 'none'};
  box-shadow: ${pr => pr.theme.shadows.medium};
`

const NavItem = styled.li`
  padding: ${pr => pr.theme.spacing.md};
  cursor: pointer;
  transition: ${pr => pr.theme.transitions.default};

  &:hover {
    background-color: ${pr => pr.theme.colors.purple};
  }

  .nav-num {
    color: ${pr => pr.theme.colors.accent};
    margin-right: ${pr => pr.theme.spacing.sm};
  }

  .nav-text {
    color: ${pr => pr.theme.colors.offWhite};
  }
`