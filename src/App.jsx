import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/LandingPage/Home/Home'
import CalendlyScheduler from './Pages/Calendar';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendlyScheduler />} />

      </Routes>
    </Router>
  )
}

export default App
