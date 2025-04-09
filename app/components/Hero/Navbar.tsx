import React from 'react'
import Image from 'next/image'
import { LogoLg } from '@/public'

function Navbar() {
  return (
    <div className='w-screen flex px-4 py-2 absolute top-0 justify-between items-center'>
        <Image className='h-12 w-fit' alt='kaldhara logo' src={LogoLg}/>
        <div className='flex justify-center items-center gap-x-4'>
            <span className='font-medium text-sm text-white'>LAN</span>
            <span className='font-medium text-sm text-white'>ABOUT</span>
        </div>
    </div>
  )
}

export default Navbar
