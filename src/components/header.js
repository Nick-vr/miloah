import React from 'react'
import styled from 'styled-components'

import Nav from './nav'
import Social from './social'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 100;
  padding: 0 30px;
  height: 3rem;
  background-color: #f2d7e0;
`

const ContactWrapper = styled.div`
  /* background-color: lightseagreen; */
  font-size: 0.9rem;
  margin-right: 20px;

  span:first-child {
    margin-right: 20px;
  }
  b {
    font-weight: 400;
  }
  i {
    font-style: italic;
  }
`

const Header = () => (
  <>
    <Wrapper>
      <ContactWrapper>
        <span>
          <b>Tel:</b> <i>0488 43 44 61</i>
        </span>
        <span>
          <b>Open:</b> <i>Ma - Vr: 10u - 18u</i>
        </span>
      </ContactWrapper>
      <Social />
    </Wrapper>
    <Nav />
  </>
)

export default Header
