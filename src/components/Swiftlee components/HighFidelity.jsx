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
            </div>
          </div>
    </div>
  )
}

export default HighFidelity