import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import "./NavBar.css"

const NavButton = styled.button`
    margin: 0 1.5rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 0.6rem 1.25rem;
    outline: 0;
    border: 0.1rem solid black;
    border-radius: 0.5rem;
    cursor: ${props => (props.$selected ? "default" : "pointer")};
    background-color: ${props => (props.$selected ? "#ffe54c" : "rgba(0, 0, 0, 0)")};
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: 0.2s;
    &:hover {
      padding: ${props => (props.$selected ? "" : "0.5rem 1rem")};
      margin: ${props => (props.$selected ? "" : "0 1.75rem")};
    }
  `

const NavBar = () => {

  let navigate = useNavigate()
  const [pageNum, setPageNum] = useState(0)

  const handleClick = (address, clickedPageNum) => {
    navigate(address)
    setPageNum(clickedPageNum)
  }

  return (
    <nav className="nav-bar">
      <NavButton $selected={(pageNum === 0)} onClick={() => handleClick("/home", 0)}>
          home
      </NavButton>
      <NavButton $selected={(pageNum === 1)} onClick={() => handleClick("/resume", 1)}>
          resume
      </NavButton>
      <NavButton $selected={(pageNum === 2)} onClick={() => handleClick("/blog", 2)}>
          blog
      </NavButton>
    </nav>
  )
}

export default NavBar