import React from 'react'

function Dots() {
  return (
    <div className='w-fit h-fit flex gap-x-2 justify-center items-center rounded-full'>
      <div className='w-fit h-fit flex justify-center items-center gap-x-1'>
        <span className='text-2xl font-semibold'>culture</span>
        <div className='w-3 relative top-0.5 h-3 rounded-full bg-KalaRed-500'>
        </div>
      </div>
      <div className='w-fit h-fit flex justify-center items-center gap-x-1'>
        <span className='text-2xl  font-semibold'>connected</span>
        <div className='w-3 h-3 relative rounded-full top-0.5 bg-KalaYellow-500'>
        </div>
      </div>
    </div>
  )
}

export default Dots
