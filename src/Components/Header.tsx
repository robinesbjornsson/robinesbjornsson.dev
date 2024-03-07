import React, { useState } from 'react'
import styled from 'styled-components'
import MobileMenuOverlay from './MobileMenuOverlay'
import { breakpoints } from '../breakpoints'

const HeaderContainer = styled.header`
  font-family: 'poppins';
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 1000;
`

const Logo = styled.div`
  font-size: 1.3em;
  color: #000;
`

const Nav = styled.nav`
  @media (${breakpoints.mobileL}) {
    display: none;
  }
`

const NavLink = styled.a`
  font-weight: 800;
  margin: 10px;
  text-decoration: none;
  color: #000;
  font-size: 1em;
`

const HamburgerIcon = styled.div`
  width: 30px;
  height: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (${breakpoints.mobileL}) {
    display: flex;
  }

  div {
    height: 3px;
    background: #333;
  }
`

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <Logo>robinesbjornsson.dev</Logo>
      <Nav>
        <NavLink href='#home'>Home</NavLink>
        <NavLink href='#about'>About</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
      </Nav>
      <HamburgerIcon onClick={() => setMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      {isMenuOpen && (
        <MobileMenuOverlay
          isOpen={isMenuOpen}
          closeMenu={() => setMenuOpen(false)}
        />
      )}
    </HeaderContainer>
  )
}

export default Header
