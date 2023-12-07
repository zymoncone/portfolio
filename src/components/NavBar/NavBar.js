import { useNavigate } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  let navigate = useNavigate()
  return (
    <nav className="nav-bar">
        <button className="button-fancy"
                onClick={() => navigate("/home")}>
          Home
        </button>
        <button className="button-fancy"
                onClick={() => navigate("/resume")}>
          Resume
        </button>
    </nav>
  )
}

export default NavBar