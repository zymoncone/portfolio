import "./ProjectContent.css"
import { projects } from "../../portfolio"
import Title from "../Title/Title"
import DisplayIndividualProjectContent from "../DisplayIndividualProjectContent/DisplayIndividualProjectContent"

const ProjectContent = () => {
  return (
    <div>
    <Title scrollFactor={1000}>my projects</Title>
    <div className="spacer"></div>
    <div>
      {projects.map((entry, idx) =>
        <DisplayIndividualProjectContent entry={entry} idx={idx} />
      )}
    </div>
    </div>
  )
}

export default ProjectContent