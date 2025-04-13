import React from 'react'
import Image from 'next/image'
import { Pattern1 } from '@/public'

function Products() {
    return (
        <section className='w-full gap-y-12 flex-col flex justify-between items-center'>
            <span className='text-white font-semibold  text-3xl'>"Crafted by Tradition,  Carried Through Time"</span>
            <div className='w-full gap-y-8 flex justify-center items-center flex-col'>
                <div className='w-full h-96 overflow-hidden flex items-center'>
                    <Image alt='pattern1' src={Pattern1} className='w-auto ' />

                    <div className='flex-grow bg-neutral-800 rounded-2xl h-full'></div>

                    <Image alt='pattern1' src={Pattern1} className='w-auto ' />
                </div>
                <button className='px-20 py-4 bg-KalaYellow-500 font-semibold text-neutral-800'>EXPLORE</button>
            </div>

        </section>
    )
}

export default Products
