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

const Title = (props) => {
  const [offset, setOffset] = useState(0)

  const handleScroll = () => {
    setOffset(window.scrollY / props.scrollFactor)
  }

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 0); // Adjust the delay as needed

    window.addEventListener("scroll", debouncedScroll)
    return () => {
      window.removeEventListener("scroll", debouncedScroll)
    }
  })

  return (
    <StyledTitle $offset={offset}>{props.children}</StyledTitle>
  )
}

export default Title