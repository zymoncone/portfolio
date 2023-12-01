import Collapsible from "./Collapsible"
import { projects } from "../portfolio"
import SlideShow from "./SlideShow"


const projectContent = () => {

  return (
    <div>
      
      {projects.map((entry, idx) =>
        <div key={idx}>
          
          <Collapsible heading={entry.projectName}>
            
            <div className="projectContent">
              <SlideShow key={idx} entry={entry} />
              
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