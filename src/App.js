import Intro from "./components/Intro"
import IntroParagraph from "./components/IntroParagraph"
import NavBar from "./components/NavBar"
import ProjectContent from "./components/ProjectContent"

function App() {
  return (
    <div className="app">
      <NavBar />
      <section className="main">
        <Intro />
        <IntroParagraph />
        <div className="projects">
          <h2>my projects</h2>
          <ProjectContent />
        </div>
      </section>
    </div>
  );
}

export default App;
