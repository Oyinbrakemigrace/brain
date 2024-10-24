import React from 'react'

function KeyInsightsDerived() {
    const insights = [
        {
            id: 1,
            title: "User Pain Points and Challenge",
            description: "Specific challenges with current payment methods, such as transaction delays, group payment difficulties, and invoice management issues."
        },
        {
            id: 2,
            title: "Essential Features",
            description: "Critical features needed in a digital payment platform, including secure transactions, seamless group payments, efficient invoicing tools, and comprehensive financial reporting."
        },
        {
            id: 3,
            title: "Security Concerns",
            description: " Importance of security in financial transactions and specific security features that would increase user confidence and trust."
        },
        {
            id: 4,
            title: "User Preferences and Usability",
            description: "User likes and dislikes about current payment platforms, preferences for user experience and interface design, and feedback on platform intuitiveness."
        },
        {
            id: 5,
            title: "Desired Improvements",
            description: "Areas where current solutions fall short and specific improvements or new features users would like to see, such as enhanced reporting capabilities, better invoice management, or more user-friendly interfaces."
        },
    ]
    return (
        <div className='lg:px-20 px-8 bg-[#26282c] mt-10 lg:mt-20 lg:p-10 p-5 '>
            <h1 className='text-[#e3d9fd] text-2xl font-bold mb-6'>Key Insights Derived</h1>
            <div className='space-y-1'>
                {
                    insights.map((insight) => {
                        return (
                            <div className='text-[#f2f3f6]'>
                                <span className='font-bold mr-2'>{insight.id}.</span><span className='font-bold mr-3'>{insight.title}:</span><span>{insight.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default KeyInsightsDerived