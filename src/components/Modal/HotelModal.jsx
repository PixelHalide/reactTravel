import { useNavigate } from "react-router-dom";

function HotelModal({ isOpen, onClose, hotel }) {
    const navigate = useNavigate();

    if (!isOpen || !hotel) return null;

    return (
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all duartion-200"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-[#303030] rounded-xl shadow-xl p-6 w-[90%] max-w-md relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg transition-transform-scale-100 hover:scale-105 hover:opacity-80"
            onClick={onClose}
          >
            ❌
          </button>
          <img src={hotel.image} alt={hotel.name} className="rounded-md mb-4 pr-3 w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
          <p className="text-gray-600 dark:text-neutral-200 mb-2">{hotel.rating} ⭐ ({hotel.reviews} reviews)</p>
          {hotel.badge && (
            <p className="bg-green-500 text-white inline-block px-3 py-1 rounded text-sm">{hotel.badge}</p>
          )}
          <p className="mt-4 text-sm text-gray-700 dark:text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enchanting hotel with an unforgettable experience.
          </p>

          <button
          onClick={() => navigate('/contact')}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Book Now
          </button>

        </div>
      </div>
    );
  }

  export default HotelModal;
