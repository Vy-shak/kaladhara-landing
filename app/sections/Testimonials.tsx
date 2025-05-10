import React from 'react'
import Heading from '../components/macro/Heading'

function Testimonials() {
  return (
    <section className='w-full px-16 flex flex-col gap-y-8  py-2'>
      <Heading title='Echoes Inside Kaladhara'/>
      <div className='w-full flex justify-center items-center text-xl'>
              <div className='w-full h-24 sm:h-28 lg:h-32 flex bg-neutral-800 px-4 gap-x-2 rounded-lg py-2 justify-start items-center'>
        <div className='w-fit h-full flex justify-center items-center flex-col'>
          <div className='w-2 shrink-0 h-1/2 bg-KalaRed-500'>

          </div>
          <div className='w-2 shrink-0 h-1/2 bg-KalaYellow-500'>
          </div>
        </div>
        <p className='h-full text-sm sm:text-lg'>"The energy, the performances, the attention to detail — Kaladhara is where the past and present of Kerala meet in harmony."</p>
      </div>
      </div>
    </section>
  )
}

export default Testimonials
