import React from 'react'
import Image from 'next/image'
import { Pattern3 } from '@/public'
import Block from '../components/macro/Block'

function Theartist() {
    return (
        <section className='w-full flex-col text-white  gap-y-6 flex justify-between items-center'>
            <div className=' flex-col gap-y-4 flex justify-between items-center'>
                <span className='text-white font-semibold  text-3xl'>The art and aritst</span>
            </div>
            <div className='w-full flex  justify-between items-center'>
                <Image className='object-cover w-7' alt="pattern" src={Pattern3} />
                <div className='w-full px-6 gap-y-6 flex-grow flex flex-col justify-center items-center'>
                    <div className='w-full shrink-0 gap-x-4 flex justify-center h-28 items-start'>
                        <div className='w-1/2 shrink-0 bg-neutral-800 rounded-lg h-28'></div>
                        <Block />
                        <div className='w-full flex justify-start items-start'>
                            <p>Behind every handcrafted piece lies a story — of heritage passed down, </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-start items-center'>
                        <button className='px-12 sm:px-16 lg:px-20 py-3  bg-KalaYellow-500 text-xs sm:text-sm lg:py-4    font-semibold text-neutral-800'>EXPLORE</button>
                    </div>
                </div>
                <Image className='object-cover w-7' alt="pattern" src={Pattern3} />
            </div>
        </section>
    )
}

export default Theartist
