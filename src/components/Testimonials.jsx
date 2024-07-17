import React from 'react'
import SubHeading from './SubHeading'
import TestimonialData from '../data/TestimonialData'

function Testimonials() {
    return (
        <div className='lg:px-16 px-4 lg:block hidden'>
            <SubHeading title='Testimonials' />
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {TestimonialData.map((testimonial, index) => (
                            <div className='bg-neutral-400 bg-opacity-10 backdrop-blur-lg p-3 hover:border hover:border-zinc-500 rounded-2xl'>
                                <div key={index} className="bg-gradient-to-br from-white/30 to-white/15 text-white p-10 h-full rounded-lg shadow-lg">
                                    <p className="mb-7">{testimonial.feedback}</p>
                                    <div className='absolute bottom-5'>
                                        <div className="flex items-center">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                            <div>
                                                <h3 className="font-bold">{testimonial.name}</h3>
                                                <p className="text-sm">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                           </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Testimonials