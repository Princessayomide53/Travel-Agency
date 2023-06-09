import React from 'react';
import Hero from '../layout/Hero';
import Ease from '../layout/Ease';
import Categories from '../layout/Categories';
import Testimonials from '../layout/Testimonials';
import Subscribe from '../layout/Subscribe';
import Footer from '../layout/Footer';

function LandingPage() {
  return (
    <div className=''>
        <Hero />
        <Categories />
        <Ease />
        <Testimonials />
        <Subscribe /> 
        <Footer />
    </div>
  )
}

export default LandingPage