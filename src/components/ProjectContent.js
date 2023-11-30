import Collapsible from "./Collapsible"
import { projects } from "../portfolio"

const projectContent = () => {
  return (
    <div>
      {projects.map((entry, idx) =>
        <div key={idx}>
          <Collapsible heading={entry.projectName}>
            <div className="projectContent">
              <div className="projectImages">
                <img src={entry.image1} alt="profile" width="400" height="200" />
                <img src={entry.image2} alt="profile" width="400" height="200" />
              </div>
              <p className="descriptionText">{entry.description}</p>

              <div className="projectFooter">
                <p className="date">{entry.date}</p>
                {entry.linkType !== "None" &&
                  <p className="link"><a href={entry.link}>{entry.linkType}</a></p>}
              </div>

            </div>
          </Collapsible>

        </div>
      )}
    </div>
  )
}

export default projectContent