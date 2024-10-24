import React from 'react'
import workSpace from '/assets/workSpace.svg'
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
        <Link to='https://drive.google.com/file/d/1ZYae4QLFcvvMgvf0AJYUNOFKyRwYq3FW/view?usp=drive_link' className='text-white font-bold text-lg flex items-center justify-center mx-auto border border-zinc-600 gap-3 bg-gradient-to-r from-zinc-600 to-zinc-800px-6 py-3 w-full md:w-1/4 lg:mt-10 mt-8 rounded-3xl'><span>See my journey</span> <MdArrowOutward /></Link>
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