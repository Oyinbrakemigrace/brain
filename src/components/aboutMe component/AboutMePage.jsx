import React from 'react'
import workSpace from '../../assets/workSpace.svg'
import SubHeading from '../SubHeading'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from 'react-icons/md'

function AboutMePage() {
  return (
    <div className='lg:px-36'>
      <img src={workSpace} alt="workSpace" />
      <div>
        <SubHeading title='About me' />
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
        <Link to='/projects' className='text-white font-bold text-lg flex items-center justify-center mx-auto border gap-3 bg-gradient-to-l from-gray-600 to-zinc-800 px-6 py-3 w-full md:w-1/4 lg:mt-10 mt-8 rounded-3xl'><span>See my journey</span> <MdArrowOutward /></Link>
      </div>
      <div>
        <SubHeading title='What I offer' />
        <div className='text-white'>
          <h5 className='font-bold'>Digital Product Design</h5>
          <p>I specialize in creating intuitive, visually appealing digital products that offer seamless user
            experiences. From initial concept to final implementation, I ensure that every aspect of the design
            process is meticulously crafted to meet your business goals and exceed user expectations.</p>
          <br />
          <div>
            <span className='font-bold'>User Experience (UX) Design:</span> <span> I focus on understanding your users&apos; needs and behaviors to create designs that are both user-friendly and engaging. By conducting thorough research and usability testing, I ensure that your digital product is intuitive and effective.</span>
          </div>
          <div>
            <span className='font-bold'>User Interface (UI) Design:</span> <span> I focus on understanding your users&apos; needs and behaviors to create designs that are both user-friendly and engaging. By conducting thorough research and usability testing, I ensure that your digital product is intuitive and effective.</span>
          </div>
          <div>
            <span className='font-bold'>Mobile App Design:</span> <span>  I design mobile applications that are not only beautiful but also highly functional. Whether you need an app for iOS or Android, I create designs that provide a seamless experience across all devices.</span>
          </div>
          <div>
            <span className='font-bold'>Web Design:</span> <span>  I build responsive websites that look and function perfectly on any device. My web designs are optimized for performance and usability, ensuring your visitors have a great experience every time.</span>
          </div>
          <br />
          <h5 className='font-bold'>Brand Identity Design</h5>
          <p>Your brand is more than just a logo—it&apos;s the entire visual language that defines your company. I create cohesive brand identities that tell your story, resonate with your audience, and set you apart from the competition.</p>
          <br />
          <div>
            <span className='font-bold'>Logo Design:</span> <span> A logo is the cornerstone of your brand identity. I design memorable and versatile logos that capture the essence of your brand and leave a lasting impression.</span>
          </div>
          <div>
            <span className='font-bold'>Brand Guidelines: </span> <span> Consistency is key to a strong brand. I develop comprehensive brand guidelines that ensure all your communications are cohesive and aligned with your brand&apos;s voice and vision.</span>
          </div>
          <div>
            <span className='font-bold'>Visual Identity Systems: </span> <span> From color palettes to typography and iconography, I create a complete visual identity system that provides a unified look across all your brand touchpoints.</span>
          </div>
          <div>
            <span className='font-bold'>Marketing Collateral: </span> <span> I design a wide range of marketing materials, including business cards, brochures, and social media graphics, to help you effectively promote your brand.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMePage