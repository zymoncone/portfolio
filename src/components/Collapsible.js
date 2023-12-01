const Collapsible = (props) => {
  
  const showContent = { height: "100%", marginBottom: "1rem" }
  const hideContent = { height: 0, overflow:"hidden" }

  const handleOpen = () => {
    props.setOpen(!props.open)
  }

  return (
    <div key={props.idx}>
      <button className="toggle" onClick={handleOpen}>
        <div className="projectTitle">{props.heading}</div>
        <div className='dropdown-arrow'>˅</div>
      </button>
      <div className="projectDescription" style={props.open ? showContent : hideContent}>
        {props.children}
      </div>
    </div>
  )
}

export default Collapsible