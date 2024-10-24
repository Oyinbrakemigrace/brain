import React from 'react'
import brain from '/assets/brain.png'
import SubHeading from './SubHeading'

function AboutMeHome() {
  return (
    <div className='lg:px-16 px-4'>
      <SubHeading title='About me' />
      <div className='flex lg:flex-row flex-col justify-between items-center gap-10'>
        <p className='text-white leading-6'>
          As a Product Designer and Brand Strategist, I turn ideas into impactful visual experiences that drive
          business growth. Specializing in UI/UX design for mobile and web applications, and strategic brand
          identity creation, I help companies stand out in competitive markets. <br /> <br />
          I&apos;ve delivered results for industry leaders like Anoh Gas Processing Company and innovative startups
          like DineQR and Onboardian. By combining user-centric design with business insight, I create products
          that not only look great but achieve real outcomes. <br /> <br />
          With proficiency in no-code tools like Framer, I quickly prototype and iterate, ensuring efficient,
          high-quality project delivery. I thrive in collaborative environments, bringing strategic thinking,
          creative problem-solving, and a commitment to excellence to every project. <br /><br />
          If you&apos;re looking to elevate your brand and create digital products that resonate with your audience,
          let&apos;s connect and turn your vision into reality.
        </p>
        <img src={brain} alt="brain" className='w-96' />
      </div>
    </div>
  )
}

export default AboutMeHome