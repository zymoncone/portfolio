import Title from "../Title/Title"
import "./IntroParagraph.css"

const yellow = {color:"#ffe54c", fontWeight:800}

const IntroParagraph = () => {
  return (
    <div>
      <Title scrollFactor={400}>let me introduce myself</Title>
      <div className="intro-paragraph">
        <p className="intro-text">
          <span style={yellow}>Mechanical engineer</span> working in{" "}
          <span style={yellow}>embedded software</span>, with a Master's in{" "}
          <span style={yellow}>Applied Data Science</span> from the University of Michigan.
          I build at the intersection of hardware, software, and machine learning.
        </p>
      </div>
    </div>
  )
}

export default IntroParagraph