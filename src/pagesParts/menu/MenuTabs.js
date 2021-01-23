import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: red;
  color: ${props =>
    props.isActive ? props.theme.colors.white : props.theme.colors.dark};
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
    <div>
      <ul>
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
      </ul>
    </div>
  )
}
