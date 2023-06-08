import React from 'react';
import Hero from '../layout/Hero';
import Ease from '../layout/Ease';
import Categories from '../layout/Categories';
import Testimonials from '../layout/Testimonials';
import Subscribe from '../layout/Subscribe';

function LandingPage() {
  return (
    <div className=''>
        <Hero />
        <Categories />
        <Ease />
        <Testimonials />
        <Subscribe />
    </div>
  )
}

export default LandingPage