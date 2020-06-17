import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import LogoText from './logoText'
import { navLeft, navRight } from '../utils/navlist'

const StickyNav = styled.nav`
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 4rem;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  box-shadow: inset 0px -11px 3px -11px #ccc;
  ul {
    display: flex;
    li {
      margin: 0 1.5rem;
      a {
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: 1rem;
        transition: all 0.4s ease-in-out;
        border-bottom: 1px solid transparent;
        &:hover {
          cursor: pointer;
          border-bottom: 1px solid #f2d7e0;
        }
      }
    }
  }
`

const navLeftItems = navLeft.map((item, index) => (
  <li key={index}>
    <Link
      to={item.link}
      activeStyle={{
        textDecoration: 'underline',
        textDecorationColor: '#f2d7e0',
      }}
    >
      {item.name}
    </Link>
  </li>
))

const navRightItems = navRight.map((item, index) => (
  <li key={index}>
    <Link
      to={item.link}
      activeStyle={{
        textDecoration: 'underline',
        textDecorationColor: '#f2d7e0',
      }}
    >
      {item.name}
    </Link>
  </li>
))

const Nav = () => (
  <StickyNav>
    <ul>{navLeftItems}</ul>
    <Link to="/">
      <LogoText />
    </Link>
    <ul>{navRightItems}</ul>
  </StickyNav>
)

export default Nav
