import React from 'react'
import Point from './Point'
import profile from '/assets/PayQuick/userYellowBorder.png'

function EmpathyMap() {
  return (
    <div className='mt-16'>
      <Point title="Empathy Map" />
      <div className='relative lg:grid lg:grid-cols-2 gap-4 space-y-5 lg:space-y-0 mt-10'>
        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
          <h3 className='font-semibold text-2xl mb-5'>Says</h3>
          <div>
            <li>"Paying suppliers and staff is too complicated."</li>
            <li>"I need a better way to track my shop’s finances."</li>
            <li>"Transaction delays are unacceptable."</li>
            <li>"A user-friendly payment solution would save me so much time."</li>
          </div>
        </div>
        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
          <h3 className='font-semibold text-2xl mb-5'>Thinks</h3>
          <div>
            <li>"How can I simplify payments for my business?"</li>
            <li>"Is there a way to integrate all my financial needs in one platform?"</li>
            <li>"I want to ensure smooth operations in my shop."</li>
            <li>"I need reliable financial reports to make informed decisions."</li>
          </div>
        </div>
        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
          <h3 className='font-semibold text-2xl mb-5'>Does</h3>
          <div>
            <li>Processes payments to multiple suppliers and employees.</li>
            <li>Reviews financial statements and expense reports.</li>
            <li>Uses a combination of tools for different financial tasks.</li>
            <li>Seeks feedback from other small business owners about payment solutions.</li>
          </div>
        </div>
        <div className='bg-[#f8ec97] p-7 rounded-3xl'>
          <h3 className='font-semibold text-2xl mb-5'>Feels</h3>
          <div>
            <li>Frustrated by the complexity of current payment processes.</li>
            <li>Stressed about managing cash flow and finances.</li>
            <li>Satisfied when transactions are smooth and efficient.</li>
            <li>Confident when he has clear financial insights and reports.</li>
          </div>
        </div>
        <img src={profile} alt="" className='hidden lg:block absolute w-32 left-[43%] top-[35%]' />
      </div>
    </div>
  )
}

export default EmpathyMap