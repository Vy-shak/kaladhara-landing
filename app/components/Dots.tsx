import React from 'react'

function Dots() {
  return (
    <div className='w-fit flex gap-x-3 justify-center items-center rounded-full'>
      <div className='w-fit flex justify-center items-center gap-x-2'>
        <span className='text-4xl font-semibold'>culture</span>
        <div className='w-3 h-3 rounded-full bg-red-600'>
        </div>
      </div>
      <div className='w-fit flex justify-center items-center gap-x-2'>
        <span className='text-4xl font-semibold'>connected</span>
        <div className='w-3 h-3 rounded-full bg-yellow-600'>
        </div>
      </div>
    </div>
  )
}

export default Dots
