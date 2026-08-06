import "./ProjectContent.css"
import { projects } from "../../portfolio"
import Title from "../Title/Title"
import DisplayIndividualProjectContent from "../DisplayIndividualProjectContent/DisplayIndividualProjectContent"

const ProjectContent = () => {
  return (
    <div>
    <Title scrollFactor={1000}>my work</Title>
    <div className="spacer"></div>
    <div className="project-list">
      {projects.filter(entry => !entry.hidden).map((entry, idx) =>
        <DisplayIndividualProjectContent entry={entry} idx={idx} />
      )}
    </div>
    </div>
  )
}

export default ProjectContent