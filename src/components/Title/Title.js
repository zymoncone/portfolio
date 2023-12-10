import { useState, useEffect } from "react"
import styled from "styled-components"

const StyledTitle = styled.h2`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  padding: 0.6rem 1rem;
  outline: 0;
  border: 0.1rem solid black;
  width: max-content;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  &:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: ${props => (0.5 - props.$offset).toString() + "rem"};
    left: ${props => (0.5 - props.$offset).toString() + "rem"};
    transition: 0.2s;
  }
`

// const scrollFactor = 650

const Title = (props) => {
  const [offset, setOffset] = useState(0)

  const listenScrollEvent = () => {
    setOffset(window.scrollY / props.scrollFactor)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    // console.log(offset)
  })
  return (
    <StyledTitle $offset={offset}>{props.children}</StyledTitle>
  )
}

export default Title