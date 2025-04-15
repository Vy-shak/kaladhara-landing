import React from 'react'

interface heading {
  title: string
}

function Heading({ title }: heading) {
  return (
    <div className='flex gap-y-2 justify-center items-center flex-col'>
      <div className='w-fit flex gap-y-2 justify-center items-center flex-col'>
        <span className='text-white font-semibold  text-3xl'>{title}</span>
        <div className='flex justify-center items-center w-full'>
          <div className='w-1/3 bg-KalaRed-500 h-3'>

          </div>
          <div className='w-1/3 bg-KalaYellow-500 h-3'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
