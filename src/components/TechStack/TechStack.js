import "./TechStack.css"
import Title from "../Title/Title"
import { CgCPlusPlus } from "react-icons/cg"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di"
import {
  SiPostgresql,
} from "react-icons/si"

const Techstack = () => {
  return (
    <div>
      <Title scrollFactor={800}>my software stack</Title>
      <div className="tech-col">
        <div className="tech-row">
          <div className="tech-icon-wrapper">
            <DiPython className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper">
            <CgCPlusPlus className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper">
            <DiReact className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper">
            <DiJavascript1 className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper">
            <DiNodejs className="tech-icon" />
          </div>
          <div className="tech-icon-wrapper">
            <SiPostgresql className="tech-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techstack;