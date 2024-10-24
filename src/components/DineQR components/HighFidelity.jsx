import React from 'react'
import DqrHeading from './DqrHeading'
import Subheading from './Subheading'

function HighFidelity() {
  return (
    <div>
          <DqrHeading title=" High Fidelity" />
          <div className='lg:px-14 px-7 text-gray-200'>
            <p className='lg:text-center text-start'>
            To ensure an intuitive and user-friendly experience for Dine QR users, 
                  we organized and structured the <br className='hidden lg:block' /> content based on insights gathered from user 
                  research. We then created a sitemap, user flows, and <br className='hidden lg:block' /> wireframes to visually 
                  represent the proposed information architecture, which we shared with the team <br className='hidden lg:block' />
            for feedback and made necessary adjustments.
            </p>
              <div className='mt-16'>
                <Subheading text="Mobile" isFidelity/>
                <div className='grid grid-cols-3 place-items-center gap-4 mt-10'>
                    <img src="/assets/DineQR/prototype1.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype2.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype3.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype4.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype5.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype6.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype7.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype8.png" alt="prototype" />
                    <img src="/assets/DineQR/prototype9.png" alt="prototype" />
                </div>
            </div>
              <div className='mt-16'>
                <Subheading text="Desktop" isFidelity/>
                <div className='grid grid-cols-2 place-items-center lg:gap-14 gap-6 mt-10'>
                    <img src="/assets/DineQR/laptop1.png" alt="prototype" />
                    <img src="/assets/DineQR/laptop2.png" alt="prototype" />
                    <img src="/assets/DineQR/laptop3.png" alt="prototype" />
                    <img src="/assets/DineQR/laptop4.png" alt="prototype" />
                </div>
            </div>
          </div>
    </div>
  )
}

export default HighFidelity