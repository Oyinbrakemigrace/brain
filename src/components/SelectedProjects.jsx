import React from 'react'
import ProjectData from '../data/ProjectData'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from 'react-icons/md'
import ProjectCard from './ProjectCard'
import SubHeading from './SubHeading'

function SelectedProjects() {
    return (
        <div className='lg:px-36 px-4'>
            <SubHeading title='Selected Projects' />
            <div className='grid lg:grid-cols-[repeat(auto-fit,450px)] gap-10 justify-center mt-10'>
                {
                    ProjectData.map((data) => {
                        return (
                            <ProjectCard data={data} key={data.id} />
                        )
                    })
                }
            </div>
            <Link to='/projects' className='text-white font-bold text-lg flex items-center justify-center mx-auto border gap-3 bg-gradient-to-l from-gray-600 to-zinc-800 px-6 py-3 lg:w-1/5 w-full md:w-1/4 mt-8 rounded-3xl'><span>Load More</span> <MdArrowOutward /></Link>
        </div>
    )
}

export default SelectedProjects