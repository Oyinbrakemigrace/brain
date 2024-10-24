import React from 'react'

function DqrEmpathyMap() {
    const information = [
        {
            title: "Say & Do",
            subtitles: ["Diners: Express interest in seamless payment methods and quick service.", "Restaurant Owners: Implementing technology to improve customer experience and streamline operations."]
        },
        {
            title: "Think",
            subtitles: ["Diners: Desire for convenience and efficiency in dining experiences.", "Restaurant Owners: Concerns about operational efficiency and customer satisfaction."]
        },
        {
            title: "See",
            subtitles: ["Diners: Increasing use of technology in dining establishments.", "Restaurant Owners: Growing demand for contactless payment solutions."]
        },
        {
            title: "Hear",
            subtitles: ["Diners: Recommendations from friends and online reviews about dining experiences.", "Restaurant Owners: Feedback from customers about service quality and payment processes."]
        },
    ]
    return (
        <div>
            <p className='lg:text-center text-start'>
                Using an empathy map, we visualized the attitudes and behaviors of diners and restaurant
                owners, <br className='hidden lg:block' /> gaining valuable insights to align Dine QR&apos;s 
                offerings with their needs:
            </p>
            <div className='mt-6 lg:bg-[#25282c] lg:bg-empathy-bg lg:bg-no-repeat lg:bg-center bg-none lg:p-6 p-0 rounded lg:border border-none lg:border-[#344053]'>
                <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center gap-4 lg:p-5'>
                    {
                        information.map((process) => {
                            return (
                                <div className='p-6 text-gray-200 max-w-[28rem] bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#7f7e7e] backdrop-blur-[4px]'>
                                    <div className='mt-2'>
                                        <h2 className='font-bold text-xl capitalize'>{process.title}</h2>
                                        {
                                            process.subtitles.map((sub) => {
                                                return (
                                                    <li className='capitalize mt-2'>{sub}</li>
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

export default DqrEmpathyMap