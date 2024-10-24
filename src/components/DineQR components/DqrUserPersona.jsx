import React from 'react'

function DqrUserPersona() {
    const information = [
        {
            title: "Behaviour",
            subtitles: ["Enjoys dining out as a way to relax and spend time with family.", "Anxious about lengthy wait times and complicated payment processes.", "Prefers seamless and quick dining experiences."]
        },
        {
            title: "Motivation",
            subtitles: ["Achieve a proper work-life balance by saving time on dining out.", "Spend more time with family while enjoying good meals.", "Use efficient tools to streamline dining and payment processes."]
        },
        {
            title: "Goals",
            subtitles: ["Have a smooth and quick dining experience.", "Easily browse menus and place orders without delays.", "Make secure, hassle-free payments without waiting for the bill."]
        },
        {
            title: "Painpoint",
            subtitles: ["Dealing with long wait times for ordering and payment.", "Managing complex payment methods that disrupt the dining experience.", "Finding user-friendly and efficient dining solutions."]
        },
    ]
return (
<div className='lg:bg-[#25282c] bg-none lg:p-6 p-0 rounded lg:border border-none lg:border-[#344053]'>
<div className='flex lg:flex-row flex-col lg:gap-0 gap-4 justify-center items-center lg:space-x-4 space-x-0'>
    <div className='p-6 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#7f7e7e] backdrop-blur-[10px]'>
        <img src="/assets/DineQR/dqrUser.png" alt="user" className='w-60 m-auto' />
        <div>
            <h2 className='font-semibold text-3xl my-3'>Amaka Solomon</h2>
            <div className='space-y-1'>
                <p>Profession: Pharmacist</p>
                <p>Location: Lagos</p>
                <span className='flex justify-between'>
                    <p>Age: 41</p>
                    <p>Sex: Female</p>
                </span>
            </div>
            <div>
                <h2 className='font-semibold text-3xl mt-5 mb-4'>Personality</h2>
                <div className='space-y-2'>
                    <div className='space-y-1'>
                        <p>Extrovert</p>
                        <div className='w-72 h-2 rounded-full bg-gray-200'>
                            <div className='h-2 w-52 bg-[#9d76ed] rounded-full' />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p>Feeling</p>
                        <div className='w-72 h-2 rounded-full bg-gray-200'>
                            <div className='h-2 w-60 bg-[#9d76ed] rounded-full' />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p>Affiliation</p>
                        <div className='w-72 h-2 rounded-full bg-gray-200'>
                            <div className='h-2 w-52 bg-[#9d76ed] rounded-full' />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p>Judging</p>
                        <div className='w-72 h-2 rounded-full bg-gray-200'>
                            <div className='h-2 w-64 bg-[#9d76ed] rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
                <div className='p-6 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#7f7e7e] backdrop-blur-[10px]'>
                <h3 className='text-3xl font-semibold'>Bio</h3>
                    <p className='mt-2'>Amaka is a busy professional who frequently dines out due to her hectic schedule. 
                        She values convenience and efficiency when dining at restaurants. Outside of work, 
                        she enjoys spending quality time with her family and seeks a balanced lifestyle.</p>
        </div>
        <div className='grid lg:grid-cols-2 mt-5 gap-3'>
            {
                information.map((info)=>{
                    return(
                        <div className='p-6 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-lg shadow border border-[#7f7e7e] backdrop-blur-[10px]'>
                            <h2 className='font-semibold text-2xl mb-2 capitalize'>{info.title}</h2>
                            {
                                info.subtitles.map((data)=>{
                                    return(
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

export default DqrUserPersona