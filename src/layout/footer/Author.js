import React from "react"
import styled from "styled-components"
import { mainData } from "../../data/mainData"

const StyledParagraph = styled.p`
  padding: 1rem;
`

export default function Author() {
  const author = mainData.author
  const authorWebsite = mainData.authorURL
  return (
    <div>
      <StyledParagraph>
        Designed and developed by <a href={authorWebsite}>{author}</a>
      </StyledParagraph>
    </div>
  )
}
