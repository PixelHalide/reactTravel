import TopBanner from "./TopBanner"
import Cities from "./Cities"
import Gallery from "./Gallery"
import HotelCard from "./HotelCard.jsx"
import atlantis from '../assets/atlantisDubai.webp'
import nora from '../assets/nora.jpg'
import royal from '../assets/royal.jpg'

const dummyData = [
    {
    image: atlantis,
    name: 'Atlantis Dubai',
    rating: 4.8,
    reviews: 1023,
  },
  {
    image: nora,
    name: 'Nora Buri Resort & Spa',
    rating: 4.5,
    reviews: 2145,
  },
  {
    image: royal,
    name: 'Royal Phuket City Hotel',
    rating: 3.5,
    reviews: 340,
  },
];

function Home () {

  const handleClick = (name) => {
    alert(`Clicked on ${name}`)
  }

  return (
    <>
    <TopBanner />
    <Cities />

    <div className="flex flex-wrap justify-center gap-6 p-6">

      {dummyData.map((hotel, index) => (
      <HotelCard
        key={index}
        hotelImage={hotel.image}
        hotelName={hotel.name}
        hotelRating={hotel.rating}
        hotelReviews={hotel.reviews}
        onClick={() => handleClick(hotel.name)}
      />
      ))}

    </div>
    </>
  )
}

export default Home