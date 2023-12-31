import "./Display.css"
import { useState, useEffect, useRef } from "react"
import { isMobile } from "react-device-detect"

const DisplayVideo = ({source,
                       index,
                       slide,
                       open}) => {

  const videoRef = useRef()
  const [prevOpened, setPrevOpened] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      if (open === true) {
        setPrevOpened(true)
        videoRef.current.play()
      } else if (prevOpened && open === false) {
        videoRef.current.pause()
      }
    }
  },[open, prevOpened])

  return (<video src={source+"#t=0.1"}
                 ref={videoRef}
                 className={slide === index ? "slide" : "slide slide-hidden"} 
                 alt={index} 
                 key={index}
                 controls
                 muted
                 preload="metadata" />)
}

export default DisplayVideo