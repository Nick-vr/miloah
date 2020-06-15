import React from 'react'
import styled from 'styled-components'

import Nav from './nav'

const Wrapper = styled.header`
  font-weight: 100;
  padding: 0 30px;
  height: 3rem;
  background-color: #f2d7e0;
`

const Bold = styled.b`
  font-weight: 400;
`

const Header = () => (
  <>
    <Wrapper>
      <span>
        <Bold>Tel:</Bold> 9999999
      </span>
      <span>
        <Bold>Openingsuren:</Bold> Ma-Vr: 10u - 18u
      </span>
    </Wrapper>
    <Nav />
  </>
)

export default Header
