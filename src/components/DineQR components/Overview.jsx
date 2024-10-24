import React from 'react'
import DqrHeading from './DqrHeading'
import Subheading from './Subheading'

function Overview() {
    return (
        <div className="lg:px-14 px-7 text-gray-200 flex justify-between">
            <div className='lg:w-1/2 w-full'>
                <DqrHeading title="Overview" isOverview={true} />
                <p className='mb-7'>
                    Dining out has always been a popular way for people to relax and enjoy good food. 
                    However, the traditional dining experience comes with its challenges, especially in 
                    today&apos;s fast-paced world where convenience and efficiency are highly valued.
                    This situation is further complicated by the recent global emphasis on hygiene and 
                    contactless interactions due to health concerns. Dine QR addresses these issues by 
                    providing a seamless, contactless way for customers to interact with restaurant services, 
                    setting a new standard in the dining industry. This innovative approach not only enhances 
                    the dining experience but also reflects the growing demand for modern, tech-savvy solutions 
                    in everyday life.
                </p>
                <Subheading text="Goal"/>
                <p>
                    To streamline the dining experience by making menu viewing, ordering, and payment 
                    processes easier and more efficient for customers, while reducing operational burdens 
                    for restaurant staff.
                </p>
            </div>
            <img src="/assets/DineQR/overviewRes.png" alt="" className='w-96 hidden lg:block '/>
        </div>
    )
}

export default Overview