import React from "react"
import styled from "styled-components"
import { menuItemsData } from "../../data/FullMenu"

const StyledHeading = styled.h2`
  color: ${props => props.theme.colors.gold};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2rem;
  padding-bottom: 3rem;
  text-align: right;
`
const StyledItem = styled.li`
  padding-bottom: 40px;
  &:last-of-type {
    padding-bottom: 0;
  }
`
const StyledItemTop = styled.div`
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
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.125rem;
  text-transform: uppercase;
  @media (max-width: 419px) {
    font-size: 0.875rem;
  }
`
const StyledItemPrice = styled.p`
  padding: 0.5rem 0 0.5rem 1rem;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  font-size: 1.125rem;
  letter-spacing: 1px;
  @media (max-width: 419px) {
    font-size: 0.875rem;
  }
`

const StyledItemDesc = styled.p`
  color: ${props => props.theme.colors.grey};
`

export default function MenuItems({ activeTab }) {
  return (
    <div>
      <StyledHeading>{menuItemsData[activeTab].title}</StyledHeading>
      <ul>
        {menuItemsData[activeTab].list.map(item => (
          <StyledItem key={item.name}>
            <StyledItemTop>
              <StyledItemName>{item.name}</StyledItemName>
              <StyledItemPrice>{item.price}</StyledItemPrice>
            </StyledItemTop>
            <StyledItemDesc>{item.desc}</StyledItemDesc>
          </StyledItem>
        ))}
      </ul>
    </div>
  )
}
