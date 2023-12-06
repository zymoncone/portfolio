import "./SocialMedia.css"
import { socials } from "../../portfolio"

const SocialMedia = () => {
  return (
    <div className="social-media-banner">
      {socials.map((media,idx) => {
        return(
        <a href={media.link}
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button">
        <svg role="img"
             className="social-media-icons"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <title>{media.name}</title>
            <path d={media.path} />
        </svg>
      </a>)
      })}
      
    </div>
  )
}

export default SocialMedia