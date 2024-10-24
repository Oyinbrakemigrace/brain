import React from 'react'

function SwiftLeeUserPersona() {
    const information = [
        {
            title: "Behaviour",
            subtitles: ["Frequently uses mobile apps to plan his trips, book rides, and discover local experiences.", "Prioritizes flexibility and looks for transportation options that fit his travel style.", "Often travels on a budget but enjoys services that provide good value without compromising on comfort."]
        },
        {
            title: "Motivation",
            subtitles: ["Efficient and affordable transportation in a city like Lagos, where navigating traffic and unknown routes can be challenging.", "Seeking options that allow group travel, so he can share costs while meeting new people.", "Looking for ride-hailing services that offer customizations, like future reservations for planned outings and events."]
        },
        {
            title: "Goals",
            subtitles: ["Find a reliable ride-hailing app that offers seamless bookings and affordable group rides.", "Reserve rides for important dates, like guided tours or airport transfers, without last-minute stress.", "Travel safely and on time, while reducing costs by sharing rides with others going the same route."]
        },
        {
            title: "Painpoint",
            subtitles: ["High costs of traditional ride-hailing apps, especially when traveling alone.", "Difficulty finding reliable transportation in unfamiliar parts of Lagos.", "Frustration with the lack of options for reserving rides in advance for important events."]
        },
    ]
    return (
        <div className='lg:bg-[#25282c] bg-none lg:p-6 p-0 rounded lg:border border-none lg:border-[#344053]'>
            <div className='flex lg:flex-row flex-col lg:gap-0 gap-4 justify-center items-center lg:space-x-4 space-x-0'>
                <div className='p-6 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#fccd0e] backdrop-blur-[10px]'>
                    <img src="/assets/SwiftLee/user.png" alt="user" className='w-60 m-auto' />
                    <div>
                        <h2 className='font-semibold text-3xl my-5'>Tobe Nwigwe</h2>
                        <div className='space-y-3'>
                            <p>Profession: Tourist</p>
                            <p>Location: Lagos</p>
                            <span className='flex justify-between'>
                                <p>Age: 41</p>
                                <p>Sex: Male</p>
                            </span>
                        </div>
                        <div>
                            <h2 className='font-semibold text-3xl mt-6 mb-6'>Personality</h2>
                            <div className='space-y-4'>
                                <div className='space-y-1'>
                                    <p>Extrovert</p>
                                    <div className='w-72 h-2 rounded-full bg-gray-200'>
                                        <div className='h-2 w-56 bg-[#fccd0e] rounded-full' />
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p>Feeling</p>
                                    <div className='w-72 h-2 rounded-full bg-gray-200'>
                                        <div className='h-2 w-60 bg-[#fccd0e] rounded-full' />
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p>Affiliation</p>
                                    <div className='w-72 h-2 rounded-full bg-gray-200'>
                                        <div className='h-2 w-52 bg-[#fccd0e] rounded-full' />
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p>Judging</p>
                                    <div className='w-72 h-2 rounded-full bg-gray-200'>
                                        <div className='h-2 w-40 bg-[#fccd0e] rounded-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='p-6 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#fccd0e] backdrop-blur-[10px]'>
                        <h3 className='text-3xl font-semibold'>Bio</h3>
                        <p className='mt-2'>Tobe Nwigwe is a 32-year-old tourist who loves to explore new 
                            cities and cultures. Currently visiting Lagos, he often finds himself navigating 
                            unfamiliar locations and figuring out local transportation. Tobe values convenience 
                            and affordability, preferring services that make his journeys stress-free while 
                            allowing him to experience the essence of the places he visits.</p>
                    </div>
                    <div className='grid lg:grid-cols-2 mt-5 gap-3'>
                        {
                            information.map((info) => {
                                return (
                                    <div className='p-6 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#fccd0e] backdrop-blur-[10px]'>
                                        <h2 className='font-semibold text-2xl mb-2 capitalize'>{info.title}</h2>
                                        {
                                            info.subtitles.map((data) => {
                                                return (
                                                    <li>{data}</li>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwiftLeeUserPersona