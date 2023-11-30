import Intro from "./components/Intro"
import IntroParagraph from "./components/IntroParagraph"
import ProjectContent from "./components/ProjectContent"

function App() {
  return (
    <div className="app">
      <section className="main">
        <Intro />
        <IntroParagraph />
        <div className="projects">
          <h2 className="title">my projects</h2>
          <ProjectContent />
        </div>
      </section>
    </div>
  );
}

export default App;
