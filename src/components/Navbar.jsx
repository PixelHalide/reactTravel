import { useState } from 'react'
import { Link } from 'react-router-dom'
import HotelModal from './Modal/HotelModal'
import Dropdown from './Dropdown'
import dark_logo from '../assets/logo.png'
import logo from '../assets/logo_black.png'
import shibuya from '../assets/shibuya.jpg'
import nagoya from '../assets/nagoya.jpg'
import kyoto from '../assets/kyoto.jpg'

const Navbar = ({switchTheme, darkState}) => {

  const trendingData = [
    {
      image: shibuya,
      name: 'Shibuya',
      rating: 4.9,
      reviews: 1892,
      badge: 'Trending!',
      description: 'A vibrant district in Tokyo known for its bustling streets, shopping, and nightlife.'
    },
    {
      image: nagoya,
      name: 'Nagoya',
      rating: 4.9,
      reviews: 1967,
      badge: 'Trending',
      description: 'A modern city famous for its historic castle, museums, and delicious cuisine.'
    },
    {
      image: kyoto,
      name: 'Kyoto',
      rating: 4.9,
      reviews: 1743,
      badge: 'Trending',
      description: 'The cultural heart of Japan, renowned for its temples, gardens, and traditional tea houses.'
    },
  ]

  const Trending = ["Shibuya", "Nagoya", "Kyoto"];
  const [dropdown, set_dropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCityClick = (cityData) => {
    setSelectedCity(cityData);
    setModalOpen(true);
    set_dropdown(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCity(null);
  };

  return (
<>
      <div className='sticky top-0 z-30 bg-[#EEEEEE] dark:bg-[#212121] dark:text-neutral-200 border-[#383838] dark:border-gray-300 border-b-2'>
          <nav className="flex flex-wrap flex-col md:flex-row justify-between items-center mb-2 pt-2 px-4 text-sm md:text-lg">
              <Link to="/">
                <div className='flex flex-row'>
                  <img src={`${darkState ? dark_logo : logo}`} alt="Logo" className='w-10 h-10'/>
                  <p className='font-prompt font-extrabold text-2xl md:text-4xl mx-4'>Travellr.</p>
                </div>
              </Link>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                  <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'>
                    <Link to="/" className="py-1 px-4 rounded transition-all">
                      Home
                    </Link>
                  </div>
                  <div className='relative hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'
                    onMouseEnter={() => set_dropdown(true)}
                    onMouseLeave={() => set_dropdown(false)}>
                      <span className="py-1 px-4 rounded hover:bg-gray-200 dark:hover:text-gray-700 transition-all">
                        Trending
                      </span>
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-40 z-100 ${
                          dropdown ? 'pointer-events-auto' : 'pointer-events-none'
                        }`}>
                            <div className={`transition-all duration-200 ease-in-out transform ${dropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} bg-white dark:bg-[#212121] dark:text-neutral-200 shadow-lg rounded-lg`}>
                              {dropdown && (
                                <Dropdown
                                  contents={Trending}
                                  trendingData={trendingData}
                                  onCityClick={handleCityClick}
                                />
                              )}
                          </div>
                      </div>
                  </div>
                  <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'>
                    <Link to="/about" className="py-1 px-4 rounded hover:text-gray-700 transition-all">
                      About Us
                    </Link>
                  </div>
                  <div className='hover:bg-gray-200 p-2 rounded-2xl transition duration-200 dark:hover:text-black'>
                    <Link to="/contact" className="py-1 px-4 rounded hover:text-gray-700 transition-all">
                      Contact Us
                    </Link>
                  </div>
                </div>
              <div className='hover:bg-neutral-900 px-2 py-1.5 rounded-2xl transition duration-200 bg-black text-white dark:hover:text-neutral-200 dark:text-black dark:bg-white cursor-pointer'>
                <div onClick={() => {switchTheme()}} className="px-4 rounded transition-all active:scale-110">
                  Switch Theme
                </div>
              </div>
          </nav>
      </div>
      <HotelModal
        isOpen={modalOpen}
        onClose={closeModal}
        hotel={selectedCity}
      />
</>
  )
}

export default Navbar