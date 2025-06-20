import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage/Home';
import Contact from './components/Contact/Contact';
import About from './components/About';
import Footer from './components/HomePage/Footer.jsx';

function App() {
  const [dark, set_dark] = useState(true);

  const switchTheme = () => {
    set_dark(!dark);
  }
  return (
      <div className={`min-h-screen flex flex-col bg-[#EEEEEE] dark:bg-[#181818] ${dark ? 'dark' : ''}`}>
        <Router>
          <Navbar
          switchTheme={switchTheme}
          />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>

          <Footer />
        </Router>
      </div>
  )
}

export default App
