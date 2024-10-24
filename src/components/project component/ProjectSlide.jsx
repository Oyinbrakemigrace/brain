import React, { useState, useEffect } from 'react';
import project1 from '/assets/project.png';
import project2 from '/assets/prototypeImage.png';
import Heading from '../Heading';

function ProjectSlide() {
    const images = [project1, project2, project1];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='lg:h-screen h-[50vh]'>
            <Heading title="Featured Projects" />
            <div className="relative w-full lg:h-full h-[80%] overflow-hidden mt-7">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Project ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectSlide;