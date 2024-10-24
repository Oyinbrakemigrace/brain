import React from 'react'
import DqrHeading from './DqrHeading'

function DesignProcess() {
    const processes = [
        {
            title: "Emphatise",
            subtitles: ["surveys", "in-depth interviews", "competitors analysis"]
        },
        {
            title: "Define",
            subtitles: ["job stories", "user flow", "information testing"]
        },
        {
            title: "Prototype",
            subtitles: ["style guide", "in-depth UI design", "UI Kit"]
        },
        {
            title: "test",
            subtitles: ["comprehension survey", "a/b testing", "usability testing"]
        },
    ]
    return (
        <div>
            <DqrHeading title="Design Process" />
            <div className='lg:px-14 px-7 lg:bg-snake bg-vertical-snake bg-no-repeat bg-clip-content lg:bg-center bg-center bg-contain  w-full'>
                <div className='bg-opacity-40 p-6 bg-[#26282c] rounded-lg grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-6 items-center place-items-center'>
                    {
                        processes.map((process) => {
                            return (
                                <div className='h-60 p-6 text-gray-200 w-64 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#7f7e7e] backdrop-blur-[4px]'>
                                    <div className='h-5 w-5 bg-gray-200 rounded-full' />
                                    <div className='mt-12'>
                                        <h2 className='font-semibold text-xl capitalize'>{process.title}</h2>
                                        {
                                            process.subtitles.map((sub) => {
                                                return (
                                                    <li className='capitalize'>{sub}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default DesignProcess