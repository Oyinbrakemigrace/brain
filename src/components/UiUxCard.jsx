import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-router-dom'

function UiUxCard({ data }) {
    return (
        <div className='w-full bg-[#262626] max-w-[500px] hover:border hover:border-zinc-400 p-4 rounded-3xl text-white group'>
            <div>
                <div>
                    <img src={data.projectImage} alt="projectImage" className='w-full' />
                </div>
                <div className='bg-stone-700/70 group-hover:bg-gradient-to-r group-hover:from-gray-600 mt-8 group-hover:to-zinc-800 border border-zinc-600 backdrop-blur-2xl  p-4 rounded-2xl'>
                    <h3 className='font-bold text-3xl mb-4'>{data.projectName}</h3>
                    <p>{data.projectDescription}</p>
                    <div className='flex justify-between items-center mt-6'>
                        <Link to={data.projectHref} className='flex items-center gap-3 bg-[#272727] group-hover:bg-gradient-to-l group-hover:from-gray-600 group-hover:to-zinc-800 lg:px-6 px-4 py-3 text-sm lg:text-base rounded-3xl'><span>View case study</span> <MdArrowForward /></Link>
                        <div>
                            {data.isProjectDone ? <div className='flex items-center gap-2'><span className='h-3 w-3 flex bg-green-500 rounded-full'></span> <p>Online</p></div> : <div className='flex items-center gap-2'><span className='h-3 w-3 flex bg-orange-500 rounded-full'></span> <p>In Dev</p></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiUxCard