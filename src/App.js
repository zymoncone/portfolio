import Intro from "./components/Intro";
import IntroParagraph from "./components/IntroParagraph";
import NavBar from "./components/NavBar";
import Table from "./components/Table"

function App() {
  return (
    <div className="app">
      <NavBar />
      <section className="main">
        <Intro />
        <IntroParagraph />
        <div className="projects">
          <h2>My Projects</h2>
          <Table />
        </div>
      </section>
    </div>
  );
}

export default App;
