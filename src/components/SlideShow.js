import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from 'react'
import "./SlideShow.css"

const SlideShow = (props) => {

  const [slide, setSlide] = useState(0)

  const nextSlide = (e) => {
    e.preventDefault()
    setSlide(slide === (props.entry.images.length - 1) ? 0 : (slide + 1))
  }

  const prevSlide = (e) => {
    e.preventDefault()
    setSlide(slide === 0 ? (props.entry.images.length - 1) : (slide - 1))
  }

  return (
  <div key={props.idx} className="slide-show">
    <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {props.entry.images.map((src, idx) => {
        return (
          <img src={src} 
               className={slide === idx ? "slide" : "slide slide-hidden"} 
               alt={idx} 
               key={idx}
          />
        )
      })}
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
    <span className="slide-selections">
      {props.entry.images.map((_, idx) => {
        return (
          <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "selection" : "selection selection-inactive"}></button>
        )
        })
      }
    </span>
  </div>
  )
}

export default SlideShow