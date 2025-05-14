import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestnation from '../components/FeaturedDestnation'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedDestnation/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLetter/>
    </div>
  )
}

export default Home