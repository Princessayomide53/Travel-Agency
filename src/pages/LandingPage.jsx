import React from 'react';
import Hero from '../layout/Hero';
import Ease from '../layout/Ease';
import Categories from '../layout/Categories';
import Testimonials from '../layout/Testimonials';

function LandingPage() {
  return (
    <div className=''>
        <Hero />
        <Categories />
        <Ease />
        <Testimonials />
    </div>
  )
}

export default LandingPage