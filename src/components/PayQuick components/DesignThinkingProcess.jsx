import React from 'react'
import PayquickHeader from './PayquickHeader'
import emphatize from "/assets/PayQuick/emphatize.png"
import define from "/assets/PayQuick/define.png"
import ideate from "/assets/PayQuick/ideate.png"
import design from "/assets/PayQuick/design.png"
import test from "/assets/PayQuick/test.png"
import arrow from "/assets/PayQuick/arrow.png"

function DesignThinkingProcess() {
    const data = [
        {
            title: "Empathize",
            description: "Conducted user interviews to understand pain points and expectations regarding digital payments."
        },
        {
            title: "Define",
            description: "Identified key user challenges—speed, simplicity, and security—defining them as core pillars for PayQuik."
        },
        {
            title: "Ideate",
            description: "Explored various potential solutions to streamline the payment process and make the app user-friendly."
        },
        {
            title: "Prototype",
            description: "Created wireframes and clickable prototypes to test the solution with real users."
        },
        {
            title: "Test",
            description: "Iterated the design based on feedback, focusing on ease of use, accessibility, and overall exp erience."
        },
    ]
    return (
        <div>
            <PayquickHeader title="Design Thinking Process" />
            <div className='space-y-3 lg:block hidden'>
                {
                    data.map((item) => (
                        <div>
                            <p className='font-normal  text-[#f2f3f6] tracking-[1px] lg:px-20 px-8 leading-9 '><span className='text-lg font-bold pr-1'>{item.title}:</span> {item.description}</p>
                        </div>
                    ))
                } 
            </div>
            <div className='block lg:hidden'>
                <p className='text-[#f2f3f6] px-8 font-normal'>
                    In designing the PayQuik platform, we adopted a user-centered approach, 
                    conducting extensive research through surveys and usability testing to understand 
                    the needs of small business owners, p2p users, families, and frequent shoppers. This 
                    insight guided us in creating an intuitive and functional platform, with an iterative 
                    development process that incorporates user feedback at each stage to refine features and 
                    enhance user satisfaction. <br /><br />
                    Our design focuses on integrating features that cater to diverse user needs, such as 
                    Group Pay, invoice generation, and detailed financial reporting, all while prioritizing 
                    security through advanced encryption and rigorous testing. Post-launch, we continue to 
                    prioritize ongoing user feedback and market analysis, ensuring that PayQuik remains 
                    relevant and adapts to changing needs, setting a new standard in digital payment solutions.
                </p>
            </div>
                <div className='flex lg:flex-row lg:justify-evenly flex-col justify-center items-center mt-10'>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src={emphatize} alt="" className='w-24 m-auto lg:m-0' />
                        <img src={arrow} alt="" className='hidden lg:block' />
                    </div>
                    <p className='text-[#e3d9fd] text-2xl font-bold my-4 lg:text-start text-center'>Emphatize</p>
                    <div className='text-[#f2f3f6] mt-3 lg:text-start text-center'>
                        <p>User Research</p>
                        <p>User Interview</p>
                        <p>Entrant Analysis</p>
                    </div>
                    <img src={arrow} alt="" className='lg:hidden m-auto block rotate-90 my-10' />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src={define} alt="" className='w-24 m-auto lg:m-0' />
                        <img src={arrow} alt="" className='hidden lg:block' />
                    </div>
                    <p className='text-[#e3d9fd] text-2xl font-bold my-4 lg:text-start text-center'>Define</p>
                    <div className='text-[#f2f3f6] mt-3 lg:text-start text-center'>
                        <p>User Persona</p>
                        <p>User Jouney Map</p>
                        <p>Goal Statement</p>
                        <p>Empathy Map</p>
                    </div>
                    <img src={arrow} alt="" className='lg:hidden m-auto block rotate-90 my-10' />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src={ideate} alt="" className='w-24 m-auto lg:m-0' />
                        <img src={arrow} alt="" className='hidden lg:block' />
                    </div>
                    <p className='text-[#e3d9fd] text-2xl font-bold my-4 lg:text-start text-center'>Ideate</p>
                    <div className='text-[#f2f3f6] mt-3 lg:text-start text-center'>
                        <p>Brainstorming</p>
                        <p>Card Sorting</p>
                        <p>User Flow</p>
                    </div>
                    <img src={arrow} alt="" className='lg:hidden m-auto block rotate-90 my-10' />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src={design} alt="" className='w-24 m-auto lg:m-0' />
                        <img src={arrow} alt="" className='hidden lg:block' />
                    </div>
                    <p className='text-[#e3d9fd] text-2xl font-bold my-4 lg:text-start text-center'>Design</p>
                    <div className='text-[#f2f3f6] mt-3 lg:text-start text-center'>
                        <p>Paper Wireframes</p>
                        <p>Visual Design</p>
                        <p>Prototype</p>
                    </div>
                    <img src={arrow} alt="" className='lg:hidden m-auto block rotate-90 my-10' />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src={test} alt="" className='w-24 m-auto lg:m-0' />
                    </div>
                    <p className='text-[#e3d9fd] text-2xl font-bold my-4 lg:text-start text-center '>Test</p>
                    <div className='text-[#f2f3f6] mt-3 lg:text-start text-center'>
                        <p>CheckUsability</p>
                        <p>Survey Insight</p>
                        <p>Improvements</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default DesignThinkingProcess