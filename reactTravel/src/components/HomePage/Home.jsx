import TopBanner from "./TopBanner.jsx"
import CardArray from "./CardArray.jsx"
import Gallery from "./Gallery.jsx"
import HotelCard from "./LocationCard.jsx"

function Home () {

  const handleClick = (name) => {
    alert(`Clicked on ${name}`)
  }

  return (
    <>
    <TopBanner />
    <CardArray />
    <Gallery />
    </>
  )
}

export default Home