import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Rating from './components/Rating/Rating'
import Competitions from './components/Competitions/Competitions'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/competitions" element={<Competitions />} />
      </Routes>
    </BrowserRouter>
  )
}
