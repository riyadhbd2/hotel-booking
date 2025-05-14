import React from 'react'
import Title from './Title'
import {testimonials} from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
  return (
  <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
  <Title title="What Our Guests Say" subTitle="Discover why discerning travelers..." />
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl mx-auto">
    {testimonials.map((testimonial) => (
      <div 
        key={testimonial.id} 
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-4">
          <img 
            className="w-14 h-14 rounded-full object-cover" 
            src={testimonial.image} 
            alt={testimonial.name} 
          />
          <div>
            <p className="font-playfair text-xl font-semibold">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-5">
          <StarRating rating={testimonial.rating} /> {/* Assuming StarRating accepts a rating prop */}
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed">"{testimonial.review}"</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default Testimonial