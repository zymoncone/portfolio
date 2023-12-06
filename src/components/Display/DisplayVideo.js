import "./Display.css"
import { useState, useEffect, useRef } from "react"

const DisplayVideo = ({source,
                       index,
                       slide,
                       open}) => {

  const videoRef = useRef()
  const [prevOpened, setPrevOpened] = useState(false)

  useEffect(() => {
    if (open === true) {
      setPrevOpened(true)
      videoRef.current.play()
    } else if (prevOpened && open === false) {
      videoRef.current.pause()
    }
  },[open, prevOpened])

  return (<video src={source}
                 ref={videoRef}
                 className={slide === index ? "slide" : "slide slide-hidden"} 
                 alt={index} 
                 key={index}
                 controls 
                 preload="true" />)
}

export default DisplayVideo