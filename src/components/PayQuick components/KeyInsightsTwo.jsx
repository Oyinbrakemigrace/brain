import React from 'react'

function KeyInsightsTwo() {
    const insights = [
        {
            id: 1,
            title: "Group Payments Demand",
            description: "60% of users regularly make payments to multiple people, indicating a strong need for a group payment feature."
        },
        {
            id: 2,
            title: "Digital Platform Usage",
            description: "75% of users currently use a digital platform for financial transactions, highlighting the growing adoption of digital payment solutions."
        },
        {
            id: 3,
            title: "Transaction Delays",
            description: "65% of users have experienced transaction delays, suggesting that speed and reliability are critical concerns."
        },
        {
            id: 4,
            title: "Invoice Management Challenges",
            description: "55% find it challenging to create and manage invoices, indicating a demand for efficient invoicing tools."
        },
        {
            id: 5,
            title: "Security Concerns",
            description: "A significant 85% prioritize security when making financial transactions, emphasizing the need for robust security measures."
        },
        {
            id: 6,
            title: "Interest in Financial Reporting",
            description: "70% would use a feature for generating detailed financial reports, suggesting a strong desire for improved financial tracking."
        },
        {
            id: 7,
            title: "Income and Expense Tracking",
            description: "50% currently use tools for tracking income and expenses, indicating a split in user behavior and potential for increased interest in integrated tracking features."
        },
        {
            id: 8,
            title: "Preference for Comprehensive Services",
            description: "80% prefer a platform that offers both airtime / data purchases and gift card redemption, showing demand for versatile financial services."
        },
        {
            id: 9,
            title: "User Interface Improvement",
            description: "45% have encountered difficulties with the user interface of current platforms, highlighting the need for a user-friendly design."
        },
        {
            id: 10,
            title: "Value of Group Payment Features",
            description: "68 % believe a group payment feature would be beneficial, reinforcing the importance of addressing this need in the platform design."
        }
    ]
    return (
        <div className='lg:px-20 px-8 bg-[#26282c] mt-10 lg:mt-20 lg:p-10 p-5 '>
            <h1 className='text-[#e3d9fd] text-2xl font-bold mb-6'>Key Insights Derived</h1>
            <div className='space-y-2'>
                {
                    insights.map((insight) => {
                        return (
                            <div key={insight.id} className='text-[#f2f3f6]'>
                                <span className='font-bold mr-2'>{insight.id}.</span><span className='font-bold mr-3'>{insight.title}:</span><span>{insight.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default KeyInsightsTwo


