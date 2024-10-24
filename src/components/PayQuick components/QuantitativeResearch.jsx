import React from 'react'
import Point from './Point'
import ring1 from "/assets/PayQuick/ringChart1.png"
import ring2 from "/assets/PayQuick/ringChart2.png"
import ring3 from "/assets/PayQuick/ringChart3.png"
import ring4 from "/assets/PayQuick/ringChart4.png"
import ring5 from "/assets/PayQuick/ringChart5.png"
import ring6 from "/assets/PayQuick/ringChart6.png"
import ring7 from "/assets/PayQuick/ringChart7.png"
import ring8 from "/assets/PayQuick/ringChart8.png"
import ring9 from "/assets/PayQuick/ringChart9.png"

function QuantitativeResearch() {
  const researchDetails = [
    {
      id: 1,
      details: "Do you regularly make payments to multiple people at once?",
      image: ring1
    },
    {
      id: 2,
      details: "Have you experienced transaction delays with your current payment methods?",
      image: ring2
    },
    {
      id: 3,
      details: "Do you currently use a digital platform for your financial transactions?",
      image : ring3
    },
    {
      id: 4,
      details: "Do you find it challenging to create and manage invoices?",
      image: ring4
    },
    {
      id: 5,
      details: "Is security a significant concern for you when making financial transactions?",
      image: ring5
    },
    {
      id: 6,
      details: "Do you currently use any tool to track your income and expenses?",
      image: ring6
    },
    {
      id: 7,
      details: "Do you think a group payment feature would be beneficial for your financial management needs?",
      image: ring7
    },
    {
      id: 8,
      details: "Have you encountered difficulties with the user interface of your current payment platform?",
      image: ring8
    },
    {
      id: 9,
      details: "Would you use a feature that allows you to generate detailed financial reports?",
      image: ring9
    }
  ]
  return (
    <div className='mt-10 lg:mt-20'>
      <Point title="Quantitative Research" />
      <p className='text-[#f2f3f6] text-lg font-normal mt-5'>
        To complement our qualitative research, we conducted extensive quantitative research
        through online surveys targeting small business owners, p2p users, families, and frequent
        shoppers to gather measurable data on user behaviors and preferences. By analyzing this data
        with statistical techniques, we identified key trends, such as the high frequency of group
        payments and the demand for secure invoicing tools. This research highlighted common pain points
        like transaction delays and security concerns, guiding our focus on developing a reliable platform.
        User segmentation based on behaviors and needs allowed us to tailor features for different groups,
        ensuring PayQuik meets diverse requirements. The quantitative findings also validated our qualitative
        insights, reinforcing our design decisions and confirming we were addressing the right user needs.
        This comprehensive approach provided actionable data that informed the development of a user-centered
        PayQuik platform.
      </p>
      <div className='grid lg:grid-cols-3 place-items-center grid-cols-2 lg:gap-10 gap-5 mt-10 lg:mt-16'>
        {
          researchDetails.map((researchDetail)=>{
            return(
              <div className='text-[#f2f3f6]'>
                <div className='space-y-4'>
                  <p className='lg:text-center text-start text-sm lg:text-base'>{researchDetail.details}</p>
                  <div className='flex lg:justify-center justify-start items-center space-x-5'>
                    <div className='flex items-center space-x-1'>
                      <p>Yes</p><div className='w-7 h-7 bg-[#6be9a6] rounded-lg' />
                    </div>
                    <div className='flex items-center space-x-1'>
                      <p>No</p><div className='w-7 h-7 bg-[#fecdc9] rounded-lg' />
                    </div>
                  </div>
                  <img src={researchDetail.image} alt="" className='w-48 lg:m-auto m-0' />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default QuantitativeResearch