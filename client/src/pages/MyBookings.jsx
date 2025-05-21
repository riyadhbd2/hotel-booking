import { useState } from "react";
import { assets, userBookingsDummyData } from "../assets/assets";
import Title from "../components/Title";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pt-32 md:pb-36 px-4 sm:px-8 lg:px-16 xl:px-24">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current and upcoming hotel reservations in one place."
        align="left"
      />

      <div className="max-w-6xl w-full mt-10 text-gray-800">
        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-semibold text-gray-600 text-base py-4">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 py-6 first:border-t gap-y-6"
          >
            {/* Hotel Details */}
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel"
                className="w-full md:w-44 h-32 object-cover rounded-lg shadow"
              />
              <div className="flex flex-col gap-2">
                <p className="font-playfair text-xl">
                  {booking.hotel.name}
                  <span className="font-inter text-sm text-gray-500 ml-1">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guests" className="w-4 h-4" />
                  <span>{booking.guests} Guest(s)</span>
                </div>
                <p className="text-base font-medium">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className="flex flex-col sm:flex-row md:items-center gap-4 md:gap-12 text-sm mt-2 md:mt-0">
              <div>
                <p className="text-gray-500">Check-In:</p>
                <p>{new Date(booking.checkInDate).toDateString()}</p>
              </div>
              <div>
                <p className="text-gray-500">Check-Out:</p>
                <p>{new Date(booking.checkOutDate).toDateString()}</p>
              </div>
            </div>

            {/* Payment */}
            <div className="flex flex-col items-start justify-center mt-2 md:mt-0">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    booking.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <p
                  className={`text-sm font-medium ${
                    booking.isPaid ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>

              {!booking.isPaid && (
                <button className="mt-4 px-4 py-1.5 text-xs border border-gray-400 rounded-full hover:bg-gray-100 transition">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
