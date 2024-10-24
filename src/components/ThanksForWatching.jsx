import React from 'react'

function ThanksForWatching({ isPayQuick }) {
    return (
        <div className='flex justify-center p-7 lg:p-0'>
            <div className={`text-white ${isPayQuick ? "bg-[#292a2c]" : "bg-transparent"} flex flex-col justify-center items-center lg:px-40 lg:py-10 px-20 py-5 rounded-lg space-y-6 w-fit`}>
                <img src="/assets/PayQuick/chimela.png" alt="" className='w-32 lg:w-72' />
                <p className='lg:text-2xl text-xl font-semibold'>Thank you for viewing</p>
                <span className='text-center lg:text-start'>Reach out via email: <a href="mailto:bryanenyinnaya.be@gmail.com" className='text-[#98a1b2]'>bryanenyinnaya.be@gmail.com</a></span>
            </div>
        </div>
    )
}

export default ThanksForWatching