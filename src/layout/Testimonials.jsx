import React from 'react';
import Testimonials from '../Data/Testimonials';

function Testimonials() {
  return (
    <section>
        <div className='mt-24'>
            <p className='text-sm uppercase text-[#5E6282] font-Poppins'>Testimonials</p>
            <h1 className='text-4xl text-[#14183E] f0nt-bold font-Volkhov'>What People say<br /> About Us</h1>
        </div>
        <div>
            {Testimonials.Data.map((items, id) => (
                <p></p>
            ))}
        </div>
    </section>
    
  )
}

export default Testimonials