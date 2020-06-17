/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'

import { FacebookF } from '@styled-icons/fa-brands/FacebookF'
import { Instagram } from '@styled-icons/fa-brands/Instagram'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60px;
`

const StyledFacebook = styled(FacebookF)`
  height: 20px;
  opacity: 0.4;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`

const StyledInstagram = styled(Instagram)`
  height: 20px;
  opacity: 0.4;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`

const Social = () => (
  <Wrapper>
    <a href="//instagram.com" rel="noopener noreferrer" target="_blank">
      <StyledInstagram />
    </a>
    <a href="//facebook.com" rel="noopener noreferrer" target="_blank">
      <StyledFacebook />
    </a>
  </Wrapper>
)
export default Social
