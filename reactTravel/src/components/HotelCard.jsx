import { useState } from 'react'
import atlantis from '../assets/atlantisDubai.webp'

function HotelCard ({ hotelImage, hotelName, hotelRating, hotelReviews, onClick }) {
  
  const[liked, setLiked] = useState(false);
  
  return (
    <div
    className='cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white w-full max-w-xs'
    onClick={onClick}
    >

      <div className='relative'>
        <img src={hotelImage} alt={hotelName}
        className='w-full h-48 object-cover' />
        <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        className='absolute top-2 right-2 bg-white rounded-full p-1 shadow'
        >
          {liked ? '❤' : '🤍'}
        </button>
      </div>

      <div className='p-4'>
        <h3 className='font-semibold text-lg mb-1'>{hotelName}</h3>
        <div className='flex items-center space-x-2 text-sm text-gray-600'>
          <span>{hotelRating} ⭐</span>
          <span>({hotelReviews} reviews)</span>
        </div>
      </div>

    </div>
  )
}

export default HotelCard
