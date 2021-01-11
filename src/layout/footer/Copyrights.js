import React from "react"
import styled from "styled-components"
import { mainData } from "../../data/mainData"

const StyledWrapper = styled.div`
  padding: 1rem 0;
  @media (max-width: 400px) {
    font-size: 0.875rem;
  }
`

export default function Copyrights() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const copyrightsOwner = mainData.websiteTitle
  const language = mainData.lang

  return (
    <StyledWrapper>
      <p>
        © {currentYear} {copyrightsOwner} -{" "}
        {language === "eng"
          ? "All rights reserved."
          : "Wszystkie prawa zastrzeżone."}
      </p>
    </StyledWrapper>
  )
}
