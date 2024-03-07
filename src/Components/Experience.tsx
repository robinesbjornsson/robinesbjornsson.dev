import React, { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../breakpoints'
// Styled components
const AllExperienceContent = styled.div<{ isOpen: boolean }>`
   max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')}; // Adjust max-height as needed for your content
  overflow: hidden;
  transition: max-height 0.4s ease-in-out; // Transition effect for the max-height property
  display: flex;
  flex-direction: column; // Changed to column for layout
`;

const ExperienceWrapper = styled.div`
  width: 65vw;

  /* border: 2px solid red; */
  @media (${breakpoints.mobileL}) {
    width: 100vw;
  }
`
const ExperienceSection = styled.section`
  /* border: 2px solid red; */
  /* font-family: 'poppins'; */

  padding: 1em;
  margin-bottom: 1em;
`

const ExperienceHeader = styled.h2`
  font-family: 'poppins';
  cursor: pointer;
  user-select: none; // Prevent text selection on double click
`

const ExperienceContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  display: flex;
`
const JobTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid blue; */
  margin-bottom: 0.5em;
  padding: 1em;
  span {
    font-size: larger;
    font-weight: 600;
  }
`
const JobEntry = styled.div`
  /* border: 2px solid green; */
  margin-bottom: 0.5em;
  padding: 1em;
`

const CompetenceTag = styled.span`
  display: inline-block;
  background: #333; // Replace with your tag background color
  color: white; // Replace with your tag text color
  padding: 0.25em 0.75em;
  margin-right: 0.5em;
  border-radius: 5px;
  font-size: 0.75em;
  margin-bottom: 0.5em;
`

// Typescript type for job entries
type JobEntryType = {
  company: string
  title: string
  period: string
  description: string
  technologies: string[]
}

type ExperienceProps = {
  jobEntries: JobEntryType[]
}

// Experience Component
const Experience: React.FC<ExperienceProps> = ({ jobEntries }) => {
  const [isOpen, setIsOpen] = useState(false); // Default to false to start with all entries collapsed

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <ExperienceWrapper>
      <ExperienceHeader onClick={toggleOpen}>
        Arbetslivserfarenhet
      </ExperienceHeader>

      <AllExperienceContent isOpen={isOpen}>
        {jobEntries.map((job, index) => (
          <ExperienceSection key={index}>
            <JobTitle>
              <span>{job.company}</span> {job.period}
            </JobTitle>
            <JobEntry>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <div>
                {job.technologies.map((tech, techIndex) => (
                  <CompetenceTag key={techIndex}>{tech}</CompetenceTag>
                ))}
              </div>
            </JobEntry>
          </ExperienceSection>
        ))}
      </AllExperienceContent>
    </ExperienceWrapper>
  );
};

export default Experience;