import TopBanner from "./TopBanner.jsx"
import Cities from "./Cities"
import Gallery from "./Gallery.jsx"
import HotelCard from "./HotelCard.jsx"

function Home () {

  const handleClick = (name) => {
    alert(`Clicked on ${name}`)
  }

  return (
    <>
    <TopBanner />
    <Cities />


    </>
  )
}

export default Home