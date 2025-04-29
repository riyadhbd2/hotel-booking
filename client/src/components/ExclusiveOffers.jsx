import React from "react";
import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./Title";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-28">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories"
        />
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group transition-all">
          View All Offers
          <img
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            src={assets.arrowIcon}
            alt="arrow icon"
          />
        </button>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative group rounded-2xl overflow-hidden min-h-[340px] flex flex-col justify-between"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

            {/* Discount Badge */}
            <p className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold bg-white text-gray-800 rounded-full shadow-md">
              {item.priceOff}% OFF
            </p>

            {/* Offer Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <div>
                <p className="text-2xl font-semibold font-playfair text-white">
                  {item.title}
                </p>
                <p className="text-sm text-white mt-1">{item.description}</p>
                <p className="text-xs text-white/70 mt-3">
                  Expires {item.expiryDate}
                </p>
              </div>

              {/* CTA Button */}
              <button className="mt-6 flex items-center gap-2 font-medium text-white hover:underline group">
                View Offers
                <img
                  className="w-4 h-4 invert group-hover:translate-x-1 transition-transform"
                  src={assets.arrowIcon}
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
