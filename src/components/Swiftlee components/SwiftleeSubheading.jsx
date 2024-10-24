import React from 'react'

function SwiftleeSubheading({ text, isFidelity = false }) {
    return (
        <div className={`flex ${isFidelity ? "justify-center" : "justify-start"}`}>
            <h1 className="relative inline-block text-2xl capitalize font-semibold text-white after:content-[''] after:w-full after:h-1 after:bg-[#fccd0e] after:mt-[-30px] after:inline-block after:align-middle after:relative before:content-[''] before:absolute before:right-[-10px] before:w-3 before:h-3 before:bg-[#fccd0e] before:rounded-full before:top-[2.2rem] before:transform before:-translate-y-1/2">
                {text}
            </h1>
        </div>
    )
}

export default SwiftleeSubheading