import React from 'react'
import PayquickHeader from './PayquickHeader'
import prototype1 from "/assets/PayQuick/prototype1.png"
import prototype2 from "/assets/PayQuick/prototype2.png"
import prototype3 from "/assets/PayQuick/prototype3.png"
import prototype4 from "/assets/PayQuick/prototype4.png"
import prototype5 from "/assets/PayQuick/prototype5.png"
import prototype6 from "/assets/PayQuick/prototype6.png"
import prototype7 from "/assets/PayQuick/prototype7.png"
import prototype8 from "/assets/PayQuick/prototype8.png"
import prototype9 from "/assets/PayQuick/prototype9.png"
import prototype10 from "/assets/PayQuick/prototype10.png"
import prototype11 from "/assets/PayQuick/prototype11.png"
import prototype12 from "/assets/PayQuick/prototype12.png"
import prototype13 from "/assets/PayQuick/prototype13.png"
import prototype14 from "/assets/PayQuick/prototype14.png"
import prototype15 from "/assets/PayQuick/prototype15.png"
import prototype16 from "/assets/PayQuick/prototype16.png"

function Prototype() {
  return (
    <div className='bg-[#292a2c] lg:p-10 p-5'>
      <PayquickHeader title="Prototype"/>
      <div className='grid grid-cols-4 lg:gap-6 gap-3 place-items-center'>
        <img src={prototype1} alt="" />
        <img src={prototype2} alt="" className='lg:mt-20 mt-14'/>
        <img src={prototype3} alt="" />
        <img src={prototype4} alt="" className='lg:mt-20 mt-14' />
        <img src={prototype5} alt="" />
        <img src={prototype6} alt="" className='lg:mt-20 mt-14' />
        <img src={prototype7} alt="" />
        <img src={prototype8} alt="" className='lg:mt-20 mt-14' />
        <img src={prototype9} alt="" />
        <img src={prototype10} alt="" className='lg:mt-20 mt-14' />
        <img src={prototype11} alt="" />
        <img src={prototype12} alt="" className='lg:mt-20 mt-14' />
        <img src={prototype13} alt="" />
        <img src={prototype14} alt="" className='lg:mt-20 mt-14' />
        <img src={prototype15} alt="" />
        <img src={prototype16} alt="" className='lg:mt-20 mt-14' />
      </div>
    </div>
  )
}

export default Prototype