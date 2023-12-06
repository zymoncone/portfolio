import "./IntroParagraph.css"

const IntroParagraph = () => {
  return (
    <div>
      <h2 className="title">let me introduce myself</h2>
      <div className="intro-paragraph">
        <p className="intro-text">Hi, my name is Szymon Sarnowicz and I currently reside in Chicago
          but have lived in Seattle, Detriot, and Krakow (Poland).
        </p>
        <p className="intro-text">I have a B.S. in Mechanical Engineering from the University of Washington and I am currently
          pursuing a Master's In Data Science from the University of Michigan.
        </p>
        <p className="intro-text">As a Software Engineer,
          I enjoy tackling new challenges and continuously expanding my skillset.
        </p>
      </div>
    </div>
  )
}

export default IntroParagraph