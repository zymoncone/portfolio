import "./Collapsible.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Collapsible = (props) => {
  
  const showContent = { gridTemplateRows: "1fr", marginBottom: "0.5rem" }

  const handleOpen = () => {
    props.setOpen(!props.open)
  }

  return (
    <div key={props.idx}>
      <button className="toggle" onClick={handleOpen}>
        <div className="project-title">{props.heading}</div>
        <div className='dropdown-arrow'>
          {props.open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </button>
      <div className="collapsible" style={props.open ? showContent : {}}>
      <div className="project-description">
        {props.children}
      </div>
      </div>
    </div>
  )
}

export default Collapsible