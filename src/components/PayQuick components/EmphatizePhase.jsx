import React from 'react'
import PayquickHeader from './PayquickHeader'
import Point from './Point'
import Interview from './Interview'
import KeyInsightsDerived from './KeyInsightsDerived'
import QuantitativeResearch from './QuantitativeResearch'
import KeyInsightsTwo from './KeyInsightsTwo'

function EmphatizePhase(){
    return (
        <div>
            <PayquickHeader title="Emphatize Phase" />
            <div className='lg:px-20 px-8'>
                <Point title="Qualitative Research" />
                <p className='text-[#f2f3f6] text-lg font-normal mt-5'>
                    To design a user-centered platform, we conducted extensive qualitative research 
                    involving in-depth interviews, focus groups, and user observation sessions with 
                    small business owners, p2p users, families, and frequent shoppers. This direct 
                    engagement allowed us to understand their financial management needs, uncovering 
                    key insights into their pain points, preferences, and daily challenges. Our research
                    revealed the need for seamless group payments, efficient invoice generation, and 
                    comprehensive financial reporting tools. These insights shaped the design and development 
                    of PayQuik, ensuring that the platform addresses the specific needs of our diverse user 
                    base with practical and intuitive solutions.
                </p>
                <Interview />
            </div>
            <KeyInsightsDerived />
            <div className='lg:px-20 px-8'>
                <QuantitativeResearch />
            </div>
            <KeyInsightsTwo />
        </div>
    )
}

export default EmphatizePhase