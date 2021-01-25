import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* position: relative; */
  /* position: sticky;
  top: 0; */
`
const StyledList = styled.ul`
  /* right: 0;  */
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
  color: ${props => (props.isActive ? props.theme.colors.white : "#aeaeae")};
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`

export default function MenuTabs({ changeTab, activeTab }) {
  const tabItems = [
    {
      id: 0,
      title: "Starters",
      icon: "tabitem__icon fas fa-child",
    },
    {
      id: 1,
      title: "Breakfast",
      icon: "tabitem__icon fas fa-users",
    },
    {
      id: 2,
      title: "Mains",
      icon: "tabitem__icon fas fa-network-wired",
    },
    {
      id: 3,
      title: "Sides",
      icon: "tabitem__icon fas fa-money-check-alt",
    },
    {
      id: 4,
      title: "Desserts",
      icon: "tabitem__icon fas fa-money-check-alt",
    },
    {
      id: 5,
      title: "Drinks",
      icon: "tabitem__icon fas fa-money-check-alt",
    },
  ]
  return (
    <StyledWrapper>
      <StyledList>
        {tabItems.map(item => (
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
