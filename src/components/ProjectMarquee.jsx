import React from 'react'
import img1 from '/assets/marquee1.png'
import img2 from '/assets/marquee2.png'
import img3 from '/assets/marquee3.png'
import Marquee from 'react-fast-marquee';

function ProjectMarquee() {
    const images = [
        img1,
        img2,
        img3,
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <Marquee speed={200} pauseOnHover={true}>
                <div className="flex">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} className="lg:w-[30rem] rounded-2xl w-52 inline-block mr-4" />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default ProjectMarquee
