import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Intro from "./components/Intro/Intro"
import IntroParagraph from "./components/IntroParagraph/IntroParagraph"
import ProjectContent from "./components/ProjectContent/ProjectContent"
import NavBar from "./components/NavBar/NavBar"
import Resume from "./components/Resume/Resume"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <section className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<div>
                                    <Intro />     
                                    <IntroParagraph />
                                    <ProjectContent />
                                   </div>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </section>
      </BrowserRouter>
    </div>
  )
}

export default App;
