import Intro from "./components/Intro/Intro"
import IntroParagraph from "./components/IntroParagraph/IntroParagraph"
import ProjectContent from "./components/ProjectContent/ProjectContent"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="app">
      <section className="main">
        <NavBar />
        <Intro />
        <IntroParagraph />
        <ProjectContent />
      </section>
    </div>
  );
}

export default App;
