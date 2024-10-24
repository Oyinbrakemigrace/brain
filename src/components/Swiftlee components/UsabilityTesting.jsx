import React from 'react'
import SwiftleeHeading from './SwiftleeHeading'
import SwiftleeSubheading from './SwiftleeSubheading'

function UsabilityTesting() {
    return (
        <div>
            <SwiftleeHeading title="Usability Testing" />
            <div className='lg:px-14 px-7 space-y-20 text-gray-200'>
                <div>
                    <SwiftleeSubheading text="Methodology" />
                    <p>
                        The usability test for Swiftlee was designed to evaluate the ease of navigation,
                        reliability, and efficiency of the platform, especially in terms of booking rides,
                        reserving rides, and ride-sharing. Participants included a diverse range of daily
                        commuters and long-distance travelers to represent the app&apos;s target audience.
                        The goal was to assess how intuitive the Swiftlee experience was for users in
                        different real-world scenarios.
                    </p>
                </div>
                <div>
                    <SwiftleeSubheading text="Conclusion" />
                    <p>
                        Based on the usability test results, the final design of Swiftlee was selected as 70 percent
                        of participants appreciated the platform&apos;s seamless ride-sharing experience and quick booking
                        process. On average, participants could book a ride or reserve one within 2 minutes, making
                        the platform 15% faster compared to similar ride-hailing apps.
                        <br /><br />Several users pointed out the simplicity and clarity of the &quot;Book a Seat&quot;
                        feature, which allows commuters to easily share rides based on their routes. Meanwhile,
                        features such as ride customization for individual preferences were well received, but
                        participants suggested further enhancements for the reservation system to make it more
                        flexible. These insights helped us refine the platform to better meet the needs of users
                        while keeping the process efficient.
                    </p>
                </div>
                <div>
                    <SwiftleeSubheading text="Recommendations" />
                    <p>
                        To further improve Swiftlee, the following recommendations were shared with the team
                        to continue enhancing the user experience and incorporate additional features based on
                        user feedback:
                    </p>
                    <div className='mt-3 space-y-2'>
                        <li>Enhanced Reservation Flexibility: Introducing more options to customize return trips when reserving rides, ensuring commuters can manage their time more effectively.</li>
                        <li>Real-Time Ride Tracking: Providing live updates on ride status, allowing users to track their booked or reserved rides with accuracy and transparency.</li>
                        <li>Additional Payment Methods: Expanding the available payment options to accommodate a wider range of users and provide flexibility in transactions.</li>
                        <li>Ride Sharing Optimization: Continuously refining the user interface and experience of the ride-sharing feature to make the "Book a Seat" process more intuitive.</li>
                        <li>Feedback Mechanism: Implementing an easy-to-use feedback system to gather continuous input from commuters, helping to fine-tune future updates and user satisfaction.</li>
                        <p>These recommendations aim to position Swiftlee as a preferred ride-hailing solution, especially in regions where transportation accessibility is a growing need.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsabilityTesting