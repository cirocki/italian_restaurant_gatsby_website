import React from "react"
import styled from "styled-components"
import { menuItemsData } from "../../data/FullMenu"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 869px) {
    justify-content: center;
  }
`
const StyledList = styled.ul`
  @media (max-width: 869px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    min-width: 100vw;
  }
  @media (max-width: 739px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledButton = styled.button`
  display: block;
  overflow: hidden;
  align-self: flex-end;
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  border: none;
  border-radius: 8px 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  width: 100%;
  background: ${props =>
    props.isActive ? props.theme.colors.gold : props.theme.colors.dark};
  color: ${props => (props.isActive ? props.theme.colors.white : "#aaa")};
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  @media (max-width: 869px) {
    border-radius: 0;
    margin: 0;
  }
  @media (max-width: 739px) {
    padding: 1rem;
  }
`

export default function MenuTabs({ changeTab, activeTab }) {
  return (
    <StyledWrapper>
      <StyledList>
        {menuItemsData.map(item => (
          <li key={item.id}>
            <StyledButton
              onClick={() => changeTab(item.id)}
              isActive={item.id === activeTab}
            >
              {item.title}
            </StyledButton>
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  )
}
