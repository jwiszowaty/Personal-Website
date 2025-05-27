import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import AboutMe from './pages/AboutMe.jsx'
function App() {
  return (
    <>
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route/>
    </Routes>
    </>
  )
}

export default App