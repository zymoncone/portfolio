import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import "./NavBar.css"

const NavButton = styled.button`
    margin: 0 1.25rem;
    font-size: 0.9rem;
    font-family: 'Manrope', sans-serif;
    letter-spacing: 0.05rem;
    padding: 0;
    outline: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: black;
    font-weight: ${props => (props.$selected ? 700 : 400)};
    text-decoration: ${props => (props.$selected ? "underline" : "none")};
    text-underline-offset: 0.25rem;
    user-select: none;
    -webkit-user-select: none;
    transition: opacity 0.15s;
    &:hover {
      opacity: 0.5;
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
      <NavButton $selected={(pageNum === 1)} onClick={() => handleClick("/blog", 1)}>
          blog
      </NavButton>
    </nav>
  )
}

export default NavBar