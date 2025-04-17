import React from 'react'
import Image from 'next/image'
import { LogoLg } from '@/public'


const navItems = [
  { id: "nav-language", name: "Language", link: "/language" },
  { id: "nav-about", name: "About", link: "/about" },
  { id: "nav-marketplace", name: "Marketplace", link: "/marketplace" },
  { id: "nav-visit", name: "Visit us", link: "/visit" },
];


function Navbar() {
  return (
    <div className='w-full flex px-12 py-4 absolute top-0 justify-between items-center'>
        <Image className='h-16 w-fit' alt='kaldhara logo' src={LogoLg}/>
        <div className='flex justify-center items-center gap-x-8'>
          {navItems.map((item)=>(
            <span key={item.id} className='font-medium text-lg text-white'>{item.name}</span>
          ))}
        </div>
    </div>
  )
}

export default Navbar
