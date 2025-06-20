
import LocationCard from "./LocationCard.jsx"
import atlantis from '../../assets/atlantisDubai.webp'
import nora from '../../assets/nora.jpg'
import royal from '../../assets/royal.jpg'
import kokotel from '../../assets/kokotel.jpg'
import greece from '../../assets/greece.jpeg'
import venice from '../../assets/italy.jpg'
import dubai from '../../assets/dubai.avif'
import phuket from '../../assets/phuket.jpg'
import { useState } from 'react';
import HotelModal from "../Modal/HotelModal.jsx"

const hotelData = [
  {
    image: kokotel,
    name: 'Kokotel Hakodate',
    rating: 3.8,
    reviews: 23,
    badge: null,
  },
  {
    image: atlantis,
    name: 'Atlantis Dubai',
    rating: 4.8,
    reviews: 1023,
    badge: 'Top Pick!',
  },
  {
    image: nora,
    name: 'Nora Buri Resort & Spa',
    rating: 4.5,
    reviews: 2145,
    badge: 'Hot!',
  },
  {
    image: royal,
    name: 'Royal Phuket City Hotel',
    rating: 3.5,
    reviews: 340,
    badge: null,
  },
];

const cityData = [
  {
    image: greece,
    name: 'Santorini, Greece',
    rating: 4.9,
    reviews: 892,
    badge: 'Trending!',
  },
  {
    image: venice,
    name: 'Venice, Italy',
    rating: 4.7,
    reviews: 1567,
    badge: 'Must Visit',
  },
  {
    image: dubai,
    name: 'Dubai, UAE',
    rating: 4.6,
    reviews: 743,
    badge: null,
  },
  {
    image: phuket,
    name: 'Phuket, Thailand',
    rating: 4.4,
    reviews: 456,
    badge: 'Popular',
  },
]

const Hotels = () => {

  const [selectedHotel, setSelectedHotel] = useState(null); // null means no modal

  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handleClick = (name) => {
    alert(`Clicked on ${name}`)
  };

  return (
    <div className="text-2xl mt-6 mx-16 dark:text-white">
        <p className="text-center md:text-left ">Places to melt your heart</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {cityData.map((hotel, index) => (
            <LocationCard
              key={index}
              Image={hotel.image}
              Name={hotel.name}
              Rating={hotel.rating}
              Reviews={hotel.reviews}
              badge={hotel.badge}
              onClick={() => handleCardClick(hotel)}
            />
          ))}
        </div>

      Hotels that'll make you feel at home
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">

        {hotelData.map((hotel, index) => (
          <LocationCard
            key={index}
            Image={hotel.image}
            Name={hotel.name}
            Rating={hotel.rating}
            Reviews={hotel.reviews}
            badge={hotel.badge}
            onClick={() => handleCardClick(hotel)}
          />
        ))}

        <HotelModal
          isOpen={!!selectedHotel}
          onClose={handleCloseModal}
          hotel={selectedHotel}
        />
      </div>
    </div>

  )
}

export default Hotels
