import React from 'react'
import SwiftleeHeading from './SwiftleeHeading'
import SwiftleeSubheading from './SwiftleeSubheading'

function HighFidelity() {
  return (
    <div>
          <SwiftleeHeading title="High Fidelity"/>
          <div className='lg:px-14 px-7 text-gray-200'>
              <p className='lg:text-center text-start'>
                To ensure an intuitive and user-friendly experience for Swiftlee users, we structured the app&apos;s
                  content <br className='hidden lg:block' /> based on insights gathered from user research. We created a user flows and wireframes to 
                  visually <br className='hidden lg:block' /> represent the information architecture. These designs were shared with the team for feedback, 
                  and we <br className='hidden lg:block' /> made adjustments to refine the app&apos;s overall user experience.
            </p>
            <div className='mt-16'>
                <SwiftleeSubheading text="Screens" isFidelity/>
          <div className='lg:block hidden'>
            <div className='grid grid-cols-5 gap-4 mt-5'>
              <img src="/assets/SwiftLee/prototype1.png" alt="" />
              <img src="/assets/SwiftLee/prototype2.png" alt="" />
              <img src="/assets/SwiftLee/prototype3.png" alt="" />
              <img src="/assets/SwiftLee/prototype4.png" alt="" />
              <img src="/assets/SwiftLee/prototype5.png" alt="" />
              <img src="/assets/SwiftLee/prototype6.png" alt="" />
              <img src="/assets/SwiftLee/prototype7.png" alt="" />
              <img src="/assets/SwiftLee/prototype8.png" alt="" />
              <img src="/assets/SwiftLee/prototype9.png" alt="" />
              <img src="/assets/SwiftLee/prototype10.png" alt="" />
              <img src="/assets/SwiftLee/prototype11.png" alt="" />
              <img src="/assets/SwiftLee/prototype12.png" alt="" />
              <img src="/assets/SwiftLee/prototype13.png" alt="" />
              <img src="/assets/SwiftLee/prototype14.png" alt="" />
              <img src="/assets/SwiftLee/prototype15.png" alt="" />
              <img src="/assets/SwiftLee/prototype16.png" alt="" />
              <img src="/assets/SwiftLee/prototype17.png" alt="" />
              <img src="/assets/SwiftLee/prototype18.png" alt="" />
              <img src="/assets/SwiftLee/prototype19.png" alt="" />
              <img src="/assets/SwiftLee/prototype20.png" alt="" />
            </div>
                </div>
          <div className='block lg:hidden'>
            <div className='grid grid-cols-3 gap-4 mt-5'>
              <img src="/assets/SwiftLee/prototype1.png" alt="" />
              <img src="/assets/SwiftLee/prototype6.png" alt="" />
              <img src="/assets/SwiftLee/prototype7.png" alt="" />
              <img src="/assets/SwiftLee/prototype18.png" alt="" />
              <img src="/assets/SwiftLee/prototype5.png" alt="" />
              <img src="/assets/SwiftLee/prototype6.png" alt="" />
              <img src="/assets/SwiftLee/prototype10.png" alt="" />
              <img src="/assets/SwiftLee/prototype8.png" alt="" />
              <img src="/assets/SwiftLee/prototype20.png" alt="" />
            </div>
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default HighFidelity