function HotelModal({ isOpen, onClose, hotel }) {
    if (!isOpen || !hotel) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md relative transition-transform transform scale-100 hover:scale-105"
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
            onClick={onClose}
          >
            ✕
          </button>
          <img src={hotel.image} alt={hotel.name} className="rounded-md mb-4 w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
          <p className="text-gray-600 mb-2">{hotel.rating} ⭐ ({hotel.reviews} reviews)</p>
          {hotel.badge && (
            <p className="bg-green-500 text-white inline-block px-3 py-1 rounded text-sm">{hotel.badge}</p>
          )}
          <p className="mt-4 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enchanting hotel with an unforgettable experience.
          </p>
        </div>
      </div>
    );
  }
  
  export default HotelModal;
  