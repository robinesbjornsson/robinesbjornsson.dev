import React from 'react'
import styled from 'styled-components'
import fejs from '../assets/images/fejs.png' // Make sure this is the correct path

const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
}

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: white;

  @media (min-width: ${breakpoints.desktop}) {
    padding: 10rem; // Less padding on the sides for desktop
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; // Stack vertically on mobile
  align-items: center; // Center align on mobile
  max-width: 1200px;
  width: 100%;

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row; // Side by side for desktop
    justify-content: space-evenly; // Evenly space for desktop
    align-items: center; // Center align vertically for desktop
    gap: 0; // Remove any gap if set previously
  }
`

const TextSection = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    flex-basis: 50%; // Take up half of the container width
    text-align: left; // Align text to the left on desktop
  }
`

const AboutTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em; // Smaller font size for mobile
  color: #333;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.5em; // Larger font size for tablet and above
  }
`

const AboutText = styled.p`
  font-size: 0.8em; // Smaller font size for mobile
  color: #666;
  margin-top: 0.5em;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1em; // Standard font size for tablet and above
  }
`

const ImageContainer = styled.div`
  width: 100%; // Adjust width as necessary for mobile
  margin-bottom: 2rem; // Space between image and text on mobile

  @media (min-width: ${breakpoints.desktop}) {
    width: 30%; // Adjust width as necessary for desktop
    margin-bottom: 0; // Remove space between image and text on desktop
  }
`;

const StyledImage = styled.img`
  width: 100%; // Full width within its container
  max-width: 500px; // Max width on desktop, adjust as needed
  height: auto; // Maintain aspect ratio
  border-radius: 20px; // Rounded corners

  @media (min-width: ${breakpoints.desktop}) {
    // No changes needed here unless you want to adjust the desktop image size differently
  }
`

const AboutSection = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <ImageContainer>
          <StyledImage src={fejs} alt='Stefan' />
        </ImageContainer>
        <TextSection>
          <AboutTitle>
            Front-end Developer based in Gothenburg, Sweden 📍
          </AboutTitle>
          <AboutText>
            Hey, my name is Stefan, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users.
            <br />
            <br />
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </AboutText>
        </TextSection>
      </ContentWrapper>
    </AboutContainer>
  )
}

export default AboutSection
