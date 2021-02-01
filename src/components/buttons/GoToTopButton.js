import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"
import { gsap } from "gsap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.gold};
  border: none;
  outline: none;
  z-index: 1000;
  cursor: pointer;
  @media (max-width: 360px) {
    right: 0px;
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`

export default function GoToTopButton() {
  const [showButton, setShowButton] = useState(false)

  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 500) {
      setShowButton(true)
    } else if (showButton && window.pageYOffset <= 500) {
      setShowButton(false)
    }
  }

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", checkScrollTop)
  }

  // GSAP
  let btnTop = useRef(null)
  const [showBtnTL] = useState(
    gsap.timeline({
      paused: true,
      defaults: { ease: "power4.out" },
    })
  )

  useEffect(() => {
    showBtnTL
      .fromTo(btnTop.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 })
      .reverse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    showBtnTL.reversed(!showButton)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showButton])

  return (
    <StyledButton
      ref={btnTop}
      onClick={() => scroll.scrollTo(0)}
      aria-label="Scroll top"
    >
      <StyledIcon icon={faChevronUp} />
    </StyledButton>
  )
}
