import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Mouth from '../components/images/mouth'

const MouthWrapper = styled.div`
  /* background-color: lightcyan; */
  width: 350px;
  height: 350px;
`

const Pattern = styled.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJElEQVQoU2NkIBIwEqmOgWyF/9FsgBuEbuIAKsQZCGT7GqeJAFBWBAvAwG9TAAAAAElFTkSuQmCC)
    repeat;
  width: 250px;
  height: 300px;
  position: relative;
  top: 350px;
  top: 50px;
  opacity: 0.5;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MouthWrapper>
      <Pattern />
      <Mouth />
    </MouthWrapper>
  </Layout>
)

export default IndexPage
