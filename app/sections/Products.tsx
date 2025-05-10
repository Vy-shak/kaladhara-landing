import React from 'react'
import Image from 'next/image'
import { Pattern1, Pattern2 } from '../../public/index'
import Marquee from 'react-fast-marquee'

function Products() {
    const patt = [1, 2, 3, 4, 5]
    return (
        <section className='w-full gap-y-3 flex-col flex justify-between items-center'>
            <span className='text-white font-semibold text-center  text-3xl'>Crafted by Tradition,  Carried Through Time</span>
            <div className='w-full gap-y-4 flex justify-center items-center flex-col'>
                <div className='w-full h-52 sm:h-60 lg:h-72 xl:h-80 overflow-hidden flex justify-between  items-center'>
                    <Image alt='pattern1' src={Pattern1} className='w-16 sm:w-20 lg:w-24 xl:w-30  ' />

                    <div className='flex w-full max-w-9xl bg-neutral-800 rounded-xl h-full'></div>

                    <Image alt='pattern1' src={Pattern1} className='w-16 sm:w-20 lg:w-24 xl:w-30 ' />
                </div>
                <button className='px-12 sm:px-16 lg:px-20 py-3  bg-KalaYellow-500 text-xs sm:text-sm lg:py-4    font-semibold text-neutral-800'>EXPLORE</button>
            </div>
            <Marquee>
                <Image className='h-10 sm:h-12 lg:h-14 xl:lg-16 w-full object-cover overflow-hidden' alt='pattern2' src={Pattern2} />
            </Marquee>
        </section>
    )
}

export default Products
