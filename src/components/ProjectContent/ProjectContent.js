import { projects } from "../../portfolio"
import DisplayIndividualProjectContent from "../DisplayIndividualProjectContent/DisplayIndividualProjectContent"

const ProjectContent = () => {
  return (
    <div>
    <h2 className="title">my projects</h2>
    <div>
      {projects.map((entry, idx) =>
        <DisplayIndividualProjectContent entry={entry} idx={idx} />
      )}
    </div>
    </div>
  )
}

export default ProjectContent