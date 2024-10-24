import React from 'react'
import SwiftleeHeading from './SwiftleeHeading'
import SwiftleeSubheading from './SwiftleeSubheading'

function Overview() {
    return (
        <div className="lg:px-14 px-7 text-gray-200 flex justify-between">
            <div className='lg:w-[70%] w-full'>
                <SwiftleeHeading title="Overview" isOverview={true} />
                <p className='mb-7'>
                    Transportation in remote areas has been a long-standing challenge. Swiftlee bridges
                    this gap by providing a ride-hailing service designed to be affordable and accessible.
                    Whether commuting individually or as a group, users can customize their ride experience
                    with three distinct booking options: Book a Seat, Book a Ride, and Reserve a Ride,
                    making Swiftlee a game-changer in the ride-hailing space.
                </p>
                <SwiftleeSubheading text="Goal" />
                <p>
                    To make ride-hailing accessible to all, especially in underserved and
                    remote areas, while allowing users to share rides, split costs, and customize
                    travel plans to suit their schedules and preferences.
                </p>
            </div>
            {/* <img src="/assets/DineQR/overviewRes.png" alt="" className='w-96 hidden lg:block ' /> */}
        </div>
    )
}

export default Overview