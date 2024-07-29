import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialData from '../data/TestimonialData';
import SubHeading from './SubHeading';

function MobileTestimonial() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="lg:px-36 px-4 lg:hidden block">
            <div className="container mx-auto px-4">
                <SubHeading title='Testimonials' />
                    <Slider {...settings}>
                        {TestimonialData.map((testimonial, index) => (
                            <div key={index} className='space-x-5'>
                                <div className='bg-neutral-400 bg-opacity-10 p-3 hover:border hover:border-zinc-500 rounded-2xl'>
                                    <div key={index} className="bg-gradient-to-br from-white/30 to-white/15 text-white p-6 min-h-60 w-full rounded-lg shadow-lg">
                                        <p className="mb-4">{testimonial.feedback}</p>
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
                    </Slider>
                </div>
        </section>
    );
};

export default MobileTestimonial;
