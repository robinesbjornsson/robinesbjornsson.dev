import React from 'react'
import styled from 'styled-components'

const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  background: #f0f0f0;

`

const ProjectsText = styled.p`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectsText>New projects coming soon... 😎</ProjectsText>
    </ProjectsSection>
  )
}

export default Projects
