import React from "react"
import styled from "styled-components"
import { mainData } from "../../data/mainData"

const StyledParagraph = styled.p`
  padding: 1rem 0;
`
const StyledLink = styled.a`
  color: ${props => props.theme.colors.footerTextColor};
`

export default function Author() {
  const author = mainData.author
  const authorWebsite = mainData.authorURL
  return (
    <div>
      <StyledParagraph>
        Designed and developed by{" "}
        <StyledLink href={authorWebsite}>{author}</StyledLink>
      </StyledParagraph>
    </div>
  )
}
