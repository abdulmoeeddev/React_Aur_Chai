import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{ backgroundColor: 'green', padding: '5px' }}>React Router</h1>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
      
      
    </>
  )
}


