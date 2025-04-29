import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative w-full max-w-[280px] rounded-2xl overflow-hidden bg-white text-gray-600 shadow-md hover:shadow-lg transition-all"
    >
      <img src={room.images[0]} alt={room.hotel.name} className="w-full h-48 object-cover" />
      
      {index % 2 === 0 && (
        <p className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-white text-gray-800 rounded-full shadow">
          Best Seller
        </p>
      )}
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-lg font-semibold text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <img src={assets.starIconFilled} alt="star icon" className="w-4 h-4" />
            4.5
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <img src={assets.locationIcon} alt="location icon" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl font-bold text-gray-800">${room.pricePerNight}</span>
            <span className="text-sm text-gray-500"> /night</span>
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
