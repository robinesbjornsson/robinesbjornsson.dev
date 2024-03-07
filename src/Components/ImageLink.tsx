import React from 'react'
import styled, { keyframes } from 'styled-components'

type ImageLinkProps = {
  href: string
  src: string
  alt?: string
}
const jumpAnimation = keyframes`
  50% {
    transform: translateY(-5px);
  }
`

const StyledImageLink = styled.a`
  display: inline-block; // Makes the anchor inline but block-level for transforms
  margin: 0px;
  width: 25px; // Width of the image
  height: 25px; // Height of the image

  img {
    width: 100%; // Make the image fill the container
    height: 100%; // Maintain aspect ratio
    object-fit: cover; // Cover the container without stretching
  }

  &:hover {
    animation: ${jumpAnimation} 0.5s ease-in-out;
  }
`

const ImageLink: React.FC<ImageLinkProps> = ({ href, src, alt }) => {
  return (
    <StyledImageLink href={href} target='_blank' rel='noopener noreferrer'>
      <img src={src} alt={alt} />
    </StyledImageLink>
  )
}

export default ImageLink
