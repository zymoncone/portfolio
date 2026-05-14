import SocialMedia from "../SocialMedia/SocialMedia"
import profile from "../../media/profile/portfolio_pic.png"
import resume from "../../media/Resume_Sarnowicz_Szymon.pdf"
import "./Intro.css"

const bold = { fontWeight: 800 }

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <img src={profile} className="profile-pic" alt="profile" />
        <div className="intro-right">
          <p className="intro-text">
            I'm <span style={bold}>Szymon</span> — a software engineer with a mechanical
            engineering foundation and a Master's in Applied Data Science.
            I build across embedded & autonomous systems, ML pipelines,
            and full-stack products — shipping real systems under tight reliability and resource
            constraints.
          </p>
          <SocialMedia />
          <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">
            view resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
