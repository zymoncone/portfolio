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
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:after {
      content: "";
      background-color: #ffe54c;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: ${props => (props.$selected ? 0 : "0.5rem")};
      left: ${props => (props.$selected ? 0 : "0.5rem")};
      transition: 0.2s;
    } &:hover:after {
      top: 0;
      left: 0;
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