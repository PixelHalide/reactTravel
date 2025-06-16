import React from 'react'
import atlantis from '../assets/atlantisDubai.webp'

const HotelCard = ({ hotelName }) => {
  return (
    <div>
      <img src={atlantis} alt={hotelName} />
    </div>
  )
}

export default HotelCard
