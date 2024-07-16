import React from 'react'
import AboutHeading from '../components/aboutMe component/AboutHeading'
import AboutMePage from '../components/aboutMe component/AboutMePage'
import Tools from '../components/aboutMe component/Tools'
import DemonstratedSkills from '../components/aboutMe component/DemonstratedSkills'
import MobileTestimonial from '../components/MobileTestimonial'
import Testimonials from '../components/Testimonials'

function AboutMe() {
  return (
    <div className='px-4'>
      <section className='mb-10'>
        <AboutHeading />
      </section>
      <section className='mb-10'>
        <AboutMePage />
      </section>
      <section className='lg:mb-10 mb-10'>
        <Tools />
      </section>
      <section className='lg:mb-10 mb-10'>
        <DemonstratedSkills />
      </section>
      <section className='lg:mt-20 '>
        <MobileTestimonial />
        <Testimonials />
      </section>
    </div>
  )
}

export default AboutMe