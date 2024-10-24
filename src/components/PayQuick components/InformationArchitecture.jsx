import React from 'react'
import PayquickHeader from './PayquickHeader'
import chart from "/assets/PayQuick/infoArchitecture.png"

function InformationArchitecture() {
  return (
    <div>
          <PayquickHeader title="Information Architecture"/>
          <div className='lg:px-20 px-8'>
              <div className='bg-[#f5f7f8] p-3 rounded-3xl'>
                  <img src={chart} alt="InformationArchitecture" />
            </div>
          </div>
    </div>
  )
}

export default InformationArchitecture