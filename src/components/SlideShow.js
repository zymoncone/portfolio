import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useEffect, useState } from 'react'
import "./SlideShow.css"
import DisplayImage from "./DisplayImage"
import DisplayVideo from "./DisplayVideo"

const SlideShow = (props) => {

  const [slide, setSlide] = useState(0)
  const [mutliSlides, setMultiSlides] = useState(true)

  const nextSlide = (e) => {
    e.preventDefault()
    setSlide(slide === (props.entry.media.length - 1) ? 0 : (slide + 1))
  }

  const prevSlide = (e) => {
    e.preventDefault()
    setSlide(slide === 0 ? (props.entry.media.length - 1) : (slide - 1))
  }

  useEffect(() => {
    if (props.entry.media.length === 1) {
      setMultiSlides(false)
    }
  },[props.entry.media])

  return (
  <div key={props.idx} className="slide-show">
    {mutliSlides && <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>}
      {props.entry.media.map((src, idx) => {
        return(src.endsWith(".png") || src === "None" ? 
        <DisplayImage source={src} index={idx} slide={slide} /> :
        <DisplayVideo source={src} index={idx} slide={slide} open={props.open} />
        ) 
      })}
    {mutliSlides && <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>}
    {mutliSlides && <span className="slide-selections">
      {props.entry.media.map((_, idx) => {
        return (
          <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "selection" : "selection selection-inactive"}></button>
        )
        })
      }
    </span>}
  </div>
  )
}

export default SlideShow