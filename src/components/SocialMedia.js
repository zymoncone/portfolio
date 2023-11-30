import { socials } from "../portfolio"

const SocialMedia = () => {

  // console.log(socials)

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
          viewBox="0 0 24 24"
          height="20"
          width="20"
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