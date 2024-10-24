import React from 'react'

function Point({title}) {
  return (
      <div className='flex items-center gap-3'>
          <div className='w-7 h-7 rounded-full bg-[#e7f8fa] flex justify-center items-center'>
              <div className='w-4 h-4 rounded-full bg-[#ff6d00]' />
          </div>
          <p className='text-[#e3d9fd] text-2xl font-bold'>{title}</p>
      </div>
  )
}

export default Point