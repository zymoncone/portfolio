import Title from "../Title/Title"

const Interests = () => {
  return (
    <div style={{ margin: "5rem 0 3rem 0" }}>
      <Title scrollFactor={3000}>my interests</Title>
      <div style={{ height: "1rem" }} />
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "1rem",
        textAlign: "left",
        margin: 0,
        lineHeight: "1.75rem"
      }}>
        When I'm not working, you'll find me playing basketball or volleyball,
        diving into automotive news, tinkering with cars, and exploring the latest
        in tech and building things.
      </p>
    </div>
  )
}

export default Interests
