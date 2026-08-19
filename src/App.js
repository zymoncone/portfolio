import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Intro from "./components/Intro/Intro"
import ProjectContent from "./components/ProjectContent/ProjectContent"
import Interests from "./components/Interests/Interests"
import NavBar from "./components/NavBar/NavBar"
import Blog from "./components/Blog/Blog"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <section className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<div>
                                        <Intro />
                                        <ProjectContent />
                                        <Interests />
                                        <Footer />
                                       </div>} />
          <Route path="/research" element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
      </HashRouter>
    </div>
  )
}

export default App;
