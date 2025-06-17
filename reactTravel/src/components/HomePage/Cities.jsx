
import HotelCard from "./HotelCard.jsx"
import atlantis from '../../assets/atlantisDubai.webp'
import nora from '../../assets/nora.jpg'
import royal from '../../assets/royal.jpg'
import kokotel from '../../assets/kokotel.jpg'

const dummyData = [
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
const Cities = () => {
    const handleClick = (name) => {
    alert(`Clicked on ${name}`)
  }
  return (
    <div className="text-2xl mt-6 ml-16">
        Hotels that'll make you feel at home
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">

        {dummyData.map((hotel, index) => (
        <HotelCard
          key={index}
          hotelImage={hotel.image}
          hotelName={hotel.name}
          hotelRating={hotel.rating}
          hotelReviews={hotel.reviews}
          badgeText={hotel.badge}
          onClick={() => handleClick(hotel.name)}
        />
        ))}
      </div>
    </div>
  )
}

export default Cities
