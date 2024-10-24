import React from 'react'
import SwiftleeHeading from './SwiftleeHeading'

function InformationArchitecture() {
    return (
        <div>
            <SwiftleeHeading title="Information Architecture" />
            <div className='lg:px-14 px-7 text-gray-200 lg:text-center text-start'>
                <p>To ensure an intuitive and user-friendly experience for Swiftlee users, we structured
                    the app&apos;s features <br className='hidden lg:block' /> based on insights gathered from user research. We then developed a
                    user flow to visually represent the <br className='hidden lg:block' /> app&apos;s information architecture. These visuals
                    were shared with the team for feedback, and adjustments <br className='hidden lg:block' /> were made to optimize the user
                    experience and ensure seamless navigation.
                </p>
                <div className='lg:mt-10 mt-5'>
                    <img src="/assets/SwiftLee/informationArchitecture.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default InformationArchitecture