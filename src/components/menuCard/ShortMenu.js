import React from "react"
import { menuItemsData } from "../../data/MenuWithPrices"
import styled from "styled-components"

const StyledItem = styled.div`
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
    z-index: -1;
    height: 100%;
  }
`
const StyledItemName = styled.p`
  color: ${props => props.theme.colors.white};
  padding: 0.5rem 1rem 0.5rem 0;
  background: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.125rem;
  text-transform: uppercase;
`
const StyledItemPrice = styled.p`
  color: ${props => props.theme.colors.white};
  padding: 0.5rem 0 0.5rem 1rem;
  background: ${props => props.theme.colors.dark};
  font-size: 1.125rem;
  letter-spacing: 1px;
`
export default function ShortMenu() {
  return (
    <div>
      {menuItemsData.map(item => (
        <StyledItem key={item.name}>
          <StyledItemName>{item.name}</StyledItemName>
          <StyledItemPrice>{item.price}</StyledItemPrice>
        </StyledItem>
      ))}
    </div>
  )
}
