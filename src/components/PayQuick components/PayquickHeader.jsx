import React from 'react'

function PayquickHeader({title}) {
  return (
    <div className='flex flex-col justify-center items-center mt-12 lg:mb-12 mb-8'>
      <div className="w-[307px] h-12 bg-gradient-to-t from-[#302d32] to-[#3f3f40] rounded-[32px] shadow border border-[#7f7e7e] backdrop-blur-[10px] flex items-center justify-center" >
        <p className="text-[#f8ec97] text-2xl font-semibold">{title}</p>
      </div>
    </div>
  )
}

export default PayquickHeader