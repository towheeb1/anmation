import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutSnad from './pages/AboutSnad'
import InitiativesProjects from './pages/InitiativesProjects'
import CharitableContributions from './pages/CharitableContributions'
import News from './pages/News'
import Faq from './pages/Faq'

function App() {
  return (
    <div className="snad-app">
      <Navbar />

      <main className="snad-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSnad />} />
          <Route path="/initiatives" element={<InitiativesProjects />} />
          <Route path="/charity" element={<CharitableContributions />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
