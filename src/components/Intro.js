import Typed from "react-typed"
import SocialMedia from "./SocialMedia"
import profile from "../media/profile/portfolio_pic.png"

const Intro = () => {
  return (
    <div className="intro">
      <img src={profile}
        className="profilePic"
        alt="profile"
        width="180"
        height="180"
      />
      <div className="intro-text">
        <h1>Hi There! 👋</h1>
        <h1>I'm Szymon Sarnowicz</h1>
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
  )
}

export default Intro