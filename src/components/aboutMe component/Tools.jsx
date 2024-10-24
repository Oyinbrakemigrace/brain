import React from 'react'
import circle from '/assets/smoothStar.svg'
import Marquee from 'react-fast-marquee';

function Tools() {
    const tools = [
        {
            id:1,
            toolName : 'Illustrator',
            image: circle
        },
        {
            id:2,
            toolName : 'Adobe XD',
            image: circle
        },
        {
            id:3,
            toolName : 'Photoshop',
            image: circle
        },
        {
            id:4,
            toolName : 'Framer',
            image: circle
        },
        {
            id:5,
            toolName : 'Illustrator',
            image: circle
        },
        {
            id:6,
            toolName : 'Adobe XD',
            image: circle
        },
        {
            id:7,
            toolName : 'Photoshop',
            image: circle
        },
        {
            id:8,
            toolName : 'Framer',
            image: circle
        },
    ]
  return (
    <div>
          <Marquee speed={50} pauseOnHover={true}>
            <div className='flex justify-center space-x-10'>
                {
                    tools.map((tool)=>{
                        return(
                            <div className='flex items-center gap-14'>
                                <img src={tool.image} alt="logo" />
                                <p className='font-bold text-white text-2xl'>{tool.toolName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Marquee>
    </div>
  )
}

export default Tools