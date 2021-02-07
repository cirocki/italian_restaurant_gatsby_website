import React from "react"
import styled from "styled-components"
import { menuItemsData } from "../../data/FullMenu"

const StyledItem = styled.li`
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  &:before {
    content: "";
    border-top: dotted 2px ${props => props.theme.colors.gold};
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`
const StyledItemName = styled.p`
  padding: 0.5rem 1rem 0.5rem 0;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.125rem;
  text-transform: uppercase;
  @media (max-width: 419px) {
    font-size: 0.875rem;
  }
`
const StyledItemPrice = styled.p`
  padding: 0.5rem 0 0.5rem 1rem;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  font-size: 1.125rem;
  letter-spacing: 1px;
  @media (max-width: 419px) {
    font-size: 0.875rem;
  }
`
export default function ShortMenu() {
  console.log(menuItemsData)
  return (
    <ul>
      {menuItemsData[1].list.map(item => (
        <StyledItem key={item.name}>
          <StyledItemName>{item.name}</StyledItemName>
          <StyledItemPrice>{item.price}</StyledItemPrice>
        </StyledItem>
      ))}
    </ul>
  )
}
