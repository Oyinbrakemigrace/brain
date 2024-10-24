import React from 'react'
import PayquickHeader from './PayquickHeader'
import Point from './Point'
import urbanist from "/assets/PayQuick/urbanist.png"

function TypographyAndColors() {
    const colorsData = [
        {
            colorImage : "/assets/PayQuick/color1.png",
            colorType: "Primary color",
            colorCode: "#A31621"
        },
        {
            colorImage : "/assets/PayQuick/color2.png",
            colorType: "secondary color",
            colorCode: "#FFF3F4"
        },
        {
            colorImage : "/assets/PayQuick/color3.png",
            colorType: "text color",
            colorCode: "#1E1E1E"
        },
        {
            colorImage : "/assets/PayQuick/color4.png",
            colorType: "text color",
            colorCode: "#595959"
        },
        {
            colorImage : "/assets/PayQuick/color5.png",
            colorType: "BG color",
            colorCode: "#F3F3F3"
        },
        {
            colorImage : "/assets/PayQuick/color6.png",
            colorType: "other color",
            colorCode: "#FF6D00"
        },
        {
            colorImage : "/assets/PayQuick/color7.png",
            colorType: "other color",
            colorCode: "#0082FF"
        },
        {
            colorImage : "/assets/PayQuick/color8.png",
            colorType: "other color",
            colorCode: "#053941"
        },
        {
            colorImage : "/assets/PayQuick/color9.png",
            colorType: "other color",
            colorCode: "#0F5F6A"
        },
        {
            colorImage : "/assets/PayQuick/color10.png",
            colorType: "other color",
            colorCode: "#F8EC97"
        },
    ]
    return (
        <div>
            <PayquickHeader title="Typography & Colors" />
            <div className='lg:px-20 px-8 text-[#f2f3f6]'>
                <Point title="Font Used" />
                <div className='space-y-6 mt-10'>
                    <img src={urbanist} alt="" />
                    <p className='text-lg mt-6'>
                        Urbanist is a clean and contemporary sans serif font. It is characterized by its
                        sleek and straightforward design, enhancing readability and providing a wide range
                        of options for various design needs
                    </p>
                    <div className='p-5 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-2xl shadow border border-[#7f7e7e] backdrop-blur-[10px]'>
                        <div className='flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-3'>
                            <div className='lg:space-y-3'>
                                <p className='font-bold'>Urbanist Bold</p>
                                <p className='font-medium'>Urbanist Medium</p>
                                <p className='font-normal'>Urbanist Regular</p>
                                <p className='font-light'>Urbanist Light</p>
                            </div>
                            <div className='lg:space-y-3'>
                                <p>ABCDEFGHIJKLMNOPQRSTUVWXZ</p>
                                <p>abcdefghijklmnopqrstuvwxyz</p>
                                <p>1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 p-5 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-[32px] shadow border border-[#7f7e7e] backdrop-blur-[10px]'>
                    <Point title="Color used"/>
                    <div className='grid lg:grid-cols-5 grid-cols-2 gap-4 mt-10'>
                        {
                            colorsData.map((data)=>{
                                return(
                                    <div className='m-auto'>
                                        <img src={data.colorImage} alt="colorImg" />
                                        <p className='text-center'>{data.colorType}</p>
                                        <p className='text-center'>{data.colorCode}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypographyAndColors