import React from 'react'
import SwiftleeSubheading from './SwiftleeSubheading'


function ProblemStatement() {
    const roles = [
        {
            icon: "/assets/SwiftLee/search.png",
            text: "UX Research",
        },
        {
            icon: "/assets/SwiftLee/uxWriter.png",
            text: "UX Writing",
        },
        {
            icon: "/assets/SwiftLee/visualDesign.png",
            text: "Visual Design",
        },
        {
            icon: "/assets/SwiftLee/usabilityTesting.png",
            text: "Usability Testing",
        },
    ]

    const tools = ["Figma", "FigJam", "Illustrator", "Photoshop"]


    return (
        <div className='lg:px-14 px-7 text-gray-200 mt-10'>
            <div className='flex lg:flex-row flex-col-reverse justify-between'>
                <img src="/assets/SwiftLee/problemStatementMockup.png" alt="problemStatementMockup" className='lg:block hidden' />
                <div className='lg:w-1/2 w-full'>
                    <SwiftleeSubheading text="Problem Statement" />
                    <p>
                        <span>
                            Traditional ride-hailing apps are often viewed as luxuries, particularly in regions 
                            with limited infrastructure. Many lack affordable options for group rides or future 
                            travel planning. Swiftlee tackles these challenges by offering shared rides along 
                            predefined routes, reducing costs, and introducing the ability to reserve rides 
                            in advance for important events like flights or meetings, with optional return trips.
                        </span>
                    </p>
                </div>
            </div>
            <div className='lg:mt-20 mt-10'>
                <SwiftleeSubheading text="Role Played" />
                <div className='lg:space-x-5 space-y-5 lg:space-y-0 flex lg:flex-row flex-col justify-center'>
                    {
                        roles.map((role, index) => {
                            return (
                                <div key={index} className="px-16 py-3 text-[#344053] bg-[#fccd0e] rounded-[44px] shadow-inner justify-center items-center gap-3 inline-flex">
                                    <img src={role.icon} alt="icon" />
                                    <p>{role.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='lg:mt-20 mt-10'>
                <SwiftleeSubheading text="Tools Used" />
                <div className='lg:space-x-5 space-y-5 lg:space-y-0 flex lg:flex-row flex-col justify-center'>
                    {
                        tools.map((tool) => {
                            return (
                                <div className='px-16 py-3 text-[#000] bg-[#fccd0e] rounded-[44px] justify-center items-center gap-3 inline-flex'>
                                    <img src="/assets/SwiftLee/tool.png" alt="" />
                                    <p>{tool}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProblemStatement