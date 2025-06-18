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
    <div className="flex justify-center relative transition-all mt-10">
        <div className="p-5 w-275 h-105 bg-red-400 rounded-md relative text-wrap">
            <div className="ml-145 text-2xl md:text-5xl lg:text-7xl absolute md:top-0 right-0 m-2 text-gray-900 font-bold max-w-[80%] text-right break-words">
                <p>We fullfil dreams.</p>
                <p>Experience the Unforgettable.</p>
            </div>
            <div className="ml-145 text-xl absolute bottom-5 right-0 m-2 text-gray-900 font-bold max-w-[80%] text-right break-words">
                <p>Book Today - Don't miss your chance!</p>
            </div>
           <div className="w-[562.5px] h-[375px] border-black border-4 rounded-2xl overflow-hidden">
              <img
                src={imageArray[imageIndex]}
                alt="Dynamic content image"
                className="w-full h-full object-cover"
              />
            </div>
        </div>
    </div>
  )
}

export default Gallery
