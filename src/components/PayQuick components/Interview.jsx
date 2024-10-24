import React from 'react'
import Point from './Point'

function Interview() {
    const questions = [
        {
            id: 1,
            question: "Can you tell us about your role and daily responsibilities, and how you currently manage your financial transactions ?"
        },
        {
            id: 2,
            question: " What are the biggest challenges you face with your current payment methods ?"
        },
        {
            id: 3,
            question: "How often do you need to make payments to multiple people at once, and what features would make group payments easier for you ?"
        },
        {
            id: 4,
            question: "How do you currently create and manage invoices, and what issues have you encountered in this process ?"
        },
        {
            id: 5,
            question: "How do you track your income and expenses, and what challenges do you face in generating financial reports ?"
        },
        {
            id: 6,
            question: "How important is security for your financial transactions, and what security features would increase your confidence in a new payment platform ?"
        },
        {
            id: 7,
            question: "What do you like most and dislike about your current payment platform ?"
        },
        {
            id: 8,
            question: "Which features do you consider essential for a digital payment platform, and are there any features you feel are missing from your current solution ?"
        },
        {
            id: 9,
            question: "We'd like to show you a prototype of our platform. Can you walk us through your first impressions and suggest any improvements?"
        },
        {
            id: 10,
            question: "Is there anything else you would like to share about your financial management needs or any additional feedback for a digital payment platform ?"
        }
    ]
    return (
        <div className='mt-10 lg:mt-20'>
            <Point title="Interview Questions" />
            <div className='space-y-3 lg:mt-10 mt-5'>
                {
                    questions.map((item)=>(
                        <p key={item.id} className='text-[#f2f3f6] lg:text-[17px] text-[14px] space-x-2'><span>{item.id}.</span><span>{item.question}</span></p>
                    ))
                }
            </div>
        </div>
    )
}

export default Interview