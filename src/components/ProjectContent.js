import Collapsible from "./Collapsible"
import { projects } from "../portfolio"
import SlideShow from "./SlideShow"

const projectContent = () => {

  const renderText = (text) => {

    const renderArr = []
    let regexp = /~{1}(.+:)/g
    let textArr = text.split("\n")

    for (const [i, sample] of Object.entries(textArr)) {
      if (sample.match(regexp)) {
        let sampleToBold = sample.split(regexp)
        // index 1 is the first group from regexp
        // index 2 is the remaining text after the match
        renderArr.push(<p key={i}><b>{sampleToBold[1]}</b>{sampleToBold[2]}</p>)
      } else {
        renderArr.push(<p key={i}>{sample}</p>)
      }      
    }
    return (<div>{renderArr}</div>)
  }

  return (
    <div>
      
      {projects.map((entry, idx) =>
        <div key={idx}>
          
          <Collapsible idx={idx} heading={entry.projectName}>
            
            <div className="projectContent">
              <SlideShow idx={idx} entry={entry} />
              
              <div className="descriptionText">{renderText(entry.description)}</div>

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