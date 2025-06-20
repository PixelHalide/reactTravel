import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import logo from '../assets/react.svg'

const Navbar = () => {

  const Trending = ["Shibuya", "Nagoya", "Kyoto"];
  const [dropdown, set_dropdown] = useState(false);
  return (
    <div className='sticky top-0 z-30 bg-[#EEEEEE] dark:bg-[#212121] dark:text-neutral-200 border-gray-300 border-b-2'>
        <nav className="flex flex-col md:flex-row justify-between items-center gap-8 mb-2 pt-2 px-4">
            <Link to="/">
              <div className='flex flex-row'>
                <img src={logo} alt="Logo" />
                <p className='font-prompt font-extrabold text-4xl mx-4'>Travellr.</p>
              </div>
            </Link>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'>
                  <Link to="/" className="text-lg py-1 px-4 rounded transition-all">
                    Home
                  </Link>
                </div>
                <div className='relative hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'
                  onMouseEnter={() => set_dropdown(true)}
                  onMouseLeave={() => set_dropdown(false)}>
                    <span className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                      Trending
                    </span>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-40 z-100 ${
                        dropdown ? 'pointer-events-auto' : 'pointer-events-none'
                      }`}>
                        <div className={`transition-all duration-200 ease-in-out transform ${dropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} bg-white dark:bg-[#212121] dark:text-neutral-200 shadow-lg rounded-lg`}>
                          {dropdown && (
                            <Dropdown contents={Trending} />
                          )}
                        </div>
                    </div>
                </div>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'>
                  <Link to="/about" className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                    About Us
                  </Link>
                </div>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'>
                  <Link to="/contact" className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                    Contact Us
                  </Link>
                </div>
              </div>
            <div className='hover:bg-neutral-900 p-2 rounded-2xl transition duration-200 bg-black text-white dark:hover:text-neutral-200 dark:text-black dark:bg-white cursor-pointer'>
              <Link to="/gpaCalc" className="text-lg py-1 px-4 rounded transition-all">
                Sign Up/In
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar