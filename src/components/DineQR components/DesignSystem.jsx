import React from 'react'
import DqrHeading from './DqrHeading'

function DesignSystem() {
  return (
    <div>
          <DqrHeading title="Design System"/>
          <div className='lg:px-14 px-7 text-gray-200'>
              <p className='lg:text-center text-start'>To ensure a consistent and cohesive user experience throughout the Dine QR project,
                  I utilized a <br className='hidden lg:block' /> comprehensive design system. This approach helped maintain uniformity in
                  style, branding, accessibility, <br className='hidden lg:block' /> and usability across all design elements.</p>
                  <div>
                    <img src="/assets/DineQR/designSystem1.png" alt="" className='mt-10' />
                    <div className='flex lg:flex-row flex-col justify-center mt-3 lg:space-x-2 lg:space-y-0 space-y-3 items-center'>
                    <img src="/assets/DineQR/designSystem2.png" alt="" />
                    <img src="/assets/DineQR/designSystem3.png" alt="" />
                    </div>
                  </div>
          </div>
    </div>
  )
}

export default DesignSystem