import React from 'react'
import PayquickHeader from './PayquickHeader'

function CardSorting() {
    const cardsData = [
        {
            id: 1,
            title: "Dashboard",
            points: ["overview","recent transactions", "account summary"]
        },
        {
            id: 2,
            title: "payments",
            points: ["sned money","group payments", "transaction history"]
        },
        {
            id: 3,
            title: "invoices",
            points: ["create invoice","manage invoice", "invoice history"]
        },
        {
            id: 4,
            title: "reports",
            points: ["income reports","expense reports", "financial statements"]
        },
        {
            id: 5,
            title: "settings",
            points: ["account settings","security settings", "notifications preferences"]
        },
        {
            id: 6,
            title: "support",
            points: ["help support","contact support"]
        },
    ]
  return (
      <div className='lg:px-20 px-8'>
          <PayquickHeader title="Card Sorting"/>
          <p className='text-[#f2f3f6] text-lg'>The goal of the card sorting procedure was to determine the most intuitive structure for 
            PayQuik&apos;s features and navigation to ensure ease of use for users like John Martinez.</p>
            <div className='lg:grid lg:grid-cols-3 lg:gap-10 mt-6 space-y-4 lg:space-y-0'>
                {
                    cardsData.map((data)=>{
                        return(
                            <div className='bg-[#fcf7da] rounded-3xl'>
                                <div className='bg-[#ecdc6a] text-center capitalize rounded-t-3xl p-3 text-xl text-gray-700 font-bold'>{data.title}</div>
                                <div className='p-3'>
                                    {
                                    data.points.map((item)=>{
                                        return(
                                            <li className='capitalize'>{item}</li>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default CardSorting