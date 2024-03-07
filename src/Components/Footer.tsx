import React from 'react'
import styled, { keyframes } from 'styled-components'
import linkedin from '../assets/images/linkedin_icon_white.svg'
import github from '../assets/images/github_icon_white.svg'
import ImageLink from './ImageLink'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2d2e32;
  color: white;
  width: 100%;
`

const LeftContainer = styled.div`
  padding-left: 20px; // Adjust padding to match the image design
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin: 20px;
`

const CopyRightText = styled.p`
  font-weight: 500;
  font-size: 1rem;
`



const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <CopyRightText></CopyRightText>
      </LeftContainer>
      <RightContainer>
        <ImageLink
          href='https://linkedin.com/in/yourprofile'
          src={linkedin}
          alt='LinkedIn'
        />
        <ImageLink
          href='https://github.com/yourusername'
          src={github}
          alt='GitHub'
        />
      </RightContainer>
    </FooterContainer>
  )
}

export default Footer
