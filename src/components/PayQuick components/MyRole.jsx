import React from 'react'
import PayquickHeader from './PayquickHeader'

function MyRole() {
    const roles = ["Design Strategy", "Problem Solution", "Information Architecture", "Empathy Mapping", "user persona", "User Flow", "Prototyping", "Wireframes", "Competitive Analysis", "Visual Design", "User research", "Usability Testing"]
    return (
        <div>
            <PayquickHeader title="My Role" />
            <div className='bg-[#26282c] p-10'>
                <div className='grid lg:grid-cols-4 grid-cols-3 place-items-center gap-6'>
                    {roles.map((role,index) => (
                        <div key={index} className='border-2 border-white bg-gradient-to-b from-[#e9e1fe] to-[#e7dffb] capitalize text-[#4a3879] w-fit lg:py-3 lg:px-5 py-2 px-2 text-xs lg:text-base rounded-tr-3xl rounded-bl-3xl'>
                            {role}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyRole