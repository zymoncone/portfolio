import { useNavigate } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  let navigate = useNavigate()
  return (
    <nav className="nav-bar">
        <button className="button-fancy"
                onClick={() => navigate("/home")}>
          home
        </button>
        <button className="button-fancy"
                onClick={() => navigate("/resume")}>
          resume
        </button>
        <button className="button-fancy"
                onClick={() => navigate("/blog")}>
          blog
        </button>
    </nav>
  )
}

export default NavBar