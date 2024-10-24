import React from 'react'
import PayquickHeader from './PayquickHeader'
import Point from './Point'
import profile from '/assets/PayQuick/user.png'
import EmpathyMap from './EmpathyMap'

function DefinePhase() {

    return (
        <div className='lg:px-20 px-8'>
            <PayquickHeader title="Define Phase" />
            <div>
                <Point title="User Persona" />
                <p className='text-[#f2f3f6] text-lg mt-5'>
                    Understanding our users is crucial for the successful development of PayQuik.
                    By creating detailed personas, we gain insights into their needs, behaviors, and
                    motivations. This helps us design solutions that address their pain points and enhance
                    their overall experience. Here, we present the persona of John Martinez, a small business
                    owner, whose goals, frustrations, needs, and motivations guide our user-centered design and
                    development process.
                </p>
                <div className='lg:flex lg:flex-row justify-center items-center lg:space-x-10 mt-5'>
                    <div className='bg-white p-8 rounded-3xl'>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <img src={profile} alt="" />
                            <p className='font-semibold lg:text-2xl text-xl'>John Martinez</p>
                        </div>
                        <div className='my-5'>
                            <div className='grid grid-cols-2'>
                                <p className='font-semibold lg:text-base text-xs'>Age</p>
                                <p className='lg:text-base text-xs'>35</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className='font-semibold lg:text-base text-xs'>Gender</p>
                                <p className='lg:text-base text-xs'>Male</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className='font-semibold lg:text-base text-xs'>Education</p>
                                <p className='lg:text-base text-xs'>Master’s degree in Finance</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className='font-semibold lg:text-base text-xs'>Status</p>
                                <p className='lg:text-base text-xs'>Married with two children</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className='font-semibold lg:text-base text-xs'>Occupation</p>
                                <p className='lg:text-base text-xs'>Small Business Owner (Coffee Shop)</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className='font-semibold lg:text-base text-xs'>Location</p>
                                <p className='lg:text-base text-xs'>Denver, Colorado</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-semibold lg:text-2xl text-xl text-center'>Personality</h3>
                            <div className='flex lg:space-x-4 space-x-1 mt-5'>
                                <div className='bg-[#e3d9fd] lg:text-base text-xs px-3 py-2 rounded-3xl'>Detail Oriented</div>
                                <div className='bg-[#e3d9fd] lg:text-base text-xs px-3 py-2 rounded-3xl'>Tech savy</div>
                                <div className='bg-[#e3d9fd] lg:text-base text-xs px-3 py-2 rounded-3xl'>Creative</div>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-semibold lg:text-2xl text-xl text-center mb-3'>Brief Story</h3>
                                <p className='lg:text-base text-sm'>John runs a busy coffee shop and frequently pays suppliers and employees.
                                    He needs a payment solution that simplifies group payments and helps him manage
                                    his finances efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6 mx-auto lg:mt-0 mt-5'>
                        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
                            <h3 className='font-semibold text-2xl mb-5'>Goals</h3>
                            <div>
                                <li>To improve cash flow management</li>
                                <li>To simplify supplier payments</li>
                                <li>To enhance overall operational efficiency.</li>
                            </div>
                        </div>
                        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
                            <h3 className='font-semibold text-2xl mb-5'>Frustrations</h3>
                            <div>
                                <li>Complicated payment processes</li>
                                <li>Lack of comprehensive financial tracking tools.</li>
                            </div>
                        </div>
                        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
                            <h3 className='font-semibold text-2xl mb-5'>Needs</h3>
                            <div>
                                <li>Group payment capabilities</li>
                                <li>User-friendly interface</li>
                                <li>Integrated income/expense tracking</li>
                            </div>
                        </div>
                        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
                            <h3 className='font-semibold text-2xl mb-5'>Motivations</h3>
                            <div>
                                <p>He is motivated by the desire to streamline operations and
                                    improve cash flow management, allowing him to spend more time
                                    engaging with customers and growing his business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EmpathyMap />
        </div>
    )
}

export default DefinePhase