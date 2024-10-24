import React from 'react'
import ProjectSlide from '../components/project component/ProjectSlide'
import UiUxPorjects from '../components/project component/UiUxPorjects'
import BrandIdentityProject from '../components/project component/BrandIdentityProject'

function Project() {
  return (
    <div className='lg:px-36 px-4'>
      <section className='lg:mb-32 pb-10'>
        <ProjectSlide />
      </section>
      <section className='lg:mb-32 mb-10'>
        <UiUxPorjects />
      </section>
      <section className='lg:mb-32'>
        <BrandIdentityProject />
      </section>
    </div>
  )
}

export default Project