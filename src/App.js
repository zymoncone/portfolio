import Intro from "./components/Intro";
import Table from "./components/Table"

function App() {
  return (
    <div className="app">
      <section className="main">
        <Intro />
        <div className="projects">
          <h2>My Projects</h2>
          <Table/>
        </div>
      </section>
    </div>
  );
}

export default App;
