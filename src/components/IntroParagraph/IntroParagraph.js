import Title from "../Title/Title"
import "./IntroParagraph.css"

const yellow = {color:"#ffe54c", fontWeight:800}

const IntroParagraph = () => {
  return (
    <div>
      <Title scrollFactor={400}>let me introduce myself</Title>
      <div className="intro-paragraph">
        <p className="intro-text">
          Greetings! I am a dynamic and driven <span style={yellow}>Software Engineer</span>, 
          holding a Bachelor's degree in <span style={yellow}>Mechanical Engineering </span> 
          from the <span style={yellow}>University of Washington</span>. Currently, I am immersed 
          in the world of data science, pursuing a Master's degree in <span style={yellow}>Applied Data Science</span> at 
          the <span style={yellow}>University of Michigan</span>. My academic journey reflects a commitment to interdisciplinary 
          excellence, blending the mechanical engineering foundation with cutting-edge skills in 
          data-driven technologies.
        </p>
        <p className="intro-text">
          Join me on this exciting journey as I explore the realms of software engineering, 
          data science, and machine learning, always seeking to push the boundaries of what's 
          possible and make a lasting impact in these rapidly advancing fields.
        </p>
      </div>
    </div>
  )
}

export default IntroParagraph