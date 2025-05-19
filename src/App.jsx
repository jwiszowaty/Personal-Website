import { Route, Routes} from 'react-router-dom'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<AboutMe/>} />
    </Routes>
  )
}

export default App