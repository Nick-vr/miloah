import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import LogoText from './logoText'

const StickyNav = styled.nav`
  z-index: 100;
  display: flex;
  justify-content: center;
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
        transition: all 0.5s ease-in-out;
        text-decoration-thickness: 100px;
        &:hover {
          cursor: pointer;
          /* background-color: #000; */
          /* color: #fff; */
          &::first-letter {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`

const navList = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Over Ons',
    link: '/over-ons',
  },
  {
    name: 'Behandelingen',
    link: '/behandelingen',
  },
  {
    name: `Foto's`,
    link: '/fotos',
  },
  {
    name: 'Prijslijst',
    link: '/prijslijst',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

const navListItems = navList.map((item, index) => (
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
  <>
    <StickyNav>
      <LogoText />
      <ul>{navListItems}</ul>
    </StickyNav>
  </>
)

export default Nav
