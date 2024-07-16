import React from 'react'
import img from '../assets/prototypeImage.png'
import Marquee from 'react-fast-marquee';

function ProjectMarquee() {
    const images = [
        img,
        img,
        img,
        img,
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <Marquee speed={200} pauseOnHover={true}>
                <div className="flex">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} className="lg:w-96 w-52 inline-block mr-4" />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default ProjectMarquee
