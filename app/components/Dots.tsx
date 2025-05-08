import React from 'react'

function Dots() {
  return (
    <div className='w-fit h-fit flex gap-x-2 sm:gap-x-3 lg:gap-x-5 xl:gap-x-6 justify-center items-center rounded-full'>
      <div className='w-fit h-fit flex justify-center items-center gap-x-1 lg:gap-x-2'>
        <span className='text-xl sm:text-2xl lg:text-3xl font-semibold'>Culture</span>
        <div className='w-2 relative sm:w-3 sm:h-3 top-0.5 h-2 rounded-full bg-KalaRed-500'>
        </div>
      </div>
      <div className='w-fit h-fit flex justify-center lg: gap-x-2 items-center gap-x-1'>
        <span className='text-xl sm:text-2xl lg:text-3xl   font-semibold'>Connected</span>
        <div className='w-2 h-2 sm:w-3 sm:h-3 relative rounded-full top-0.5 bg-KalaYellow-500'>
        </div>
      </div>
    </div>
  )
}

export default Dots
