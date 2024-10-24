import React from 'react'
import DqrHeading from './DqrHeading'
import Subheading from './Subheading'

function InformationArchitecture() {
    return (
        <div>
            <DqrHeading title="Information Architecture" />
            <div className='lg:px-14 px-7 text-gray-200'>
                <p className='lg:text-center text-start'>To ensure an intuitive and user-friendly experience for Dine QR users,
                    we organized and structured the <br className='hidden lg:block' /> content based on insights gathered from user research.
                    We then created a sitemap, user flows, and <br className='hidden lg:block' /> wireframes to visually represent the proposed
                    information architecture, which we shared with the team <br className='hidden lg:block' /> for feedback and made necessary
                    adjustments.
                </p>
                <div className='mt-16'>
                    <Subheading text="Site map" />
                    <img src="/assets/DineQR/dqrSiteMap.png" alt="siteMap" />
                </div>
                <div className='mt-16'>
                    <Subheading text="High Level User Flow" />
                    <img src="/assets/DineQR/dqrHighLevelUserFlow.png" alt="userFlow" />
                </div>
                <div className='mt-16'>
                    <Subheading text="Wireframes" />
                    <p className='lg:text-center text-start'>
                        I created wireframes to quickly visualize and communicate the basic structure and layout
                        of the Dine QR platform before committing <br className='hidden lg:block' /> to more detailed design choices. This process
                        allowed me to iterate on my ideas and gather feedback from stakeholders, ensuring <br className='hidden lg:block' /> that
                        the final design met user needs and project goals.
                    </p>
                    <div className='grid grid-cols-2 place-items-center lg:space-y-4 gap-6 lg:gap-0 mt-10'>
                        <img src="/assets/DineQR/lofi1.png" alt="userFlow" />
                        <img src="/assets/DineQR/lofi2.png" alt="userFlow" />
                        <img src="/assets/DineQR/lofi3.png" alt="userFlow" />
                        <img src="/assets/DineQR/lofi4.png" alt="userFlow" />
                        
                    </div>
                    <div className='flex justify-center space-x-8 mt-4'>
                        <img src="/assets/DineQR/lofi5.png" className='w-20 lg:w-60' alt="userFlow" />
                        <img src="/assets/DineQR/lofi6.png" className='w-20 lg:w-60' alt="userFlow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationArchitecture