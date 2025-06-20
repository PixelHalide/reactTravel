import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage/Home';
import Contact from './components/Contact/Contact';
import About from './components/About';
import Footer from './components/HomePage/Footer.jsx';

function App() {

  return (
      <div className='min-h-screen flex flex-col bg-[#EEEEEE] dark:bg-[#181818] dark'>
        <Router>
          <Navbar />
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
