import React from 'react'
import Subheading from './Subheading'


function ProblemStatement() {
    const roles = [
        {
            icon: "/assets/DineQR/uxResearch.png",
            text: "UX Research",
            bg: "px-16 py-3 text-[#6840c6] bg-gradient-to-b from-[#f4ebff] to-[#cec6d8] rounded-[44px] shadow-inner justify-center items-center gap-3 inline-flex"
        },
        {
            icon: "/assets/DineQR/uxWriting.png",
            text: "UX Writing",
            bg: "px-16 py-3 text-[#027947] bg-[#d0fadf] rounded-[44px] shadow-inner justify-center items-center gap-3 inline-flex"
        },
        {
            icon: "/assets/DineQR/visualDesign.png",
            text: "Visual Design",
            bg: "px-16 py-3 bg-[#fdc2d2] text-[#901f17] rounded-[44px] shadow-inner justify-center items-center gap-3 inline-flex"
        },
        {
            icon: "/assets/DineQR/usabilityTesting.png",
            text: "Usability Testing",
            bg: "px-16 py-3 bg-[#fce6f5] text-[#c01573] rounded-[44px] shadow-inner justify-center items-center gap-3 inline-flex"
        },
    ]

    const tools = ["Figma","FigJam","Illustrator","Photoshop"]


    return (
        <div className='lg:px-14 px-7 text-gray-200 mt-10'>
            <div className='flex lg:flex-row flex-col-reverse justify-between'>
                <img src="/assets/DineQR/problemStatement.png" alt="problemStatementMockup" />
                <div className='lg:w-1/2 w-full'>
                    <Subheading text="Problem Statement" />
                    <p>
                        <span className='lg:block hidden'>
                            Many diners face the challenge of managing payments at restaurants, especially
                            when handling physical cash or navigating complex payment processes. Dine QR aims to
                            simplify this by facilitating seamless payments through QR codes, enabling diners to
                            settle bills conveniently while dining out. This approach alleviates the hassle of
                            traditional payment methods and enhances the overall dining experience by focusing on
                            convenience and efficiency.
                        </span>
                        <span className='block lg:hidden mb-6'>To streamline the dining experience by making menu viewing, ordering,
                            and payment processes easier and more efficient for customers, while reducing
                            operational burdens for restaurant staff.
                        </span>
                    </p>
                </div>
            </div>
            <div className='lg:mt-20 mt-10'>
                <Subheading text="Role Played"/>
                <div className='lg:space-x-5 space-y-5 lg:space-y-0 flex lg:flex-row flex-col justify-center'>
                    {
                        roles.map((role,index) => {
                            return (
                                <div key={index} className={role.bg}>
                                    <img src={role.icon} alt="icon" />
                                    <p>{role.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='lg:mt-20 mt-10'>
                <Subheading text="Tools Used"/>
                <div className='lg:space-x-5 space-y-5 lg:space-y-0 flex lg:flex-row flex-col justify-center'>
                    {
                        tools.map((tool)=>{
                            return(
                                <div className='px-16 py-3 text-[#2c3282] bg-[#c6d7fe] rounded-[44px] justify-center items-center gap-3 inline-flex'>
                                    <img src="/assets/DineQR/tool.png" alt="" />
                                    <p>{tool}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProblemStatement