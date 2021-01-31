import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function MyMap() {
  const data = useStaticQuery(graphql`
    query {
      image2: file(
        relativePath: { eq: "subpages/contact/mondello-map-screen.jpg" }
      ) {
        childImageSharp {
          fluid(maxHeight: 320, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>mapa</h1>
      <Img
        fluid={data.image2.childImageSharp.fluid}
        alt="Italian Traditional mask"
      />
    </div>
  )
}
