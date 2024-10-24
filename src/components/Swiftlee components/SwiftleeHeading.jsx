import React from 'react'

function SwiftleeHeading({ isOverview = false, title }) {
    return (
        <div className={`flex mb-7 items-center ${isOverview ? "justify-start" : "justify-center"} space-x-2`}>
            <div className='w-2 h-12 rounded-md bg-[#fccd0e]' />
            <p className='text-[#fbfcfc] lg:text-4xl text-3xl font-semibold'>{title}</p>
        </div>
    )
}

export default SwiftleeHeading