import Typed from "react-typed"
import SocialMedia from "../SocialMedia/SocialMedia"
import profile from "../../media/profile/portfolio_pic.png"
import "./Intro.css"

const Intro = () => {
  return (
  <div className="intro-container">
    <div className="intro">
      <img src={profile}
        className="profile-pic"
        alt="profile"
      />
      <div className="welcome-text">
        <h1>Hi There! 👋</h1>
        <h1 className="name">I'm Szymon</h1>
        <p className="intro-subtitle">
          <Typed
            strings={[
              "Full Stack Developer",
              "Program Manager",
              "Software Engineer"
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </p>
        <SocialMedia />
      </div>
    </div>
  </div>
  )
}

export default Intro