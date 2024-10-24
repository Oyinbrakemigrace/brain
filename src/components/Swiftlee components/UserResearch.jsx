import React from 'react'
import SwiftLeeUserPersona from './SwiftLeeUserPersona'
import SwiftleeSubheading from './SwiftleeSubheading'
import SwiftLeeEmpathyMap from './SwiftLeeEmpathyMap'
import SwiftleeHeading from './SwiftleeHeading'

function UserResearch() {
    return (
        <div>
            <SwiftleeHeading title="User Research" />
            <div className='lg:px-14 px-7 text-gray-200'>
                <p>
                    Interviews with users in remote and urban settings highlighted the high costs and 
                    limited flexibility of existing ride-hailing services. Many needed affordable shared 
                    options or the ability to book rides ahead of time for scheduled events. Swiftlee&apos;s
                    features were designed to meet these specific needs, enhancing user experience
                </p>
                <div className='mt-16'>
                    <SwiftleeSubheading text="User persona" />
                    <SwiftLeeUserPersona />
                </div>
                <div className='mt-16'>
                    <SwiftleeSubheading text="Empathy Map" />
                    <SwiftLeeEmpathyMap />
                </div>
            </div>
        </div>
    )
}

export default UserResearch