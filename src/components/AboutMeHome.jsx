import React from 'react'
import brain from '../assets/brain.png'
import SubHeading from './SubHeading'

function AboutMeHome() {
  return (
    <div className='lg:px-16 px-4'>
      <SubHeading title='About me' />
      <div className='flex lg:flex-row flex-col justify-between items-center gap-10'>
        <p className='text-white leading-6'>
          As a dynamic Product Designer and Brand Strategist, I transform ideas into powerful visual experiences
          that drive business growth. My expertise spans UI/UX design for mobile and web applications, coupled
          with strategic brand identity creation that sets companies apart in competitive markets. <br /> <br />
          I&apos;ve successfully delivered impactful solutions for industry leaders like Anoh Gas Processing Company
          and innovative startups such as DineQR and Onboardian. By combining user-centric design principles with
          business acumen, I create products that not only look stunning but also achieve tangible results. <br /> <br />
          My proficiency in cutting-edge no-code tools like Framer allows me to rapidly prototype and iterate,
          ensuring efficient project delivery without compromising on quality or creativity. <br /><br />
          Collaboration is at the heart of my approach. I thrive in team environments, bringing a blend of
          strategic thinking, creative problem-solving, and a passion for excellence to every project. <br /><br />
          If you&apos;re seeking a designer who can elevate your brand and create digital products that truly resonate
          with your audience, let&apos;s connect. Together, we&apos;ll turn your vision into a compelling reality that drives
          your business forward.
        </p>
        <img src={brain} alt="brain" />
      </div>
    </div>
  )
}

export default AboutMeHome