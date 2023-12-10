import Title from "../Title/Title"
import "./IntroParagraph.css"

const yellow = {color:"#c7a900", fontWeight:800}

const IntroParagraph = () => {
  return (
    <div>
      <Title scrollFactor={400}>let me introduce myself</Title>
      <div className="intro-paragraph">
        <p className="intro-text">
          Greetings! I am a dynamic and driven <span style={yellow}>Software Engineer</span>, 
          holding a Bachelor's degree in <span style={yellow}>Mechanical Engineering</span> 
          from the <span style={yellow}>University of Washington</span>. Currently, I am immersed 
          in the world of data science, pursuing a Master's degree in <span style={yellow}>Applied Data Science</span> at 
          the <span style={yellow}>University of Michigan</span>. My academic journey reflects a commitment to interdisciplinary 
          excellence, blending the mechanical engineering foundation with cutting-edge skills in 
          data-driven technologies.
        </p>
        <p className="intro-text">
          With a fervor for continuous learning, I am passionate about software development and 
          relish the challenges of working with data. My experiences have honed my skills in 
          <span style={yellow}> application development</span>, and I find joy in creating solutions 
          that seamlessly marry code with real-world problems. As an aspiring 
          <span style={yellow}> Machine Learning Engineer</span>, I am on a quest to 
          leverage my diverse skill set to contribute meaningfully to the evolving landscape of 
          artificial intelligence.
        </p>
        <p className="intro-text">
          Join me on this exciting journey as I explore the realms of software engineering, 
          data science, and machine learning, always seeking to push the boundaries of what's 
          possible and make a lasting impact in these rapidly advancing fields.
        </p>
        <p className="intro-text">
          My goal with this site is to <span style={yellow}>showcase my skills and share what 
          I care about.</span> Feel free to reach out to any of socials above!
        </p>
      </div>
    </div>
  )
}

export default IntroParagraph