import { useState, useEffect } from 'react'

import greece from '../../assets/greece.jpeg'
import chile from '../../assets/chile.webp'
import mit from '../../assets/mit.png'

const Gallery = () => {

  const imageArray = [greece, chile, mit]
  const [imageIndex, set_index] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      set_index(prevIndex =>
        prevIndex === (imageArray.length - 1) ? 0 : prevIndex + 1
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center relative transition-all mt-10 px-4">
        <div className="p-5 w-275 bg-red-400 dark:bg-[#A32B4C] rounded-md relative overflow-x-auto">
            <div className="text-center md:absolute md:top-0 md:right-0 md:m-2 md:text-right md:max-w-[50%] mb-4 md:mb-0">
                <p className="text-xl md:text-3xl lg:text-7xl text-gray-900 font-bold">We fulfill dreams.</p>
                <p className="text-xl md:text-3xl lg:text-7xl text-gray-900 font-bold">Experience the Unforgettable.</p>
            </div>

            <div className="w-full max-w-[562.5px] aspect-[3/2] md:w-[562.5px] md:h-[375px] mx-auto md:mx-0 border-black border-4 rounded-2xl overflow-hidden">
              <img
                src={imageArray[imageIndex]}
                alt="Image Gallery"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center md:absolute md:bottom-5 md:right-0 md:m-2 md:text-right md:max-w-[50%] mt-4 md:mt-0">
                <p className="text-lg md:text-xl text-gray-900 font-bold">Book Today - Don't miss your chance!</p>
            </div>
        </div>
    </div>
  )
}

export default Gallery
