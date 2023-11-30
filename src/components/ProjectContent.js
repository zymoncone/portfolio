import Collapsible from "./Collapsible"
import { projects } from "../portfolio"
import pic1 from "../images/crowdsecure_cover.png"
import pic2 from "../images/hash_scan.png"

const projectContent = () => {
  return (
    <div>
      {projects.map((entry, idx) =>
        <div key={idx}>
        <Collapsible heading={entry.projectName}>
          <div className="projectContent">
            <p className="descriptionText"> 
              CrowdSecure, a transparent and secure blockchain based platform to 
              help empower philanthropy. We leveraged Hederas decentralized network 
              to ensure that all verified campaigns are on Hedera accounts and can be 
              accessed and reviewed by anyone via their PublicKeys.
            </p>
            <div className="projectImages">
              <img src={pic1} alt="profile" width="250" height="180" />
              <img src={pic2} alt="profile" width="250" height="180" />
            </div>
            
            <p>{entry.date}</p>
            <p>{entry.link}</p>
          </div>
        </Collapsible>
        </div>
      )}
    </div>
  )
}

export default projectContent