import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
        <nav className="flex flex-col md:flex-row justify-between gap-8 mb-5 pt-2 px-15">
            <img src="src/assets/react.svg"></img>
              <div className='flex flex-row justify-center'>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200'>
                  <Link to="/" className="text-lg py-1 px-4 rounded transition-all">
                    Home
                  </Link>
                </div>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200'>
                  <span className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                    Trending
                  </span>
                </div>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200'>
                  <Link to="/contact" className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                    Contact Us
                  </Link>
                </div>
                <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200'>
                  <Link to="/about" className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                    About Us
                  </Link>
                </div>
              </div>
            <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200'>
              <Link to="/gpaCalc" className="text-lg py-1 px-4 rounded hover:text-gray-700 transition-all">
                Sign Up/In
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar