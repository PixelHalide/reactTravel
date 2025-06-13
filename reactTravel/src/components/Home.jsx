
const Home = () => {
  return (
    <div className="flex justify-center relative transition-all">
        <div className="p-5 pr-130 bg-red-400 rounded-md relative text-wrap">
            <div className="ml-145 text-2xl sm:text-4xl md:text-7xl absolute md:top-0 right-0 m-2 text-gray-900 font-bold max-w-[80%] text-right break-words">
                <p>We fullfil dreams.</p>
                <p>Experience the Unforgettable.</p>
            </div>
            <div className="ml-145 text-xl absolute bottom-5 right-0 m-2 text-gray-900 font-bold max-w-[80%] text-right break-words">
                <p>Book Today - Don't miss your chance!</p>
            </div>
            <img src="src/assets/greece.jpeg" width={562.5} height={375} className="border-black border-4 rounded-2xl" />
        </div>
    </div>
  )
}

export default Home
