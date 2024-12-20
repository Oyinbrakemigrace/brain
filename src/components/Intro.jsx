import React from 'react'

function Intro() {
    return (
        <div className='h-full w-full lg:mt-10 mt-8'>
            <div className='flex flex-col justify-center items-center gap-3 px-6'>
                <h2 className='lg:font-bold font-medium leading-snug lg:text-center text-5xl text-white'>
                    Enyinnaya Chimela Brain,
                </h2>
                <h4 className='font-normal lg:text-center text-4xl leading-snug italic text-white'>
                    Creative Product Designer & a <br /> Brand Strategist/Identity Designer
                </h4>
            </div>
            <div className='hidden lg:block bg-gradient-to-r from-[#676767] to-[#313131] hover:bg-gradient-to-l hover:from-[#321D4A] hover:to-[#4A535A] mt-8 rounded-[32px] shadow-inner border border-zinc-600 backdrop-blur-[20px] m-auto w-[14%] py-4'>
                <div className='flex justify-center items-center gap-3 text-white'>
                    <p>Available for work</p><span className='h-3 w-3 flex bg-green-500 rounded-full'></span>
                </div>
            </div>
            
        </div>
    )
}

export default Intro