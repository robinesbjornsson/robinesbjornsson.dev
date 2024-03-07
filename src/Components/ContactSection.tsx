import React from 'react'
import styled from 'styled-components'

const ContactSectionWrapper = styled.div`
  display: flex;
  font-family: 'poppins';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5rem; // Adjust padding to match the design
`

const ContactItem = styled.div`
  color: #2d2e32;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 1rem; // Adjust font size as needed
  margin: 0.5rem 0; // Provide some vertical spacing between items
`

const ContactTitle = styled.h2`
  color: #333;
  font-size: 2rem; // Adjust font size to match the design
  margin-bottom: 1rem; // Space below the title
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 800px; // Max width of the contact items container
`

// Adjust the following as needed to match the design
const Icon = styled.span`
  font-size: 2rem; // Size of the emoji icons
`

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <ContactTitle>Don't be shy! Hit me up! 👋</ContactTitle>
      <ContactInfo>
        <ContactItem>
          <span>✉️   robin.esbjornsson@hotmail.com</span>
        </ContactItem>
      </ContactInfo>
    </ContactSectionWrapper>
  )
}

export default ContactSection
