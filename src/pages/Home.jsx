import React from 'react'
import Intro from '../components/Intro'
import ProjectMarquee from '../components/ProjectMarquee'
import SelectedProjects from '../components/SelectedProjects'
import AboutMeHome from '../components/AboutMeHome'
import Testimonials from '../components/Testimonials'
import MobileTestimonial from '../components/MobileTestimonial'

function Home() {
  return (
    <div>
      <section>
        <Intro />
      </section>
      <section className='lg:mt-10 mt-12'>
        <ProjectMarquee />
      </section>
      <section className='lg:mt-20 mt-12'>
        <SelectedProjects />
      </section>
      <section className='lg:mt-20 mt-12'>
        <AboutMeHome />
      </section>
      <section className='lg:mt-20 '>
        <MobileTestimonial />
        <Testimonials />
      </section>
    </div>
  )
}

export default Home