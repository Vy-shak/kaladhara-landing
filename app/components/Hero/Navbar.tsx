import React from 'react'
import Image from 'next/image'
import { LogoLg,Burgericon } from '../../../public/index'


const navItems = [
  { id: "nav-language", name: "Language", link: "/language" },
  { id: "nav-about", name: "About", link: "/about" },
  { id: "nav-marketplace", name: "Marketplace", link: "/marketplace" },
  { id: "nav-visit", name: "Visit us", link: "/visit" },
];


function Navbar() {
  return (
    <div className='w-full flex py-1 px-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 absolute top-0 justify-between items-center'>
        <Image className=' h-12 sm:h-14 lg:h-16 w-fit' alt='kaldhara logo' src={LogoLg}/>
        <div className='sm:flex hidden justify-center items-center gap-x-8'>
          {navItems.map((item)=>(
            <span key={item.id} className='font-medium   text-lg text-white'>{item.name}</span>
          ))}
        </div>
        <Image className='sm:hidden block h-8 w-fit' alt='kaldhara logo' src={Burgericon}/> 

    </div>
  )
}

export default Navbar
