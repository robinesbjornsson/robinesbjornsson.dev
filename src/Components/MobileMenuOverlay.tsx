import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

type MobileMenuOverlayProps = {
  isOpen: boolean
  closeMenu: () => void
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

const Overlay = styled.div<{ isOpen: boolean; isClosing: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  align-items: center;
  z-index: 1001;
  animation: ${({ isOpen, isClosing }) =>
    isOpen
      ? css`
          ${fadeIn} 0.3s forwards
        `
      : isClosing
      ? css`
          ${fadeOut} 0.3s forwards
        `
      : 'none'};
`
const Menu = styled.nav<{ isClosing: boolean }>`
  background: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  transform: translateX(100%);
  animation: ${({ isClosing }) =>
    isClosing
      ? css`
          ${slideOut} 0.3s forwards
        `
      : css`
          ${slideIn} 0.3s forwards
        `};
`

const MenuItem = styled.a`
  color: #333;
  font-size: 1.5rem; /* Adjust font size as needed */
  padding: 30px 0; /* Add padding to each menu item for spacing */
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: color 0.3s;

  &:hover {
    color: #555; /* Change color on hover */
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 20px; /* Position the close button */
  right: 20px;
`

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
  isOpen,
  closeMenu,
}) => {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClosing) {
      timer = setTimeout(() => {
        closeMenu(); // Actually close the menu
      }, 300); // Timeout matches the animation duration
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isClosing, closeMenu]);
  
  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false); // Ensures the overlay goes away when menu is closed
    }
  }, [isOpen]);


  return (
    <Overlay isOpen={isOpen} isClosing={isClosing}>
      <Menu isClosing={isClosing}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <MenuItem href='#home' onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem href='#about' onClick={handleClose}>
          About
        </MenuItem>
        <MenuItem href='#projects' onClick={handleClose}>
          Projects
        </MenuItem>
        <MenuItem href='#contact' onClick={handleClose}>
          Contact
        </MenuItem>
      </Menu>
    </Overlay>
  )
}

export default MobileMenuOverlay
