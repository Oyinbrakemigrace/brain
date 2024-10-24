import React from 'react'

function HeroSection() {
    return (
        <div className='lg:px-14 px-7 flex flex-col lg:flex-row justify-between text-[#eaecf0]'>
            <div>
                <img src="/assets/DineQR/dqrLogo.png" alt="logo" className='lg:mb-16 mb-8 w-1/2' />
                <div className='space-y-4'>
                    <div>
                        <p className='lg:text-4xl text-3xl font-bold'>Dine QR</p>
                        <p className='leading-loose'>Contactless dining platform via QR codes.</p>
                    </div>
                    <div className='flex'>
                        <div className='space-y-2'>
                            <p className='lg:text-4xl text-3xl font-bold'>UX Case Study</p>
                            <img src="/assets/DineQR/underline.png" alt="underlineImg" className='w-[70%] lg:w-full' />
                        </div>
                        <img src="/assets/DineQR/brainCursor.png" alt="" className='mt-10 hidden lg:block' />
                    </div>
                    <div className='lg:pt-0 py-4'>
                        <p className='mb-2 text-2xl'>Duration:</p>
                        <p className='text-[#98a1b2] text-xl'>12th June - 30th August</p>
                        <p className='text-[#98a1b2] text-xl'>(6 weeks)</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/DineQR/dqrLaptopAndphoneMockup.png" alt="dqrMockup" />
            </div>
        </div>
    )
}

export default HeroSection