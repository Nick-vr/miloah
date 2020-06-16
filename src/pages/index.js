import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Mouth from '../components/images/mouth'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hio</h1>
    <Mouth />
  </Layout>
)

export default IndexPage
