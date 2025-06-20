import { useState } from 'react'

function LocationCard ({ Image, Name, Rating, Reviews, badge, onClick }) {

  const[liked, setLiked] = useState(false);

  return (
    <div
    className='cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-103 transition duration-300 bg-white dark:bg-[#383838] w-full'
    onClick={onClick}
    >

      <div className='relative'>
        <img src={Image} alt={Name}
        className='w-full h-48 object-cover hover:opacity-80' />

        {badge && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
            {badge}
          </div>
        )}

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
        <h3 className='font-semibold text-lg mb-1'>{Name}</h3>
        <div className='flex items-center space-x-2 text-sm text-black dark:text-lime-50'>
          <span>{Rating} ⭐</span>
          <span>({Reviews} reviews)</span>
        </div>
      </div>

    </div>
  )
}

export default LocationCard
