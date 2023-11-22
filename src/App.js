import Typed from "react-typed"
import pic from "C:/GIT_personal/portfolio/src/images/portfolio_pic.png"
import Table from "./components/Table"

function App() {
  return (
    <div className="app">
      <section className="main">
        <div className="intro">
        <img src={pic} alt="Profile Picture" width="150" height="150"/>
        <div className="intro-text">
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
        </div>
        </div>

        <div className="projects">
          <h2>My Projects</h2>
          <Table/>
        </div>
      </section>
    </div>
  );
}

export default App;
