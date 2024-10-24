import React from 'react'
import SwiftleeSubheading from "./SwiftleeSubheading"

function SwiftLeeEmpathyMap() {
  const information = [
    {
      title: "Say & Do",
      subtitles: ["Asks friends or locals for advice on the best transportation options.", "I need an affordable ride to the airport.", "Plans trips ahead of time but is flexible with last-minute changes.", "Frequently checks their phone for available rides and price updates."]
    },
    {
      title: "Think",
      subtitles: ["Is this ride safe and reliable?", "Can I afford this trip without going over budget?", "Will I be able to get to my destination on time given the traffic?", "Can I share this ride with someone going the same route to save money?"]
    },
    {
      title: "See",
      subtitles: ["Sees fluctuating prices on other ride-hailing apps.", "Sees fluctuating prices on other ride-hailing apps.", "Observes long wait times for individual rides, especially during rush hours.", "Experiences overcrowded public transport in peak periods."]
    },
    {
      title: "Hear",
      subtitles: ["Feedback from other users about the reliability or unavailability of rides.", "Friends or locals recommending specific ride-hailing apps or services."]
    },
  ]
  return (
    <div>
      <p className='lg:text-center text-start'>
        Using an empathy map, we visualized the attitudes and behaviors of diners and restaurant
        owners, <br className='hidden lg:block' /> gaining valuable insights to align Dine QR&apos;s
        offerings with their needs:
      </p>
      <div className='mt-6 lg:bg-[#25282c] lg:bg-empathy-swift-bg lg:bg-no-repeat lg:bg-center bg-none lg:p-6 p-0 rounded lg:border border-none lg:border-[#344053]'>
        <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center gap-4 lg:p-5'>
          {
            information.map((process) => {
              return (
                <div className='p-6 text-gray-200 max-w-[30rem] border-[#fccd0e]  h-full bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border backdrop-blur-[4px]'>
                  <div className='mt-2'>
                    <h2 className='font-bold text-xl capitalize'>{process.title}</h2>
                    {
                      process.subtitles.map((sub) => {
                        return (
                          <li className='capitalize mt-2'>{sub}</li>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='mt-16'>
        <SwiftleeSubheading text="The Solution Swiftlee Brings" />
        <div>
          <p>
            Swiftlee addresses key challenges in the ride-hailing space, especially in regions
            like Nigeria, where transportation can be costly and inaccessible. We are offering a
            solution that makes ride-hailing affordable, convenient, and accessible for everyone,
            particularly for commuters traveling the same route.
          </p>
          <div className='mt-1 space-y-2'>
            <p><span className='font-bold'>1. Group Rides (Book a Seat): </span>Passengers heading in the same direction can share a ride, reducing costs and making transport more accessible.</p>
            <p><span className='font-bold'>2. On-Demand Rides (Book a Ride): </span> Users can book entire rides instantly, ensuring a convenient and private travel experience.</p>
            <p><span className='font-bold'>3. Future Reservations (Reserve a Ride): </span>Commuters can pre-book rides for important appointments, flights, or meetings and even opt for a return trip.</p>
            <p>Swiftlee makes ride-hailing more efficient, budget-friendly, and adaptable, meeting the needs of modern-day commuters.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SwiftLeeEmpathyMap