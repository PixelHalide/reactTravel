import { useRef } from "react";
import TopBanner from "./TopBanner.jsx"
import CardArray from "./CardArray.jsx"
import Gallery from "./Gallery.jsx"

function Home () {
  const cardArrayRef = useRef(null);

  const handleScroll = () => {
    cardArrayRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <TopBanner onScrollClick={handleScroll}/>
    <div ref={cardArrayRef}>
      <CardArray />
    </div>
    <Gallery />
    </>
  )
}

export default Home