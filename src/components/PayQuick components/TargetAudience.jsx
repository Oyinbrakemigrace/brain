import React from 'react'
import PayquickHeader from './PayquickHeader'
import audience from "/assets/PayQuick/targetAudience.png"

function TargetAudience() {
  return (
      <div className='lg:px-20 px-8'>
        <PayquickHeader title="Target Audience" />
        <div className='lg:flex justify-between items-start'>
            <div className='bg-[#d6e6ff] lg:w-1/3 p-6 rounded-xl'>
                <li>Small Business Owners</li>
                <li>P2P Users</li>
                <li>Families and Friends</li>
                <li>Frequent Shoppers</li>
            </div>
            <img src={audience} alt="" className='mt-3 lg:mt-0 m-auto lg:m-0' />
        </div>
    </div>
  )
}

export default TargetAudience