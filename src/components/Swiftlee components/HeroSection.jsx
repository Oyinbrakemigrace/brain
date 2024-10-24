import React from 'react'

function HeroSection() {
    return (
        <div className='lg:px-14 px-7 flex flex-col lg:flex-row justify-between text-[#eaecf0]'>
            <div>
                <img src="/assets/SwiftLee/logo.png" alt="logo" className='lg:mb-16 mb-8 ' />
                <div className='space-y-4'>
                    <div>
                        <p className='lg:text-4xl text-3xl font-bold'>Swiftlee</p>
                        <p className='leading-loose'>Making ride hailing accessible to even the remote places.</p>
                    </div>
                    <div className='flex'>
                        <div className='space-y-2'>
                            <p className='lg:text-3xl text-2xl font-bold'>UX Case Study</p>
                            <img src="/assets/SwiftLee/underline.png" alt="underlineImg" className='w-[70%] lg:w-full' />
                        </div>
                        <img src="/assets/SwiftLee/cursorImage.png" alt="" className='mt-10 hidden lg:block' />
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/SwiftLee/heroMockup.png" alt="swiftLeeMockup" />
            </div>
        </div>
    )
}

export default HeroSection