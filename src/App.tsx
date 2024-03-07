import React from 'react'
import styled from 'styled-components'
import Header from './Components/Header'
import './assets/fonts/fonts.css'
import './App.css'
import fejs from './assets/images/fejs.png'
import TechStack from './Components/TechStack'
import { breakpoints } from './breakpoints'
import Projects from './Components/ProjectsSection'
import AboutSection from './Components/AboutSection'
import Footer from './Components/Footer'
import ContactSection from './Components/ContactSection'
import ImageLink from './Components/ImageLink'
import linkedin from '../src/assets/images/linkedin_icon_black.svg'
import github from '../src/assets/images/github_icon_black.svg'
import Experience from './Components/Experience'
import { experienceData } from './data'


const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 0px);
  background: #f0f0f0;

  @media (${breakpoints.mobileL}) {
  }
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  margin-top: 100px;

  background: #f0f0f0;

  @media screen and (${breakpoints.mobileL}) {
    flex-direction: column-reverse; // Changes the order of flex items
    text-align: center;
    padding: 20px;
  }
`

const TitleContainer = styled.div`
  text-align: left;
  padding: 50px;
  @media screen and (${breakpoints.mobileL}) {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #333;
  font-size: 3.5em;
  line-height: 110%;

  @media screen and (${breakpoints.mobileL}) {
    font-size: 3.5em;
  }
`

const Subtitle = styled.p`
  margin: 40px 0 20px 0;
  color: #666;
  @media screen and (${breakpoints.mobileL}) {
    font-size: 1.5em;
  }
`

const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <HeroContainer>
          <TitleContainer>
            <Title>
              Front-End React <br /> Developer 👋
            </Title>

            <Subtitle>
              Hi, I'm Robin. A passionate Front-end React <br /> Developer based
              in Gothenburg, Sweden 📍.
            </Subtitle>

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

            <TechStack />
          </TitleContainer>

          <img src={fejs} className='profileImage' alt='Profile' />
        </HeroContainer>

        <Experience jobEntries={experienceData}/>
      </MainContent>
      <Footer />
    </>
  )
}

export default App
