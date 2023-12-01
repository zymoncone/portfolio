import { useState } from 'react'

const Collapsible = (props) => {

  const [open, setOpen] = useState(false)
  const showContent = { height: "100%", marginBottom: "1rem" }
  const hideContent = { height: 0, overflow:"hidden" }

  return (
    <div>
      <button className="toggle" onClick={()=>setOpen(!open)}>
        <div className="projectTitle">{props.heading}</div>
        <div className='dropdown-arrow'>˅</div>
      </button>
      <div className="projectDescription" style={open ? showContent : hideContent}>
        {props.children}
      </div>
    </div>
  )
}

export default Collapsible