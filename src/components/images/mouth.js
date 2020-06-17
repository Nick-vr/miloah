import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  left: 50px;
  top: -300px;
`

const Mouth = () => {
  const data = useStaticQuery(graphql`
    query {
      mouthImage: file(relativePath: { eq: "mouth.png" }) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Img fluid={data.mouthImage.childImageSharp.fluid} alt="image" />
    </Wrapper>
  )
}

export default Mouth
