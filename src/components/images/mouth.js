import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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

  return <Img fluid={data.mouthImage.childImageSharp.fluid} alt="image" />
}

export default Mouth
