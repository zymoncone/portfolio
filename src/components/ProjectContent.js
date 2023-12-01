import { projects } from "../portfolio"
import DisplayIndividualProjectContent from "./DisplayIndividualProjectContent"

const ProjectContent = () => {
  return (
    <div>
      {projects.map((entry, idx) =>
        <DisplayIndividualProjectContent entry={entry} idx={idx} />
      )}
    </div>
  )
}

export default ProjectContent