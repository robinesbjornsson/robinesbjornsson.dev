import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../breakpoints'

import TSIcon from '../assets/images/ts_logo.png'

const TechstackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (${breakpoints.mobileL}) {
    flex-direction: column;
  }

  @media (${breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  justify-content: space-around;
  @media (${breakpoints.mobileL}) {
    justify-content: space-around;
  }
`

const TechStackSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  gap: 7px;

  @media (${breakpoints.mobileL}) {
    justify-content: space-around;
  }
`
const TitleMobile = styled.div`
  display: flex;
  align-items: center;
  @media (${breakpoints.desktop}) {
   display: none;
  }
`

const TechIcon = styled.img`
  width: 50px;
  height: auto;
`


const TechStack = () => {
  return (
    <TechstackWrapper>
     
      <TechStackContainer>
        <TechStackSection>
          <TechIcon src={TSIcon} alt='HTML' />
          <TechIcon src={TSIcon} alt='CSS' />
        </TechStackSection>

        <TechStackSection>
          <TechIcon src={TSIcon} alt='HTML' />
          <TechIcon src={TSIcon} alt='CSS' />
        </TechStackSection>

        <TechStackSection>
          <TechIcon src={TSIcon} alt='HTML' />
          <TechIcon src={TSIcon} alt='CSS' />
        </TechStackSection>

        <TechStackSection>
          <TechIcon src={TSIcon} alt='HTML' />
          <TechIcon src={TSIcon} alt='CSS' />
        </TechStackSection>
      </TechStackContainer>
    </TechstackWrapper>
  )
}

export default TechStack
