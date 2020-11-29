import React from "react"
import styled from "styled-components"
import { mainData } from "../../data/mainData"

const StyledParagraph = styled.p`
  padding: 1rem;
`

export default function Copyrights() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const copyrightsOwner = mainData.websiteTitle
  const language = mainData.lang

  return (
    <div>
      <StyledParagraph>
        © {currentYear} {copyrightsOwner} -{" "}
        {language === "eng"
          ? "All rights reserved."
          : "Wszystkie prawa zastrzeżone."}
      </StyledParagraph>
    </div>
  )
}
