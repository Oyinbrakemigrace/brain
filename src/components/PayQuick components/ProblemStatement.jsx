import React from 'react'
import mockUps from "/assets/PayQuick/payQuickBg.png"
import payQuickLogo from "/assets/PayQuick/sideImage.png"
import figma from "/assets/PayQuick/figma.png"
import miro from "/assets/PayQuick/miro.png"
import doc from "/assets/PayQuick/doc.png"
import excel from "/assets/PayQuick/excel.png"
import cursor from '/assets/PayQuick/greenCursor.png'
import frame from '/assets/PayQuick/frame.png'
import PayquickHeader from './PayquickHeader'

function ProblemStatement() {
  const logos = [figma, miro, doc, excel]
  return (
    <div>
      <div className='lg:flex'>
        <div className='lg:w-[50%]'>
          <img src={payQuickLogo} alt="" className='lg:mb-14 mb-5 w-20 lg:w-[30%] mt-5 lg:mt-0' />
          <div className='lg:px-20 px-8'>
            <div className='flex lg:justify-start'>
              <img src={frame} alt="" className='lg:w-1/2 w-full ' />
            </div>
            <div className='flex flex-col lg:justify-start justify-center'>
              <h1 className='lg:text-6xl text-5xl font-semibold lg:mt-10 mt-2 text-[#e3d9fd]'>PayQuik</h1>
              <p className='text-[#f2f3f6] text-xl font-normal my-7'>
                Simplifying payments for everyone, everywhere. Fast, secure, and
                user-friendly— built to make transactions effortless.
              </p>
            </div>
            <div className='flex justify-start space-x-5'>
              {
                logos.map((logo, index) => {
                  return (
                    <div className='bg-[#ebebeb] p-4 rounded-full '>
                      <img src={logo} alt="" key={index} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div>
          <img src={mockUps} alt="" className='w-[100%] hidden lg:block' />
        </div>
      </div>
      <PayquickHeader title="Problem Statement" />
      <p className='text-[#f2f3f6] text-lg font-normal lg:px-20 px-8'>
        In an increasingly fast-paced world, many people find current payment processes cumbersome
        and time-consuming. Users often deal with complex apps, inconsistent payment methods, and delays,
        leading to frustration and inefficiency in completing everyday transactions.
      </p>
    </div>
  )
}

export default ProblemStatement