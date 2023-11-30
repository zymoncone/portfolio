import { useState } from 'react'

const Collapsible = (props) => {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <button className="toggle" onClick={()=>setOpen(!open)}>
        <div className="projectTitle">{props.heading}</div>
        <div className='arrow'>˅</div>
      </button>
      <div className="projectDescription" style={open ? { height: "100%" } : { height: 0, overflow:"hidden" }}>
        {props.children}
      </div>
    </div>
  )
}

export default Collapsible