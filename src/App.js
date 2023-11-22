import Typed from "react-typed"

function App() {
  return (
    <div className="app">
      <section className="main">
        <h1>Hi, 👋 I'm Szymon Sarnowicz</h1>
        <p className="intro-subtitle">
          <Typed
            strings={[
              "Full Stack Developer",
              "Program Manager",
              "Software Engineer"
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </p>
      </section>
    </div>
  );
}

export default App;
