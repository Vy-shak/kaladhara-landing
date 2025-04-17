import React from 'react'
import {LogoFooter,LogoText,LinkdinLogo,Instalogo,FacebookLogo} from "../../public/index"
import Image from 'next/image'

function Footer() {
  return (
    <section className='w-full flex  justify-between px-16 items-center'>
        <div className='w-fit gap-x-6 flex justify-center items-start'>
            <Image  alt='kaladhara logo' src={LogoFooter} />
            <div className='w-fit gap-y-4     flex flex-col items-start justify-start'>
                <Image alt='logotext' src={LogoText}/>
                <p className='text-sm font-normal'>A vibrant cultural center dedicated to preserving<br/> and promoting diverse cultural heritage.</p>
                <div className='flex w-fit h-fit justify-center items-center'>
                    <Image alt='linkdine logo' src={LinkdinLogo}/>
                    <Image alt='linkdine logo' src={Instalogo}/>
                    <Image alt='linkdine logo' src={FacebookLogo}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
